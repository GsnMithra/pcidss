"use client"

import { Label } from '@/components/ui/label';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow
} from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { a, b, c, p2pe } from '../../../data/questions';

export default function Questionnaire({ params }: { params: { type: string } }) {

    const questionMap : { [key: string]: string[] } = {
        'a': a,
        'b': b,
        'c': c,
        'p2pe': p2pe
    }
    const questions: string[] = questionMap[params.type]

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 w-100 pt-0">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <Label className="font-bold opacity-50 p-5">Questionnaire {params.type.toUpperCase()}</Label>
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
                                    <RadioGroup className="flex flex-row gap-10">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-one" id="option-one" />
                                            <Label htmlFor="option-one">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-two" id="option-two" />
                                            <Label htmlFor="option-two">No</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-three" id="option-two" />
                                            <Label htmlFor="option-two">Non-Compliant</Label>
                                        </div>
                                    </RadioGroup>
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