"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Upload, RefreshCw, Edit, ArrowLeft, Download, Star, Calendar, MapPin, DollarSign } from "lucide-react"
import Link from "next/link"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const [selectedTab, setSelectedTab] = useState("applicants")

  // Mock data - in real app this would come from API
  const job = {
    id: params.id,
    title: "Senior React Developer",
    department: "Engineering",
    status: "Open",
    location: "Remote",
    salary: "$120k - $160k",
    created: "2024-01-15",
    description: `We are looking for a Senior React Developer to join our growing engineering team. You will be responsible for building and maintaining our web applications using modern React technologies.

Key Responsibilities:
• Develop and maintain React applications
• Collaborate with design and product teams
• Write clean, maintainable code
• Mentor junior developers
• Participate in code reviews

Requirements:
• 5+ years of React experience
• Strong JavaScript/TypeScript skills
• Experience with modern build tools
• Knowledge of testing frameworks
• Excellent communication skills`,
    applicants: [
      {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah@email.com",
        matchScore: 95,
        status: "Interview",
        appliedDate: "2024-01-20",
        avatar: "SJ",
        skills: ["React", "TypeScript", "Node.js", "GraphQL"],
        experience: "6 years",
      },
      {
        id: 2,
        name: "Mike Chen",
        email: "mike@email.com",
        matchScore: 89,
        status: "Shortlisted",
        appliedDate: "2024-01-19",
        avatar: "MC",
        skills: ["React", "JavaScript", "Python", "AWS"],
        experience: "5 years",
      },
      {
        id: 3,
        name: "Emma Davis",
        email: "emma@email.com",
        matchScore: 84,
        status: "New",
        appliedDate: "2024-01-18",
        avatar: "ED",
        skills: ["React", "Vue.js", "CSS", "Docker"],
        experience: "4 years",
      },
      {
        id: 4,
        name: "Alex Rodriguez",
        email: "alex@email.com",
        matchScore: 78,
        status: "New",
        appliedDate: "2024-01-17",
        avatar: "AR",
        skills: ["React", "Angular", "Java", "MongoDB"],
        experience: "7 years",
      },
    ],
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/jobs">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Posted {new Date(job.created).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="default">{job.status}</Badge>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Job
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="applicants">Applicants ({job.applicants.length})</TabsTrigger>
          <TabsTrigger value="details">Job Details</TabsTrigger>
        </TabsList>

        <TabsContent value="applicants" className="space-y-6">
          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Add Candidates
              </Button>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Matching
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select defaultValue="match-score">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match-score">Match Score</SelectItem>
                  <SelectItem value="date-applied">Date Applied</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Applicants Table */}
          <Card>
            <CardHeader>
              <CardTitle>Candidate Leaderboard</CardTitle>
              <CardDescription>Candidates ranked by AI match score</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Match Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {job.applicants.map((applicant, index) => (
                    <TableRow key={applicant.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>{applicant.avatar}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <div className="font-medium">{applicant.name}</div>
                            <div className="text-sm text-muted-foreground">{applicant.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Progress value={applicant.matchScore} className="w-16" />
                            <span className="text-sm font-medium">{applicant.matchScore}%</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(applicant.matchScore / 20)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select defaultValue={applicant.status.toLowerCase()}>
                          <SelectTrigger className="w-[120px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="shortlisted">Shortlisted</SelectItem>
                            <SelectItem value="interview">Interview</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{applicant.experience}</TableCell>
                      <TableCell>{new Date(applicant.appliedDate).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Link href={`/dashboard/candidates/${applicant.id}`}>
                            <Button variant="ghost" size="sm">
                              View Profile
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
              <CardDescription>Full job posting details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-sm leading-relaxed">{job.description}</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
