import { ProtectedRoute } from "@/components/ProtectedRoute"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Briefcase, TrendingUp, Plus, Eye, Calendar, MapPin, Building } from "lucide-react"
import Link from "next/link"

// Mock data (will be replaced with real API calls later)
const stats = [
  {
    title: "Total Jobs",
    value: "24",
    change: "+3 this month",
    icon: Briefcase,
    color: "text-primary",
  },
  {
    title: "Active Applications",
    value: "156",
    change: "+12 this week",
    icon: Users,
    color: "text-accent",
  },
  {
    title: "Interviews Scheduled",
    value: "8",
    change: "+2 this week",
    icon: Calendar,
    color: "text-primary",
  },
  {
    title: "Positions Filled",
    value: "12",
    change: "+4 this month",
    icon: TrendingUp,
    color: "text-accent",
  },
]

const recentJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    applications: 23,
    status: "Active",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    applications: 45,
    status: "Active",
    posted: "1 week ago",
  },
]

const recentApplications = [
  {
    id: 1,
    candidateName: "Sarah Johnson",
    jobTitle: "Senior Frontend Developer",
    appliedDate: "2024-01-20",
    status: "Interview Scheduled",
    experience: "5+ years",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    candidateName: "Mike Chen",
    jobTitle: "Product Manager",
    appliedDate: "2024-01-19",
    status: "Under Review",
    experience: "8+ years",
    location: "Remote",
  },
]

export default function Dashboard() {
  return (
    <ProtectedRoute requiredUserType="HR">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your recruitment.</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/jobs/new">
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
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
          {/* Recent Jobs */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Job Postings</CardTitle>
                  <CardDescription>Your latest job postings and their performance</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/jobs">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">{job.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{job.applications} applications</span>
                        <span>•</span>
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest candidate applications across all jobs</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/talent">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium text-foreground">{application.candidateName}</h4>
                      <p className="text-sm text-muted-foreground">{application.jobTitle}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{application.experience}</span>
                        <span>•</span>
                        <span>{application.location}</span>
                        <span>•</span>
                        <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        application.status === "New"
                          ? "default"
                          : application.status === "Interview Scheduled"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {application.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  )
}