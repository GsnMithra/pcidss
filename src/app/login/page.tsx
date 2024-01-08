"use client"

import { useSession, signIn } from "next-auth/react"
import { redirect } from "next/navigation"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

function Login() {
    const { data: session } = useSession()
    if (session)
        redirect('/')

    const handleLogin = async (provider: string) => {
        await signIn(provider, {redirect: false})
    }

    return (
        <main className="flex items-center justify-center h-screen w-screen">
            <Card className="max-h-fit mb-52">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription className="w-52">You first need to login.</CardDescription>
                </CardHeader>
                <Separator orientation="horizontal" className="w-auto m-10 mt-0"/>
                <CardContent className="flex flex-row gap-5">
                    <Card className="cursor-pointer" onClick={() => handleLogin("google")}>
                        <div className="flex items-center justify-center m-10">
                            <Image src="https://authjs.dev/img/providers/google.svg" alt="Google" width={40} height={40} />
                        </div>
                    </Card>
                    <Card className="cursor-pointer" onClick={() => handleLogin("github")}>
                        <div className="flex items-center justify-center m-10">
                            <Image src="https://authjs.dev/img/providers/github.svg" alt="Google" width={40} height={40} />
                        </div>
                    </Card>
                </CardContent>
            </Card>
        </main>
    )
}

export default Login