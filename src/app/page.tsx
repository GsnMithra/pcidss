import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 w-100">
      <div className="flex items-center justify-center text-white font-medium text-xl self-start flex-col gap-20">
        <div className="flex justify-center items-center">
          <Table>
            <TableCaption>Select a type of SAQ</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SAQ Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Eligibility Check</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">A</TableCell>
                <TableCell>This questionnaire is intended for merchants who outsource all cardholder data functions to PCI DSS compliant third-party service providers and have no direct control of the manner in which cardholder data is processed or stored.</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline">
                    <Link href="/questionnarie/a">Go</Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">B</TableCell>
                <TableCell>Suitable for merchants who use only imprint machines or standalone, dial-out terminals to process card payments, with no electronic cardholder data storage.</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline">
                    <Link href="/questionnarie/b">Go</Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">C</TableCell>
                <TableCell>Intended for merchants with payment application systems connected to the Internet, without electronic cardholder data storage.</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline">
                    <Link href="/questionnarie/c">Go</Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">P2PE</TableCell>
                <TableCell>Applicable to merchants using hardware payment terminals included in and managed via a validated, PCI SSC-listed Point-to-Point Encryption (P2PE) solution, with no electronic cardholder data storage.</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline">
                    <Link href="/questionnarie/p2pe">Go</Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}
