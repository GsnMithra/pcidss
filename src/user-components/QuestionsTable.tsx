import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function QuestionTable({ name, questions }: { name: string, questions: string[] }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 w-100">
            <div className="flex">
                <div className="flex flex-col">
                    <Table className="w-100">
                        <TableCaption>{name} Questions</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[5vw]">Q. No.</TableHead>
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
                                        <Checkbox className='m-2'/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </main>
    )
}

export default QuestionTable;