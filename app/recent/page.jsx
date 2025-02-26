"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Download, Trash2, Search, Pencil} from "lucide-react"

const recentLetters = [
  { id: 1, type: "Offer Letter", employee: "Ravi D", date: "2025-06-01" },
  { id: 2, type: "Promotion Letter", employee: "Sapna K", date: "2025-01-28" },
  { id: 3, type: "Termination Letter", employee: "Dhanush", date: "2025-02-25" },
  { id: 4, type: "Transfer Letter", employee: "Prajwal", date: "2025-01-02" },
  { id: 5, type: "Warning Letter", employee: "Shreyas", date: "2025-01-30" },
]

export default function RecentLetters() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLetters = recentLetters.filter(
    (letter) =>
      letter.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Recent Letters</h1>
      <div className="flex items-center space-x-2">
        <Search className="w-5 h-5 text-gray-500" />
        <Input
          placeholder="Search by employee or letter type"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Letter Type</TableHead>
              <TableHead>Employee</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLetters.map((letter) => (
              <TableRow key={letter.id}>
                <TableCell>{letter.type}</TableCell>
                <TableCell>{letter.employee}</TableCell>
                <TableCell>{letter.date}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                    <Pencil className="h-4 w-4 mr-2"/>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

