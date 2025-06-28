"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Eye,
  MessageSquare,
  CheckCircle,
  FileText,
  Clock,
  User,
  Tag,
} from "lucide-react"
import Link from "next/link"

export default function MasterProfilePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("applications")

  // Mock data - in real app this would come from API
  const candidate = {
    id: params.id,
    name: "Sarah Johnson",
    currentTitle: "Senior Frontend Developer",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    avatar: "SJ",
    tags: ["Frontend Expert", "Remote Ready", "React Specialist", "Team Lead"],

    // Application History
    applications: [
      {
        id: 1,
        jobTitle: "Senior React Developer",
        appliedDate: "2024-01-20",
        status: "Interview",
        matchScore: 95,
        jobId: "1",
      },
      {
        id: 2,
        jobTitle: "Frontend Team Lead",
        appliedDate: "2023-11-15",
        status: "Not Selected",
        matchScore: 88,
        jobId: "2",
      },
      {
        id: 3,
        jobTitle: "Full Stack Developer",
        appliedDate: "2023-08-10",
        status: "Interviewed",
        matchScore: 82,
        jobId: "3",
      },
    ],

    // Full Activity Log (across all applications)
    fullActivityLog: [
      {
        id: 1,
        type: "interview",
        title: "Technical Interview Scheduled",
        description: "Scheduled technical interview for Senior React Developer position",
        user: "John Doe",
        date: "2024-01-22",
        time: "10:30 AM",
        jobTitle: "Senior React Developer",
      },
      {
        id: 2,
        type: "note",
        title: "Initial Screening Call",
        description: "Great communication skills. Strong React background. Excited about the role and company mission.",
        user: "Jane Smith",
        date: "2024-01-21",
        time: "3:15 PM",
        jobTitle: "Senior React Developer",
      },
      {
        id: 3,
        type: "status",
        title: "Application Status Updated",
        description: "Moved from 'New' to 'Shortlisted' for Senior React Developer",
        user: "John Doe",
        date: "2024-01-21",
        time: "11:00 AM",
        jobTitle: "Senior React Developer",
      },
      {
        id: 4,
        type: "application",
        title: "New Application Received",
        description: "Applied for Senior React Developer position",
        user: "System",
        date: "2024-01-20",
        time: "9:45 AM",
        jobTitle: "Senior React Developer",
      },
      {
        id: 5,
        type: "note",
        title: "Final Interview Feedback",
        description: "Strong technical skills but looking for more leadership experience for the Team Lead role.",
        user: "Mike Wilson",
        date: "2023-11-28",
        time: "2:00 PM",
        jobTitle: "Frontend Team Lead",
      },
      {
        id: 6,
        type: "status",
        title: "Application Closed",
        description: "Application for Frontend Team Lead position marked as 'Not Selected'",
        user: "System",
        date: "2023-11-30",
        time: "9:00 AM",
        jobTitle: "Frontend Team Lead",
      },
    ],

    // CV Details
    cvData: {
      experience: [
        {
          title: "Senior Frontend Developer",
          company: "TechStart Inc.",
          duration: "2022 - Present",
          description:
            "Lead frontend development for SaaS platform serving 10k+ users using React, TypeScript, and modern web technologies.",
        },
        {
          title: "React Developer",
          company: "WebCorp",
          duration: "2020 - 2022",
          description:
            "Built responsive web applications using React and TypeScript, collaborated with design teams to implement pixel-perfect UIs.",
        },
        {
          title: "Frontend Developer",
          company: "StartupXYZ",
          duration: "2018 - 2020",
          description:
            "Developed user interfaces for mobile-first web applications using modern JavaScript frameworks.",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "Stanford University",
          year: "2018",
        },
      ],
      skills: ["React", "TypeScript", "JavaScript", "Node.js", "GraphQL", "CSS", "HTML", "Git", "Redux", "Next.js"],
    },
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Interview":
        return "default"
      case "Interviewed":
        return "secondary"
      case "Not Selected":
        return "destructive"
      case "Hired":
        return "default"
      default:
        return "outline"
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "interview":
        return <Calendar className="h-4 w-4 text-blue-500" />
      case "note":
        return <MessageSquare className="h-4 w-4 text-green-500" />
      case "status":
        return <CheckCircle className="h-4 w-4 text-purple-500" />
      case "application":
        return <FileText className="h-4 w-4 text-gray-500" />
      default:
        return <User className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{candidate.name}</h1>
        <p className="text-muted-foreground mt-2">Complete candidate profile and application history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Sticky Candidate Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-lg">{candidate.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{candidate.name}</CardTitle>
                <CardDescription>{candidate.currentTitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{candidate.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{candidate.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{candidate.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <a href={candidate.linkedin} className="text-blue-600 hover:underline truncate">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {candidate.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Download CV */}
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Latest CV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Main Content with Tabs */}
        <div className="lg:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="applications">Application History</TabsTrigger>
              <TabsTrigger value="activity">Full Activity Log</TabsTrigger>
              <TabsTrigger value="details">Candidate Details</TabsTrigger>
            </TabsList>

            {/* Tab 1: Application History */}
            <TabsContent value="applications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Application History</CardTitle>
                  <CardDescription>All job applications from this candidate at your company</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {candidate.applications.map((application) => (
                    <Card key={application.id} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">{application.jobTitle}</h4>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <span>{application.matchScore}% Match</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant={getStatusBadgeVariant(application.status)}>{application.status}</Badge>
                            <Link href={`/dashboard/jobs/${application.jobId}/candidates/${candidate.id}`}>
                              <Button variant="outline" size="sm">
                                <Eye className="mr-2 h-4 w-4" />
                                View Application
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Full Activity Log */}
            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Full Activity Log</CardTitle>
                  <CardDescription>Complete timeline of all interactions across all applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {candidate.fullActivityLog.map((activity, index) => (
                      <div key={activity.id} className="flex space-x-4">
                        <div className="flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted border-2 border-background">
                            {getActivityIcon(activity.type)}
                          </div>
                          {index < candidate.fullActivityLog.length - 1 && <div className="h-12 w-px bg-border mt-2" />}
                        </div>
                        <div className="flex-1 space-y-2 pb-6">
                          <div className="bg-card border rounded-lg p-4 space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <h4 className="font-medium text-foreground">{activity.title}</h4>
                                <p className="text-xs text-blue-600 font-medium">{activity.jobTitle}</p>
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>
                                  {activity.date} at {activity.time}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <User className="h-3 w-3" />
                              <span>by {activity.user}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Candidate Details */}
            <TabsContent value="details" className="space-y-6">
              {/* Work Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5" />
                    <span>Work Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {candidate.cvData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4 space-y-2">
                      <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-sm text-gray-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {candidate.cvData.education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-sm text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {candidate.cvData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
