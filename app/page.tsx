"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, MapPin, Building2, Clock, ArrowRight } from "lucide-react"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("companies")

  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      logo: "/placeholder.svg?height=40&width=40",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140k - $180k",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignCo",
      logo: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $170k",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataFlow",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      type: "Full-time",
      salary: "$150k - $190k",
    },
    {
      id: 6,
      title: "Marketing Manager",
      company: "GrowthCorp",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$90k - $120k",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TalentFlow</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Tabs */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="container mx-auto px-4 lg:px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2 bg-white/80 backdrop-blur">
                  <TabsTrigger
                    value="companies"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    For Companies
                  </TabsTrigger>
                  <TabsTrigger
                    value="candidates"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    For Job Seekers
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="companies" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                        Your Modern Career Page, <span className="text-blue-600">Powered by AI</span>
                      </h1>
                      <p className="text-xl text-gray-600 max-w-[600px]">
                        Stop sorting through endless CVs. Create beautiful job pages, attract top talent, and let our AI
                        find the perfect match for you.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/signup?type=business">
                        <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                          Get Started for Business
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-white rounded-lg shadow-2xl p-6 border">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">Senior React Developer</h3>
                          <Badge className="bg-blue-100 text-blue-800">12 Applicants</Badge>
                        </div>
                        <div className="space-y-3">
                          {[
                            { name: "Sarah Johnson", score: 95, status: "Interview" },
                            { name: "Mike Chen", score: 89, status: "Shortlisted" },
                            { name: "Emma Davis", score: 84, status: "New" },
                          ].map((candidate, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{candidate.name}</div>
                                <div className="text-sm text-gray-500">{candidate.score}% Match</div>
                              </div>
                              <Badge
                                variant={candidate.status === "Interview" ? "default" : "secondary"}
                                className={
                                  candidate.status === "Interview"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700"
                                }
                              >
                                {candidate.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="candidates" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                        Apply with Confidence, <span className="text-blue-600">Track Your Progress</span>
                      </h1>
                      <p className="text-xl text-gray-600 max-w-[600px]">
                        Say goodbye to application black holes. Use our smart application forms and get real-time
                        updates on your job applications from top companies.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/jobs">
                        <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                          Find Your Next Job
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-white rounded-lg shadow-2xl p-6 border">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">My Applications</h3>
                        <div className="space-y-3">
                          {[
                            {
                              company: "TechCorp",
                              role: "Senior Developer",
                              status: "Interview Scheduled",
                              color: "green",
                            },
                            { company: "StartupXYZ", role: "Product Manager", status: "Under Review", color: "yellow" },
                            { company: "DesignCo", role: "UX Designer", status: "Application Received", color: "blue" },
                          ].map((app, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{app.role}</div>
                                <div className="text-sm text-gray-500">{app.company}</div>
                              </div>
                              <Badge
                                className={
                                  app.color === "green"
                                    ? "bg-green-100 text-green-800"
                                    : app.color === "yellow"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-blue-100 text-blue-800"
                                }
                              >
                                {app.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Jobs</h2>
              <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
                Discover opportunities from top companies actively hiring through our platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <p className="text-sm text-gray-600">{job.company}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="text-sm font-medium text-gray-900">{job.salary}</div>
                      </div>

                      <Link href={`/jobs/${job.id}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">TalentFlow</span>
              </div>
              <p className="text-sm text-gray-600">
                AI-powered recruitment platform connecting talent with opportunity.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">For Companies</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-gray-600 hover:text-gray-900">
                  Post Jobs
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900">
                  Find Talent
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">For Job Seekers</h4>
              <div className="space-y-2 text-sm">
                <Link href="/jobs" className="block text-gray-600 hover:text-gray-900">
                  Browse Jobs
                </Link>
                <Link href="/candidate/dashboard" className="block text-gray-600 hover:text-gray-900">
                  My Applications
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900">
                  Career Tips
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} TalentFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
