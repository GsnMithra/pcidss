"use client"

import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface QuestionTableProps {
    name: string;
    questions: string[];
    checkList: boolean[];
    checkerList: (a: boolean[]) => void;
}

const QuestionTable: React.FC<QuestionTableProps> = ({ name, questions, checkList, checkerList }) => {
    const router = useRouter();
    const [selectAll, setSelectAll] = useState(false);
    const checkedAll = useCallback(() => {
        return checkList.every((c) => c === true);
    }, [checkList]);

    useEffect(() => {
        const result = checkedAll()
        setSelectAll(result)
    }, [checkList, checkedAll])

    const checkElement = (i: number) => {
        const newCheckList = [...checkList];
        newCheckList[i] = !newCheckList[i];
        checkerList(newCheckList); 
    }

    const checkAllElements = () => {
        const newCheckList = [...checkList];
        newCheckList.fill(!selectAll);
        checkerList(newCheckList);
        setSelectAll(!selectAll);
    }

    const handleSubmit = () => {
        if (!checkedAll()) {
            const triggerAlertElement = document.getElementById("triggerAlert");
            if (triggerAlertElement) 
                triggerAlertElement.click();
         
            return;
        }
        
        const saq: string[] = name.toLowerCase().split(' ')
        const saqType = (saq.length == 1) ? saq[0] : saq[1]
        router.push(`/questionnaire/${saqType}`)
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-100 pt-0 mt-0 mb-0">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center">
                    <Label className="font-bold opacity-50 p-5">{name} Eligility Questions</Label>
                    <Table className="w-100">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[8vw]">Q. No.</TableHead>
                                <TableHead className="w-[85vw]">Question</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questions.map((q, i) => (
                                <TableRow key={q}>
                                    <TableCell className="font-medium cursor-pointer" onClick={() => {checkElement (i)}}>{i + 1}</TableCell>
                                    <TableCell className="font-medium cursor-pointer" onClick={() => {checkElement (i)}}>{q}</TableCell>
                                    <TableCell className="font-medium cursor-pointer">
                                        <Checkbox
                                            className='m-2'
                                            checked={checkList[i]}
                                            onCheckedChange={() => {checkElement (i)}}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                    <TableCell className="font-medium cursor-pointer" onClick={checkAllElements}></TableCell>
                                    <TableCell className="font-bold cursor-pointer" onClick={checkAllElements}>Select All</TableCell>
                                    <TableCell className="font-medium cursor-pointer" onClick={checkAllElements}>
                                        <Checkbox
                                            className='m-2'
                                            checked={selectAll}
                                            onCheckedChange={checkAllElements}
                                        />
                                    </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
                <AlertDialog>
                    <AlertDialogTrigger>
                        <div className="flex" id="triggerAlert">
                        </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>You are ineligible to take the questionnaire</AlertDialogTitle>
                            <AlertDialogDescription>
                                You must comply with all of the following questions to be eligible for the questionnaire
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </main>
    )
}

export default QuestionTable;