import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Users, Clock, TrendingUp, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Good morning, John! 👋</h1>
        <p className="text-muted-foreground mt-2">Here's what's happening with your recruitment today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Job Offers</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+18% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Match Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% improvement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Job Offers */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Active Job Offers</CardTitle>
              <Link href="/dashboard/jobs">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <CardDescription>Your current open positions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Senior React Developer", department: "Engineering", applicants: 34, status: "active" },
              { title: "Product Manager", department: "Product", applicants: 28, status: "active" },
              { title: "UX Designer", department: "Design", applicants: 19, status: "active" },
              { title: "DevOps Engineer", department: "Engineering", applicants: 15, status: "draft" },
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="space-y-1">
                  <div className="font-medium">{job.title}</div>
                  <div className="text-sm text-muted-foreground">{job.department}</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-muted-foreground">{job.applicants} applicants</div>
                  <Badge variant={job.status === "active" ? "default" : "secondary"}>{job.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Applicants */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Applicants</CardTitle>
            <CardDescription>Latest candidates across all positions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Sarah Johnson", role: "Senior React Developer", score: 95, time: "2 hours ago", avatar: "SJ" },
              { name: "Mike Chen", role: "Product Manager", score: 89, time: "4 hours ago", avatar: "MC" },
              { name: "Emma Davis", role: "UX Designer", score: 84, time: "6 hours ago", avatar: "ED" },
              { name: "Alex Rodriguez", role: "DevOps Engineer", score: 91, time: "1 day ago", avatar: "AR" },
            ].map((applicant, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{applicant.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="font-medium">{applicant.name}</div>
                  <div className="text-sm text-muted-foreground">{applicant.role}</div>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-sm font-medium">{applicant.score}% match</div>
                  <div className="text-xs text-muted-foreground">{applicant.time}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* My Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>My Tasks</CardTitle>
          <CardDescription>Action items that need your attention</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              task: "Review 5 shortlisted candidates for Senior React Developer",
              priority: "high",
              icon: AlertCircle,
              action: "Review Now",
            },
            {
              task: "Follow up with Sarah Johnson - Product Manager interview",
              priority: "medium",
              icon: Clock,
              action: "Send Message",
            },
            {
              task: "Update job description for UX Designer position",
              priority: "low",
              icon: CheckCircle,
              action: "Edit Job",
            },
          ].map((task, i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <task.icon
                  className={`h-5 w-5 ${
                    task.priority === "high"
                      ? "text-red-500"
                      : task.priority === "medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                  }`}
                />
                <div>
                  <div className="font-medium">{task.task}</div>
                  <Badge
                    variant={
                      task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"
                    }
                    className="mt-1"
                  >
                    {task.priority} priority
                  </Badge>
                </div>
              </div>
              <Button variant="outline" size="sm">
                {task.action}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
