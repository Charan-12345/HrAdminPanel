"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export default function Settings() {
  const [loading, setLoading] = useState(false)
  const [logoPreview, setLogoPreview] = useState(null)
  const [primaryColor, setPrimaryColor] = useState("#0000FF")

  const handleLogoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate saving settings
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    toast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully.",
    })
    // Apply the new primary color
    document.documentElement.style.setProperty("--primary", primaryColor)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Letter Template Settings</CardTitle>
            <CardDescription>Customize the templates for different types of letters.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="templateType">Template Type</Label>
              <Select>
                <SelectTrigger id="templateType">
                  <SelectValue placeholder="Select template type" />
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
              <Label htmlFor="templateContent">Template Content</Label>
              <Textarea id="templateContent" placeholder="Enter template content" rows={10} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyLogo">Company Logo</Label>
              <Input id="companyLogo" type="file" accept="image/*" onChange={handleLogoChange} />
              {logoPreview && (
                <div className="mt-2">
                  <img
                    src={logoPreview || "/placeholder.svg"}
                    alt="Logo Preview"
                    className="max-w-xs max-h-32 object-contain"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="useLetterhead" />
              <Label htmlFor="useLetterhead">Use company letterhead</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="primaryColor">Primary Color</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="primaryColor"
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-12 h-12 p-1 rounded-md"
                />
                <span>Selected color: {primaryColor}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Settings"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

