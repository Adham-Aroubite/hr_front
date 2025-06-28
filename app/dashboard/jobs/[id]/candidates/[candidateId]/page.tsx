"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
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
  ExternalLink,
  Sparkles,
  ChevronDown,
  MessageSquare,
  Clock,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function ApplicationProfilePage({
  params,
}: {
  params: { id: string; candidateId: string }
}) {
  const [newActivity, setNewActivity] = useState("")
  const [activityType, setActivityType] = useState("note")
  const [aiQuestionsGenerated, setAiQuestionsGenerated] = useState(false)
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false)

  // Mock data - in real app this would come from API
  const candidate = {
    id: params.candidateId,
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

  const aiQuestions = [
    {
      id: 1,
      question: "Can you describe your experience with TypeScript in a large-scale React project?",
      keyPoints: [
        "Mentions state management patterns",
        "Discusses component lifecycle optimization",
        "Aware of performance considerations",
        "Experience with type safety benefits",
      ],
    },
    {
      id: 2,
      question: "How do you approach testing in React applications?",
      keyPoints: [
        "Mentions unit testing with Jest/React Testing Library",
        "Discusses integration testing strategies",
        "Understands testing pyramid concepts",
        "Experience with mocking and test utilities",
      ],
    },
    {
      id: 3,
      question: "Tell me about a challenging technical problem you solved recently.",
      keyPoints: [
        "Clear problem definition",
        "Systematic approach to debugging",
        "Consideration of multiple solutions",
        "Learning from the experience",
      ],
    },
    {
      id: 4,
      question: "How do you stay current with React ecosystem changes?",
      keyPoints: [
        "Follows official React documentation",
        "Participates in developer communities",
        "Experiments with new features",
        "Evaluates new tools critically",
      ],
    },
  ]

  const handleAddActivity = () => {
    if (!newActivity.trim()) return
    console.log("Adding activity:", { type: activityType, description: newActivity })
    setNewActivity("")
    setActivityType("note")
  }

  const handleGenerateQuestions = async () => {
    setIsGeneratingQuestions(true)
    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGeneratingQuestions(false)
    setAiQuestionsGenerated(true)
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href={`/dashboard/jobs/${params.id}`}>
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
                  {/* Link to Master Profile */}
                  <Link href={`/dashboard/candidates/${candidate.id}`}>
                    <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-700">
                      View Master Profile
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
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

                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>

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

          {/* AI Interview Assistant */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <span>AI Interview Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!aiQuestionsGenerated ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Generate tailored questions based on the job requirements and this candidate's CV.
                  </p>
                  <Button
                    onClick={handleGenerateQuestions}
                    disabled={isGeneratingQuestions}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {isGeneratingQuestions ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Suggested Questions
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    AI-generated questions tailored for this candidate:
                  </p>
                  {aiQuestions.map((item) => (
                    <Collapsible key={item.id}>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between text-left p-3 h-auto">
                          <span className="text-sm font-medium">{item.question}</span>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 pb-3">
                        <div className="bg-muted/50 rounded-lg p-3 mt-2">
                          <p className="text-xs font-medium text-muted-foreground mb-2">Key points to listen for:</p>
                          <ul className="space-y-1">
                            {item.keyPoints.map((point, index) => (
                              <li key={index} className="text-xs text-muted-foreground flex items-start">
                                <span className="mr-2">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Middle Column - Enhanced Activity Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Track all interactions with this candidate for this position</CardDescription>
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

              {/* Enhanced Timeline */}
              <div className="space-y-6">
                {candidate.activities.map((activity, index) => (
                  <div key={activity.id} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted border-2 border-background">
                        {getActivityIcon(activity.type)}
                      </div>
                      {index < candidate.activities.length - 1 && <div className="h-12 w-px bg-border mt-2" />}
                    </div>
                    <div className="flex-1 space-y-2 pb-6">
                      <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-foreground">{activity.title}</h4>
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
        </div>
      </div>
    </div>
  )
}
