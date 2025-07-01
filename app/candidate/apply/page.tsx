"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Plus, Trash2, CheckCircle } from "lucide-react"

interface WorkExperience {
  id: string
  title: string
  company: string
  startDate: string
  endDate: string
  description: string
}

interface Education {
  id: string
  degree: string
  school: string
  year: string
}

export default function CandidateApplyPage() {
  const [cvUploaded, setCvUploaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "John Doe", // Pre-filled from auth
    email: "john@example.com", // Pre-filled from auth
    phone: "",
    linkedinUrl: "",
  })
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [skills, setSkills] = useState<string[]>([])

  const router = useRouter()
  const searchParams = useSearchParams()

  // Get job details from URL parameters
  const jobTitle = searchParams.get("jobTitle") || "Senior React Developer"
  const companyName = searchParams.get("company") || "TechCorp"
  const jobId = searchParams.get("jobId") || "1"

  const handleCvUpload = () => {
    // Simulate CV upload and parsing
    setCvUploaded(true)
    setFormData({
      ...formData,
      phone: "+1 (555) 123-4567",
      linkedinUrl: "https://linkedin.com/in/johndoe",
    })
    setWorkExperience([
      {
        id: "1",
        title: "Senior Frontend Developer",
        company: "TechStart Inc.",
        startDate: "2022-01",
        endDate: "Present",
        description:
          "Lead frontend development for SaaS platform serving 10k+ users using React, TypeScript, and modern web technologies.",
      },
      {
        id: "2",
        title: "React Developer",
        company: "WebCorp",
        startDate: "2020-03",
        endDate: "2021-12",
        description:
          "Built responsive web applications using React and TypeScript, collaborated with design teams to implement pixel-perfect UIs.",
      },
    ])
    setEducation([
      {
        id: "1",
        degree: "Bachelor of Science in Computer Science",
        school: "Stanford University",
        year: "2020",
      },
    ])
    setSkills(["React", "TypeScript", "JavaScript", "Node.js", "GraphQL", "CSS", "HTML", "Git"])
  }

  const addWorkExperience = () => {
    const newExp: WorkExperience = {
      id: Date.now().toString(),
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    }
    setWorkExperience([...workExperience, newExp])
  }

  const removeWorkExperience = (id: string) => {
    setWorkExperience(workExperience.filter((exp) => exp.id !== id))
  }

  const updateWorkExperience = (id: string, field: string, value: string) => {
    setWorkExperience(workExperience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      degree: "",
      school: "",
      year: "",
    }
    setEducation([...education, newEdu])
  }

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const updateEducation = (id: string, field: string, value: string) => {
    setEducation(education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate application submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/candidate/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {formData.fullName.split(" ")[0]}! 👋</h1>
          <p className="text-lg text-gray-600">
            Let's complete your application for the <span className="font-semibold">{jobTitle}</span> role at{" "}
            <span className="font-semibold">{companyName}</span>
          </p>
        </div>

        {!cvUploaded ? (
          /* CV Upload Section */
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Upload Your CV</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100"
                onClick={handleCvUpload}
              >
                <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <div className="space-y-2">
                  <p className="text-xl font-medium text-gray-900">Upload Your CV to Get Started</p>
                  <p className="text-gray-600">
                    We'll automatically extract your information to speed up the application process
                  </p>
                  <p className="text-sm text-gray-500">Drag and drop your file here, or click to browse</p>
                </div>
                <Button className="mt-6" size="lg" onClick={handleCvUpload}>
                  Browse Files
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Application Form */
          <div className="space-y-8">
            {/* Success Message */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">CV uploaded successfully! Review and edit your information below.</span>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Work Experience</CardTitle>
                  <Button variant="outline" size="sm" onClick={addWorkExperience}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Experience
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {workExperience.map((exp) => (
                  <Card key={exp.id} className="border border-gray-200">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Experience</h4>
                        <Button variant="ghost" size="sm" onClick={() => removeWorkExperience(exp.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Job Title</Label>
                          <Input
                            value={exp.title}
                            onChange={(e) => updateWorkExperience(exp.id, "title", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Company</Label>
                          <Input
                            value={exp.company}
                            onChange={(e) => updateWorkExperience(exp.id, "company", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Start Date</Label>
                          <Input
                            type="month"
                            value={exp.startDate}
                            onChange={(e) => updateWorkExperience(exp.id, "startDate", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>End Date</Label>
                          <Input
                            type="month"
                            value={exp.endDate}
                            onChange={(e) => updateWorkExperience(exp.id, "endDate", e.target.value)}
                            placeholder="Present"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          value={exp.description}
                          onChange={(e) => updateWorkExperience(exp.id, "description", e.target.value)}
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Education</CardTitle>
                  <Button variant="outline" size="sm" onClick={addEducation}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id} className="border border-gray-200">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Education</h4>
                        <Button variant="ghost" size="sm" onClick={() => removeEducation(edu.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Degree</Label>
                          <Input
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>School</Label>
                          <Input
                            value={edu.school}
                            onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Year</Label>
                          <Input value={edu.year} onChange={(e) => updateEducation(edu.id, "year", e.target.value)} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <Button size="lg" className="px-12 py-3 text-lg" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
