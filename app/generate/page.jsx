"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function GenerateLetter() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate PDF generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    toast({
      title: "PDF Generated",
      description: "The letter has been generated and saved successfully.",
    })
    // Simulate PDF download
    const blob = new Blob(["Simulated PDF content"], { type: "application/pdf" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "generated_letter.pdf"
    link.click()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Generate HR Letter</h1>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Letter Details</CardTitle>
            <CardDescription>Fill in the details to generate a new Letter.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="letterType">Letter Type</Label>
                <Select>
                  <SelectTrigger id="letterType">
                    <SelectValue placeholder="Select letter type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="offer">Offer Letter</SelectItem>
                    <SelectItem value="promotion">Promotion Letter</SelectItem>
                    <SelectItem value="termination">Termination Letter</SelectItem>
                    <SelectItem value="transfer">Transfer Letter</SelectItem>
                    <SelectItem value="warning">Warning Letter</SelectItem>
                    <SelectItem value="internship">Internship Letter</SelectItem>
                  <SelectItem value="incident">Incident Reports</SelectItem>
                  <SelectItem value="virtual">Virtual ID Card</SelectItem>
                  <SelectItem value="participation">Participation Letter</SelectItem>
                  <SelectItem value="course_completion">Course Completion Certificate</SelectItem>

                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeName">Employee Name</Label>
                <Input id="employeeName" placeholder="Enter employee name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" placeholder="Enter employee position" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Enter employee department" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Effective Date</Label>
                <Input id="date" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input id="salary" type="number" placeholder="Enter salary amount" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalDetails">Additional Details</Label>
              <Textarea id="additionalDetails" placeholder="Enter any additional details for the letter" rows={4} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Generating PDF..." : "Generate and Download PDF"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

