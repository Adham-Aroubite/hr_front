// ==== app/candidate/dashboard/page.tsx (FIXED VERSION) ====
"use client"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, Eye, TrendingUp, Calendar, MapPin, Building } from "lucide-react"
import Link from "next/link"

// Mock data (will be replaced with real API calls later)
const stats = [
  {
    title: "Applications Sent",
    value: "12",
    change: "+3 this week",
    icon: Briefcase,
    color: "text-primary",
  },
  {
    title: "Profile Views",
    value: "48",
    change: "+12 this week",
    icon: Eye,
    color: "text-accent",
  },
  {
    title: "Interviews Scheduled",
    value: "3",
    change: "+1 this week",
    icon: Calendar,
    color: "text-primary",
  },
  {
    title: "Response Rate",
    value: "25%",
    change: "+5% from last month",
    icon: TrendingUp,
    color: "text-accent",
  },
]

const recentApplications = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    appliedDate: "2 days ago",
    status: "Under Review",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Remote",
    appliedDate: "1 week ago",
    status: "Interview Scheduled",
    statusColor: "bg-blue-100 text-blue-800",
  },
]

const upcomingInterviews = [
  {
    id: 1,
    title: "Product Manager",
    company: "StartupXYZ",
    date: "Tomorrow",
    time: "2:00 PM",
    type: "Video Call",
    interviewer: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    date: "Friday",
    time: "10:00 AM",
    type: "On-site",
    interviewer: "Mike Chen",
  },
]

const recommendedJobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "Austin, TX",
    type: "Full-time",
    match: 95,
    posted: "1 day ago",
  },
  {
    id: 2,
    title: "React Developer",
    company: "WebSolutions",
    location: "Remote",
    type: "Contract",
    match: 88,
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Pippo The Grippo",
    company: "Kagaroo Trundle",
    location: "Khouribga, MA",
    type: "Full-time",
    match: 69,
    posted: "1 centry ago",
  },
]

export default function CandidateDashboard() {
  return (
    <ProtectedRoute requiredUserType="CANDIDATE">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
            <p className="text-muted-foreground">Here's your job search activity and recommendations.</p>
          </div>
          <Button asChild>
            <Link href="/candidate/apply">
              <Briefcase className="mr-2 h-4 w-4" />
              Browse Jobs
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Track the status of your job applications</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/candidate/apply">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">{application.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{application.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{application.location}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Applied {application.appliedDate}</p>
                    </div>
                    <Badge className={application.statusColor}>{application.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Interviews */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Interviews</CardTitle>
              <CardDescription>Your scheduled interviews this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingInterviews.length > 0 ? (
                  upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-medium text-foreground">{interview.title}</h4>
                        <p className="text-sm text-muted-foreground">{interview.company}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>
                            {interview.date} at {interview.time}
                          </span>
                          <span>•</span>
                          <span>{interview.type}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Interviewer: {interview.interviewer}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-sm font-medium text-foreground">No interviews scheduled</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Keep applying to jobs to get interview opportunities.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Jobs */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Jobs that match your skills and preferences</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/candidate/apply">View All Jobs</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recommendedJobs.map((job) => (
                <div key={job.id} className="p-4 border rounded-lg space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">{job.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{job.type}</Badge>
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Match Score</span>
                      <span className="text-sm text-accent font-medium">{job.match}%</span>
                    </div>
                    <Progress value={job.match} className="h-2" />
                  </div>
                  <Button className="w-full" size="sm">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  )
}