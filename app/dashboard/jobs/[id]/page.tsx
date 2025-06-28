"use client"

import { useState } from "react"
import { JobForm } from "@/components/job-form" // Assuming job-form component exists
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Upload, RefreshCw, Edit, ArrowLeft, Calendar, MapPin, DollarSign } from "lucide-react"
import Link from "next/link"

// This single component will now handle BOTH viewing a job AND creating a new one.
export default function JobManagementPage({ params }: { params: { id: string } }) {
  const [selectedTab, setSelectedTab] = useState("applicants")

  // 1. CHECK IF THIS IS THE 'CREATE NEW' PAGE
  if (params.id === "new") {
    // If the id is 'new', we render the form in create mode and stop.
    return <JobForm mode="create" />
  }

  // Mock data - in a real app, you would fetch data for params.id
  const job = {
    id: params.id,
    title: "Senior React Developer",
    department: "Engineering",
    status: "Open",
    location: "Remote",
    salary: "$120k - $160k",
    created: "2024-01-15",
    description: `We are looking for a Senior React Developer...`, // Keeping this short for the prompt
    applicants: [
      {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah@email.com",
        matchScore: 95,
        status: "Interview",
        appliedDate: "2024-01-20",
        avatar: "SJ",
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
        experience: "5 years",
      },
      // ... more mock applicants
    ],
  }

  // The existing JSX for displaying the job details and applicant leaderboard
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
          <Link href={`/dashboard/jobs/${job.id}/edit`}>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit Job
            </Button>
          </Link>
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
                    <TableRow key={applicant.id}>
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
                          {/* Stars can be added here if needed */}
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
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{applicant.experience}</TableCell>
                      <TableCell>{new Date(applicant.appliedDate).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Link href={`/dashboard/jobs/${params.id}/candidates/${applicant.id}`}>
                          <Button variant="ghost" size="sm">
                            View Profile
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details">{/* Job Description Content Here */}</TabsContent>
      </Tabs>
    </div>
  )
}
