"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";

interface QuestionTableProps {
    name: string;
    questions: string[];
    checkList: boolean[];
    checkerList: (a: boolean[]) => void;
}

const QuestionTable: React.FC<QuestionTableProps> = ({ name, questions, checkList, checkerList }) => {
    // const getQuestions = (q: any) => {
    //     console.log(q)
    //     return fetch('http://127.0.0.1:6969/autofill', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ question: q, saq_type: name }),
    //     })
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error => console.error('Error:', error));
    // }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-100 pt-0 mt-0">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center">
                <Label className="font-bold opacity-50 p-10">{name} Eligility Questions</Label>
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
                        </TableBody>
                    </Table>
                </div>
                <div className="flex">
                    <Button>Check</Button>
                </div>
            </div>
        </main>
    )
}

export default QuestionTable;