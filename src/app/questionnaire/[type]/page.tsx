"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow
} from '@/components/ui/table'
import { 
    AlertDialog, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger 
} from '@/components/ui/alert-dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { a, b, c, p2pe } from '../../../data/questions'

import { answersA } from "@/data/saqa/answers"
// import { answersB } from "@/data/saqb/answers"
import { answersC } from "@/data/saqc/answers"
import { answersP2PE } from "@/data/p2pe/answers"

import { AInfo } from '@/data/saqa/info'
import { BInfo } from '@/data/saqb/info'
import { CInfo } from '@/data/saqc/info'
import { p2peInfo } from '@/data/p2pe/info';

import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Text } from "lucide-react"

interface SecurityQuestion {
    question: string;
    domain: string;
    requirement: string;
    issueIfNotCompliant: string;
    remediation: string;
}

export default function Questionnaire({ params }: { params: { type: string } }) {
    const allMap : { [key: string]: [ string[], any, SecurityQuestion[] ] } = {
        'a': [ a, AInfo, answersA ],
        'b': [ b, BInfo, [] ],
        'c': [ c, CInfo, answersC ],
        'p2pe': [ p2pe, p2peInfo, answersP2PE ]
    }

    const questions: string[] = allMap[params.type][0]
    const info: any = allMap[params.type][1]
    const answers: SecurityQuestion[] = allMap[params.type][2]

    const [checkedStates, setCheckedStates] = useState(Array(questions.length).fill(""))
    const [autofill, setAutofill] = useState(true)
    const [submit, setSubmit] = useState(false)
    const [compliant, setCompliant] = useState(false)
    const [domainMap, setDomainMap] = useState(new Map<string, SecurityQuestion[]>())

    const testFillAnswers = (filling: number) => {
        const testAnswers = Array(questions.length)
        const randoms = ["Yes", "No", "NA"]
        for (let i = 0; i < questions.length; i += 1) {
            const randomIdx = Math.floor(Math.random() * 3)

            if (filling == 0)
                testAnswers[i] = randoms[0]
            else if (filling == 1)
                testAnswers[i] = randoms[1]
            else
                testAnswers[i] = randoms[randomIdx]
        }
        setCheckedStates(testAnswers)
    }

    const answeredAll = useCallback(() => {
        return checkedStates.every((c) => c !== "");
    }, [checkedStates]);

    const handleSubmit = () => {
        const triggerAlertElement = document.getElementById("triggerAlertQuestionnaire");
        if (!answeredAll() && triggerAlertElement) 
            triggerAlertElement.click();
        
        let nonCompliantQuestions: SecurityQuestion[] = []
        questions.filter ((q, i) => checkedStates[i] === "No")
        .map((q, j) => (
            nonCompliantQuestions.push (answers[j])
        ))

        let domainMap = new Map<string, SecurityQuestion[]>()
        nonCompliantQuestions.forEach((q) => {
            if (domainMap.has(q.domain))
                domainMap.get(q.domain)?.push(q)
            else
                domainMap.set(q.domain, [q])
        })

        setDomainMap(domainMap)
        setSubmit(true)
        setCompliant(nonCompliantQuestions.length === 0)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const fetchRelatedQuestions = async (i: number) => {
        const question = "Q" + (i + 1);
        
        const saq_type = params.type
        const response = await fetch('http://0.0.0.0:6969/autofill', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question,
                saq_type
            })
        })
        return await response.json()
    }

    const handleRadioSelect = async (e: any, i: number) => {
        const selected = e.toString()
        const data = await fetchRelatedQuestions(i)

        setCheckedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[i] = selected;
            
            if (autofill) {
                data.forEach((d: number) => {
                    if (newStates[d - 1] === "")
                        newStates[d - 1] = selected;
                });
            }

            return newStates;
        })
    }

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            const confirmationMessage = 'Are you sure you want to leave? Your progress will be lost.'
            event.returnValue = confirmationMessage
            return confirmationMessage
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <main className="flex flex-col items-center justify-between p-12 w-100 pt-0">
            <Label className="opacity-50 font-bold m-5">PCI DSS Compliance Assessment and Testing Report: An Overview of Compliance Status</Label>
            {submit && <>
                {compliant && <Accordion
                    type="multiple"
                    defaultValue={["overview", "status"]}
                    className="w-full m-10 p-10 mt-5 mb-10 pt-0 pb-0"
                    >
                    <AccordionItem value="overview">
                        <AccordionTrigger className="font-bold text-base opacity-70">Overview</AccordionTrigger>
                        <AccordionContent className="text-lg opacity-50">
                            {info.overview}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="status">
                        <AccordionTrigger className="font-bold text-base opacity-70">Compilance Status</AccordionTrigger>
                        <AccordionContent className="text-lg opacity-50">
                            {compliant ? info.compliant : info.nonCompliant}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>}
                {!compliant && <Accordion
                    collapsible
                    type="single"
                    className="w-full m-10 p-10 mt-5 mb-10 pt-0 pb-0"
                    >
                    <AccordionItem value="overview">
                        <AccordionTrigger className="font-bold text-base opacity-70">Overview</AccordionTrigger>
                        <AccordionContent className="text-lg opacity-50">
                            {info.overview}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="status">
                        <AccordionTrigger className="font-bold text-base opacity-70">Compilance Status</AccordionTrigger>
                        <AccordionContent className="text-lg opacity-50">
                            {compliant ? info.compliant : info.nonCompliant}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>}

                {!compliant && <div className="flex items-center justify-center mt-10 mb-0">
                    <Label className="opacity-50 font-bold m-3 text-base">Non-Compliant</Label>
                    <div className="flex items-center space-x-2">
                        <Text size="1.5rem" className="text-red-300"><i className="fas fa-times-circle"></i></Text>
                    </div>
                </div>}
                {!compliant && <Table className="w-100 m-10 mt-3">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[20vw] p-10">Domain</TableHead>
                            <TableHead className="w-[80vw] p-10">Info</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {nonCompliant.map(q => (
                            <TableRow key={q.question}>
                                <TableCell className="font-medium p-5">
                                    <div className="flex items-center space-x-2">
                                        <Text size="1.5rem" className="text-red-300"><i className="fas fa-times-circle"></i></Text>
                                    </div>
                                    {q.question}
                                </TableCell>
                                <TableCell className="font-medium p-5">
                                    {q.remediation}
                                </TableCell>
                            </TableRow>
                        ))} */}
                        {
                            domainMap.size > 0 && Array.from(domainMap.keys()).map((domain) => (
                                <TableRow key={domain}>
                                    <TableCell className="font-medium p-5">
                                        {/* <div className="flex items-center space-x-2">
                                            <Text size="1.5rem" className="text-red-300"><i className="fas fa-times-circle"></i></Text>
                                        </div> */}
                                        {domain}
                                    </TableCell>
                                    <TableCell className="font-medium p-10">
                                        <Accordion type="multiple" className="w-full">
                                            {domainMap.get(domain)?.map((q) => (
                                                <AccordionItem key={q.question} value={q.question} className="border-0">
                                                    <AccordionTrigger className="text-base">{q.question}</AccordionTrigger>
                                                    <AccordionContent className="text-sm ml-5">
                                                        {q.remediation}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>}
            </>
            }
            {!submit && <>
            <div className="flex m-5">
                <div className="flex flex-col items-center justify-center">
                    <Label className="font-bold opacity-50 p-5">Questionnaire {params.type.toUpperCase()}</Label>
                    <div className="flex m-3 items-center justify-center gap-5">
                        <Label className="font-medium opacity-35">Auto Fill</Label>
                        <Switch checked={autofill} onCheckedChange={() => {setAutofill(!autofill)}}/>
                        <Button onClick={() => testFillAnswers (0)}>Random (development/testing) Yes</Button>
                        <Button onClick={() => testFillAnswers (1)}>Random (development/testing) No</Button>
                        <Button onClick={() => testFillAnswers (2)}>Random (development/testing) Random</Button>
                    </div>
                    <Table className="w-100">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[8vw]">Q. No.</TableHead>
                                <TableHead className="w-[85vw]">Question</TableHead>
                                <TableHead className="w-[18vw]">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questions.map((q, i) => (
                            <TableRow key={q}>
                                <TableCell className="font-medium">{i + 1}</TableCell>
                                <TableCell className="font-medium">{q}</TableCell>
                                <TableCell className="font-medium">
                                <RadioGroup className="flex flex-row gap-10" value={checkedStates[i]} onValueChange={(e) => {handleRadioSelect(e, i)}}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Yes" id="option-one"/>
                                        <Label htmlFor="option-one">Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="No" id="option-two"/>
                                        <Label htmlFor="option-two">No</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="NA" id="option-three"/>
                                        <Label htmlFor="option-three">N/A</Label>
                                    </div>
                                </RadioGroup>
                                </TableCell>
                            </TableRow>
                            ))}
                    </TableBody>
                    </Table>
                </div>
            </div>
            <div>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
            </>}
            <AlertDialog>
                <AlertDialogTrigger>
                    <div className="flex" id="triggerAlertQuestionnaire">
                    </div>
                </AlertDialogTrigger>
                    <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>You must answer all the questions.</AlertDialogTitle>
                        <AlertDialogDescription>
                            You must have all the answers to the questions before proceeding any further.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </main>
    )
}