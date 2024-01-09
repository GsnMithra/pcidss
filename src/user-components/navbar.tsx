"use client"

import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession, signOut } from "next-auth/react"
import { useRouter, redirect } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function Navbar() {
    const { data: session } = useSession()
    const [organizationName, setOrganizationName] = useState(session?.user.organizationName)
    const router = useRouter()
    useEffect(() => {
        if (!session)
            redirect ('/login')
    }, [session])

    return (
        <main className="flex flex-row-reverse gap-3 items-center justify-center">
            <DropdownMenu>
            <DropdownMenuTrigger>
                <div>
                    <Avatar>
                        <AvatarImage src={session?.user?.image ?? ""} />
                        <AvatarFallback>{session?.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                    <DropdownMenuItem onSelect={() => {router.push('/')}}>Home</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {document.getElementById('triggerOrgDetails')?.click()}}>Organization Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={async () => await signOut()}>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
                <SheetTrigger><div id="triggerOrgDetails"></div></SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                    <SheetTitle>Edit organization details</SheetTitle>
                    <SheetDescription>
                        Make changes to organization details here. Click save when you&apos;re done.
                        <div className="flex m-7 ml-0 mr-0 items-center justify-center gap-4 flex-col">
                            <div className="flex items-center justify-center flex-row gap-3">
                                <Label>Org. Name</Label>
                                <Input onChange={(e) => setOrganizationName(e.target.value)} value={organizationName}/>
                            </div>
                            <SheetClose asChild>
                                <Button className="m-5 ml-0 mr-0 mt-0" onClick={() => {
                                    if (session)
                                        session.user.organizationName = organizationName || ""
                                }}>Save</Button>
                            </SheetClose>
                        </div>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            {(organizationName === "My Organization" || organizationName === "") && <Alert className="w-96" variant="destructive">
                <AlertTitle>Missing organization details</AlertTitle>
                <AlertDescription>
                You have not set your organization details yet. Please set them by clicking on the avatar.
                </AlertDescription>
            </Alert>}
        </main>
    )
}

export default Navbar