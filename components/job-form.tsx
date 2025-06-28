"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bold, Italic, List, ListOrdered, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface JobFormData {
  title: string
  department: string
  location: string
  status: string
  description: string
}

interface JobFormProps {
  mode: "create" | "edit"
  initialData?: JobFormData
  jobId?: string
}

export function JobForm({ mode, initialData, jobId }: JobFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<JobFormData>(
    initialData || {
      title: "",
      department: "",
      location: "",
      status: "Draft",
      description: "",
    },
  )
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (field: keyof JobFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (mode === "create") {
      // In a real app, this would make an API call to create the job
      console.log("Creating job:", formData)
    } else {
      // In a real app, this would make an API call to update the job
      console.log("Updating job:", jobId, formData)
    }

    setIsSaving(false)
    router.push("/dashboard/jobs")
  }

  const handleCancel = () => {
    router.push("/dashboard/jobs")
  }

  const pageTitle = mode === "create" ? "Create New Job Offer" : `Edit: ${initialData?.title || "Job Offer"}`

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/jobs">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Section 1: Core Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Core Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="e.g., Senior React Developer"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="e.g., San Francisco, CA or Remote"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                    placeholder="e.g., Engineering"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Job Description */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Job Description</h3>
            <div className="space-y-4">
              <Label htmlFor="description">Job Description</Label>

              {/* Rich Text Editor Toolbar */}
              <div className="border border-gray-300 rounded-lg">
                <div className="flex items-center space-x-2 p-3 border-b border-gray-200 bg-gray-50">
                  <Button variant="ghost" size="sm" type="button">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" type="button">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300" />
                  <Button variant="ghost" size="sm" type="button">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" type="button">
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe the role, responsibilities, requirements, and what makes this opportunity exciting..."
                  className="min-h-[400px] border-0 focus-visible:ring-0 resize-none"
                />
              </div>
              <p className="text-sm text-gray-500">
                Use the toolbar above to format your job description. Include key responsibilities, requirements, and
                benefits.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4">
        <Button variant="ghost" onClick={handleCancel} disabled={isSaving}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={isSaving || !formData.title.trim()}>
          {isSaving ? "Saving..." : "Save Job"}
        </Button>
      </div>
    </div>
  )
}
