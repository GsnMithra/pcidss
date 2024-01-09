"use client"

import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
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
import { redirect } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

function Navbar() {
    const { data: session } = useSession()
    const [organizationName, setOrganizationName] = useState("")
    useEffect(() => {
        if (!session)
            redirect ('/login')
    }, [session])

    return (
        <main>
            <DropdownMenu>
            <DropdownMenuTrigger>
                <div>
                    <Avatar>
                        <AvatarImage src={session?.user?.image ?? ""} />
                        <AvatarFallback>Org</AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => {document.getElementById('triggerOrgDetails')?.click()}}>Organization Settings</DropdownMenuItem>
                    <DropdownMenuItem onSelect={async () => await signOut()}>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
                <SheetTrigger><div id="triggerOrgDetails"></div></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Edit organization details</SheetTitle>
                    <SheetDescription>
                        Make changes to organization details here. Click save when you&apos;re done.
                        <div className="flex m-7 ml-0 mr-0 items-center justify-center gap-4 flex-col">
                            <div className="flex items-center justify-center flex-row gap-3">
                                <Label>Org. Name</Label>
                                <Input onChange={(e) => setOrganizationName(e.target.value)} value={organizationName}/>
                            </div>
                            <Button variant="outline" className="m-5 ml-0 mr-0 mt-0" onClick={() => { if (session?.user) session.user.organizationName = organizationName }}>Save</Button>
                        </div>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </main>
    )
}

export default Navbar