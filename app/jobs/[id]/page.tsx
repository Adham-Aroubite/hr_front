"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, MapPin, Clock, DollarSign, Building2 } from "lucide-react"
import { ApplicationModal } from "@/components/application-modal"

export default function JobPage({ params }: { params: { id: string } }) {
  const [showApplicationModal, setShowApplicationModal] = useState(false)

  // Mock job data - in real app this would come from API
  const job = {
    id: params.id,
    title: "Senior React Developer",
    company: {
      name: "TechCorp",
      logo: "/placeholder.svg?height=60&width=60",
      description:
        "TechCorp is a leading technology company focused on building innovative solutions that transform how businesses operate. We're a team of passionate engineers, designers, and product managers working together to create products that millions of people use every day.",
    },
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $140,000",
    postedDate: "2024-01-15",
    description: `We are looking for a Senior React Developer to join our growing engineering team. You will be responsible for building and maintaining our web applications using modern React technologies.

## Key Responsibilities
• Develop and maintain React applications using TypeScript
• Collaborate with design and product teams to implement user interfaces
• Write clean, maintainable, and well-tested code
• Participate in code reviews and technical discussions
• Mentor junior developers and contribute to team knowledge sharing
• Optimize applications for maximum speed and scalability

## Requirements
• 5+ years of experience with React and JavaScript/TypeScript
• Strong understanding of modern React patterns (hooks, context, etc.)
• Experience with state management libraries (Redux, Zustand, etc.)
• Proficiency with modern build tools (Webpack, Vite, etc.)
• Knowledge of testing frameworks (Jest, React Testing Library)
• Experience with version control systems (Git)
• Excellent communication and collaboration skills

## Nice to Have
• Experience with Next.js or other React frameworks
• Knowledge of GraphQL and Apollo Client
• Familiarity with cloud platforms (AWS, GCP, Azure)
• Experience with CI/CD pipelines
• Understanding of accessibility best practices

## What We Offer
• Competitive salary and equity package
• Comprehensive health, dental, and vision insurance
• Flexible work arrangements and remote-first culture
• Professional development budget for conferences and courses
• Top-tier equipment and home office setup allowance
• Unlimited PTO and flexible working hours
• Team retreats and company events

Join us in building the future of technology while working with a talented team of engineers who are passionate about creating exceptional user experiences.`,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-gray-600" />
            </div>
            <span className="text-lg font-semibold text-gray-900">{job.company.name}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Powered by</span>
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-gray-700">TalentFlow</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">{job.description}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sticky Application Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle>About {job.company.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{job.company.name}</h3>
                      <p className="text-sm text-gray-600">Technology Company</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700">{job.company.description}</p>

                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Posted:</span> {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Job Type:</span> {job.type}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Location:</span> {job.location}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                    size="lg"
                    onClick={() => setShowApplicationModal(true)}
                  >
                    Apply Now
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By applying, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal isOpen={showApplicationModal} onClose={() => setShowApplicationModal(false)} job={job} />
    </div>
  )
}
