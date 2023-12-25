import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 w-100">
      <div className="flex items-center justify-center text-auto font-medium text-xl self-start flex-col gap-20">
        <div className="flex justify-center items-center flex-col">
          <Label className="font-bold opacity-50">Determine Your PCI DSS v4.0 SAQ Type: A Guide for Merchants</Label>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SAQ Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[50px]">Check</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">A</TableCell>
                <TableCell>This questionnaire is intended for merchants who outsource all cardholder data functions to PCI DSS compliant third-party service providers and have no direct control of the manner in which cardholder data is processed or stored.</TableCell>
                <TableCell className="text-right">
                  <Link href="/questionnarie/a">
                    <Button variant="outline">
                      Go
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">B</TableCell>
                <TableCell>Suitable for merchants who use only imprint machines or standalone, dial-out terminals to process card payments, with no electronic cardholder data storage.</TableCell>
                <TableCell className="text-right">
                  <Link href="/questionnarie/b">
                    <Button variant="outline">
                      Go
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">C</TableCell>
                <TableCell>Intended for merchants with payment application systems connected to the Internet, without electronic cardholder data storage.</TableCell>
                <TableCell className="text-right">
                  <Link href="/questionnarie/c">
                    <Button variant="outline">
                      Go
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">P2PE</TableCell>
                <TableCell>Applicable to merchants using hardware payment terminals included in and managed via a validated, PCI SSC-listed Point-to-Point Encryption (P2PE) solution, with no electronic cardholder data storage.</TableCell>
                <TableCell className="text-right">
                  <Link href="/questionnarie/p2pe">
                    <Button variant="outline">
                      Go
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}
