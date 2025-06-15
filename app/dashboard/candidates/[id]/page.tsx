"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Plus,
  CheckCircle,
  AlertTriangle,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function CandidateProfilePage({ params }: { params: { id: string } }) {
  const [newActivity, setNewActivity] = useState("")
  const [activityType, setActivityType] = useState("note")

  // Mock data - in real app this would come from API
  const candidate = {
    id: params.id,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    appliedFor: "Senior React Developer",
    appliedDate: "2024-01-20",
    status: "Interview",
    matchScore: 95,
    avatar: "SJ",
    resume: "/resume-sarah-johnson.pdf",

    // Matching breakdown
    matching: {
      skillsMatch: 95,
      experienceMatch: 90,
      educationMatch: 85,
      locationMatch: 100,
      details: [
        { type: "success", text: "Skills match: React, TypeScript, Node.js, GraphQL" },
        { type: "success", text: "6+ years experience (requirement: 5+ years)" },
        { type: "success", text: "Bachelor's in Computer Science" },
        { type: "warning", text: "Missing skill: AWS (preferred)" },
        { type: "success", text: "Location: Remote work available" },
      ],
    },

    // CV Data
    cvData: {
      experience: [
        {
          title: "Senior Frontend Developer",
          company: "TechStart Inc.",
          duration: "2022 - Present",
          description: "Lead frontend development for SaaS platform serving 10k+ users",
        },
        {
          title: "React Developer",
          company: "WebCorp",
          duration: "2020 - 2022",
          description: "Built responsive web applications using React and TypeScript",
        },
        {
          title: "Frontend Developer",
          company: "StartupXYZ",
          duration: "2018 - 2020",
          description: "Developed user interfaces for mobile-first web applications",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "Stanford University",
          year: "2018",
        },
      ],
      skills: ["React", "TypeScript", "JavaScript", "Node.js", "GraphQL", "CSS", "HTML", "Git"],
    },

    // Activity timeline
    activities: [
      {
        id: 1,
        type: "interview",
        title: "Technical Interview Scheduled",
        description: "Scheduled technical interview for January 25th at 2:00 PM",
        user: "John Doe",
        date: "2024-01-22",
        time: "10:30 AM",
      },
      {
        id: 2,
        type: "note",
        title: "Initial Screening Call",
        description:
          "Great communication skills. Strong React background. Excited about the role and company mission. Available to start in 2 weeks.",
        user: "Jane Smith",
        date: "2024-01-21",
        time: "3:15 PM",
      },
      {
        id: 3,
        type: "status",
        title: "Status Updated",
        description: "Moved from 'New' to 'Shortlisted'",
        user: "John Doe",
        date: "2024-01-21",
        time: "11:00 AM",
      },
      {
        id: 4,
        type: "application",
        title: "Application Received",
        description: "Applied for Senior React Developer position",
        user: "System",
        date: "2024-01-20",
        time: "9:45 AM",
      },
    ],
  }

  const handleAddActivity = () => {
    if (!newActivity.trim()) return

    // In real app, this would make an API call
    console.log("Adding activity:", { type: activityType, description: newActivity })
    setNewActivity("")
    setActivityType("note")
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "interview":
        return <Calendar className="h-4 w-4 text-blue-500" />
      case "note":
        return <User className="h-4 w-4 text-green-500" />
      case "status":
        return <CheckCircle className="h-4 w-4 text-purple-500" />
      default:
        return <User className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/jobs/1">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Job
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Candidate Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-lg">{candidate.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{candidate.name}</h2>
                  <p className="text-muted-foreground">{candidate.appliedFor}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{candidate.email}</span>
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
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Applied {new Date(candidate.appliedDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Current Status</Label>
                  <Select defaultValue={candidate.status.toLowerCase()}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="shortlisted">Shortlisted</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Column - Activity Timeline */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Track all interactions with this candidate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Activity Form */}
              <div className="space-y-3 p-4 border rounded-lg bg-muted/50">
                <div className="flex items-center space-x-2">
                  <Select value={activityType} onValueChange={setActivityType}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="note">Note</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="phone">Phone Screen</SelectItem>
                      <SelectItem value="test">Technical Test</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={handleAddActivity} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  placeholder="Add your notes here..."
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {candidate.activities.map((activity, index) => (
                  <div key={activity.id} className="flex space-x-3">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                        {getActivityIcon(activity.type)}
                      </div>
                      {index < candidate.activities.length - 1 && <div className="h-8 w-px bg-border mt-2" />}
                    </div>
                    <div className="flex-1 space-y-1 pb-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <div className="text-xs text-muted-foreground">
                          {activity.date} at {activity.time}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">by {activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Matching & CV Details */}
        <div className="space-y-6">
          {/* Match Score */}
          <Card>
            <CardHeader>
              <CardTitle>Match Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-24 h-24">
                  <Progress value={candidate.matchScore} className="w-20 h-20 rotate-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">{candidate.matchScore}%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Overall Match</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Skills Match</span>
                  <span className="font-medium">{candidate.matching.skillsMatch}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Experience Match</span>
                  <span className="font-medium">{candidate.matching.experienceMatch}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Education Match</span>
                  <span className="font-medium">{candidate.matching.educationMatch}%</span>
                </div>
              </div>

              <div className="space-y-2">
                {candidate.matching.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm">
                    {detail.type === "success" ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-muted-foreground">{detail.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CV Details */}
          <Card>
            <CardHeader>
              <CardTitle>CV Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Experience */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-medium">Experience</h4>
                </div>
                <div className="space-y-3 ml-6">
                  {candidate.cvData.experience.map((exp, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-medium text-sm">{exp.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {exp.company} • {exp.duration}
                      </div>
                      <div className="text-xs text-muted-foreground">{exp.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-medium">Education</h4>
                </div>
                <div className="space-y-2 ml-6">
                  {candidate.cvData.education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-medium text-sm">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">
                        {edu.school} • {edu.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="font-medium">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.cvData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
