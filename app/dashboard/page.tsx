import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Briefcase, TrendingUp, Plus, Eye, Calendar, MapPin, Building } from "lucide-react"
import Link from "next/link"

// Mock data
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
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "New York, NY",
    type: "Contract",
    applications: 18,
    status: "Draft",
    posted: "3 days ago",
  },
]

const recentApplications = [
  {
    id: 1,
    candidateName: "Sarah Johnson",
    jobTitle: "Senior Frontend Developer",
    appliedDate: "2024-01-20",
    status: "Interview Scheduled",
    avatar: "/placeholder.svg?height=40&width=40",
    experience: "5+ years",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    candidateName: "Mike Chen",
    jobTitle: "Product Manager",
    appliedDate: "2024-01-19",
    status: "Under Review",
    avatar: "/placeholder.svg?height=40&width=40",
    experience: "8+ years",
    location: "Remote",
  },
  {
    id: 3,
    candidateName: "Emily Davis",
    jobTitle: "UX Designer",
    appliedDate: "2024-01-18",
    status: "New",
    avatar: "/placeholder.svg?height=40&width=40",
    experience: "3+ years",
    location: "New York, NY",
  },
]

const upcomingInterviews = [
  {
    id: 1,
    candidateName: "Sarah Johnson",
    jobTitle: "Senior Frontend Developer",
    date: "Today",
    time: "2:00 PM",
    type: "Video Call",
    interviewer: "John Smith",
  },
  {
    id: 2,
    candidateName: "Alex Rodriguez",
    jobTitle: "Product Manager",
    date: "Tomorrow",
    time: "10:00 AM",
    type: "On-site",
    interviewer: "Lisa Wang",
  },
]

export default function Dashboard() {
  return (
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

      {/* Upcoming Interviews */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Interviews</CardTitle>
          <CardDescription>Your scheduled interviews for this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingInterviews.length > 0 ? (
              upcomingInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium text-foreground">{interview.candidateName}</h4>
                    <p className="text-sm text-muted-foreground">{interview.jobTitle}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>
                        {interview.date} at {interview.time}
                      </span>
                      <span>•</span>
                      <span>{interview.type}</span>
                      <span>•</span>
                      <span>Interviewer: {interview.interviewer}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-sm font-medium text-foreground">No interviews scheduled</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Interviews will appear here once they're scheduled.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
