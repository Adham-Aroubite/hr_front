"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Plus, Trash2, Chrome, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

interface Job {
  id: string
  title: string
  company: {
    name: string
  }
}

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  job: Job
}

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

export function ApplicationModal({ isOpen, onClose, job }: ApplicationModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    linkedinUrl: "",
  })
  const [cvUploaded, setCvUploaded] = useState(false)
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const router = useRouter()

  const steps = [
    { number: 1, title: "Account" },
    { number: 2, title: "Profile" },
    { number: 3, title: "Review" },
  ]

  const handleCvUpload = () => {
    // Simulate CV upload and parsing
    setCvUploaded(true)
    setFormData({
      ...formData,
      fullName: "John Doe",
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
        description: "Lead frontend development for SaaS platform serving 10k+ users",
      },
      {
        id: "2",
        title: "React Developer",
        company: "WebCorp",
        startDate: "2020-03",
        endDate: "2021-12",
        description: "Built responsive web applications using React and TypeScript",
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

  const handleSubmit = () => {
    // In a real app, this would submit the application
    router.push("/candidate/dashboard")
    onClose()
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Apply for {job.title}</DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-8 py-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                  currentStep >= step.number ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600",
                )}
              >
                {step.number}
              </div>
              <span
                className={cn(
                  "ml-2 text-sm font-medium",
                  currentStep >= step.number ? "text-blue-600" : "text-gray-500",
                )}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={cn("w-16 h-px mx-4", currentStep > step.number ? "bg-blue-600" : "bg-gray-200")} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Let's Get Started</h3>
                <p className="text-gray-600">Create your account to apply for this position</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Create a secure password"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <Chrome className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Profile</h3>
                <p className="text-gray-600">Upload your CV to autofill your profile information</p>
              </div>

              {!cvUploaded ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer"
                  onClick={handleCvUpload}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <p className="text-lg font-medium text-gray-900">Upload Your CV</p>
                    <p className="text-gray-600">Drag and drop your file here, or click to browse</p>
                  </div>
                  <Button className="mt-4" onClick={handleCvUpload}>
                    Browse Files
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Personal Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullNameProfile">Full Name</Label>
                          <Input
                            id="fullNameProfile"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emailProfile">Email</Label>
                          <Input
                            id="emailProfile"
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
                    <CardContent className="space-y-4">
                      {workExperience.map((exp) => (
                        <Card key={exp.id} className="border border-gray-200">
                          <CardContent className="p-4 space-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-gray-900">Experience</h4>
                              <Button variant="ghost" size="sm" onClick={() => removeWorkExperience(exp.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
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
                            <div className="grid grid-cols-2 gap-4">
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
                                <Input
                                  value={edu.year}
                                  onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review and Submit Your Application</h3>
                <p className="text-gray-600">
                  You are applying for the <span className="font-medium">{job.title}</span> position at{" "}
                  <span className="font-medium">{job.company.name}</span>
                </p>
              </div>

              <div className="space-y-6">
                {/* Personal Info Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Name:</span> {formData.fullName}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Email:</span> {formData.email}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Phone:</span> {formData.phone}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">LinkedIn:</span> {formData.linkedinUrl}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Work Experience Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {workExperience.map((exp) => (
                      <div key={exp.id} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-medium text-gray-900">{exp.title}</h4>
                        <p className="text-sm text-gray-600">
                          {exp.company} • {exp.startDate} - {exp.endDate}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Education Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {education.map((edu) => (
                      <div key={edu.id} className="text-sm">
                        <span className="font-medium text-gray-900">{edu.degree}</span>
                        <p className="text-gray-600">
                          {edu.school} • {edu.year}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </Button>

          <div className="flex space-x-2">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            {currentStep < 3 ? (
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                {currentStep === 1 ? "Create Account & Continue" : "Save and Continue"}
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
