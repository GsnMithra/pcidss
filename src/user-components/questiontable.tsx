"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
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

import { useEffect, useState, useCallback } from "react";

interface QuestionTableProps {
    name: string;
    questions: string[];
    checkList: boolean[];
    checkerList: (a: boolean[]) => void;
}

const QuestionTable: React.FC<QuestionTableProps> = ({ name, questions, checkList, checkerList }) => {
    const [selectAll, setSelectAll] = useState(false);
    const checkedAll = useCallback(() => {
        return checkList.every((c) => c === true);
    }, [checkList]);

    useEffect(() => {
        const result = checkedAll()
        console.log(result)
        setSelectAll(result)
    }, [checkList, checkedAll])

    const handleSubmit = () => {
        if (!checkedAll()) {
            const triggerAlertElement = document.getElementById("triggerAlert");
            if (triggerAlertElement) 
                triggerAlertElement.click();
         
            return;
        }
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
                                    <TableCell className="font-medium">{i + 1}</TableCell>
                                    <TableCell className="font-medium">{q}</TableCell>
                                    <TableCell className="font-medium">
                                        <Checkbox
                                            className='m-2'
                                            checked={checkList[i]}
                                            onCheckedChange={() => {
                                                const newCheckList = [...checkList];
                                                newCheckList[i] = !newCheckList[i];
                                                checkerList(newCheckList);                                            
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                    <TableCell className="font-medium"></TableCell>
                                    <TableCell className="font-bold">Select All</TableCell>
                                    <TableCell className="font-medium">
                                        <Checkbox
                                            className='m-2'
                                            checked={selectAll}
                                            onCheckedChange={() => {
                                                const newCheckList = [...checkList];
                                                newCheckList.fill(!selectAll);
                                                checkerList(newCheckList);
                                                setSelectAll(!selectAll);
                                            }}
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