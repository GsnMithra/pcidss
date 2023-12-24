import { a, b, c, p2pe } from '../../../data/questions';
import QuestionTable from '@/user-components/QuestionsTable'

export default function Questionnaire({ params }: { params: { type: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 w-100">
            <div>
                {params.type === 'a' && <QuestionTable name="SAQ A" questions={a}/>}
                {params.type === 'b' && <QuestionTable name="SAQ B" questions={b}/>}
                {params.type === 'c' && <QuestionTable name="SAQ C" questions={c}/>}
                {params.type === 'p2pe' && <QuestionTable name="P2PE" questions={p2pe}/>}
            </div>
        </main>
    )
}