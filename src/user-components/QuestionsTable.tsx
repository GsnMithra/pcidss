"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface QuestionTableProps {
    name: string;
    questions: string[];
    checkList: boolean[];
    checkerList: (a: boolean[]) => void;
}

const QuestionTable: React.FC<QuestionTableProps> = ({ name, questions, checkList, checkerList }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 w-100">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <Table className="w-100">
                        <TableCaption>{name} Questions</TableCaption>
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
                                                const newCheckList = checkList.map((c, j) => {
                                                    if (i === j) return !c
                                                    return c
                                                })
                                                checkerList(newCheckList)
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="flex m-10">
                <Button>Submit</Button>
            </div>
        </main>
    )
}

export default QuestionTable;