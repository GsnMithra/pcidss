"use client"

import { useState } from 'react';
import { a, b, c, p2pe } from '../../../data/criteria';
import QuestionTable from '@/user-components/questiontable'
import Navbar from '@/user-components/navbar';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Eligibility({ params }: { params: { type: string } }) {

    const [AChecked, setAChecked] = useState(Array(a.length).fill(false))
    const [BChecked, setBChecked] = useState(Array(b.length).fill(false))
    const [CChecked, setCChecked] = useState(Array(c.length).fill(false))
    const [P2PEChecked, setP2PEChecked] = useState(Array(p2pe.length).fill(false))
    const { data: session } = useSession()
    if (!session) 
        redirect ('/login')

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 w-100 pt-0">
            <div className="absolute top-5 right-6">
                <Navbar />
            </div>
            <div>
                {params.type === 'a' && <QuestionTable name="SAQ A" questions={a} checkList={AChecked} checkerList={setAChecked}/>}
                {params.type === 'b' && <QuestionTable name="SAQ B" questions={b} checkList={BChecked} checkerList={setBChecked}/>}
                {params.type === 'c' && <QuestionTable name="SAQ C" questions={c} checkList={CChecked} checkerList={setCChecked}/>}
                {params.type === 'p2pe' && <QuestionTable name="P2PE" questions={p2pe} checkList={P2PEChecked} checkerList={setP2PEChecked}/>}
            </div>
        </main>
    )
}