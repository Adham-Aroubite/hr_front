import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, Clock } from "lucide-react"

export default function CandidateDashboard() {
  const applications = [
    {
      id: 1,
      jobTitle: "Senior React Developer",
      company: {
        name: "TechCorp",
        logo: "/placeholder.svg?height=40&width=40",
      },
      appliedDate: "2024-01-20",
      status: "Interview Scheduled",
      statusColor: "green",
      location: "Remote",
      timeline: [
        { date: "2024-01-20", status: "Application Received", type: "received" },
        { date: "2024-01-22", status: "Under Review", type: "review" },
        { date: "2024-01-24", status: "Interview Scheduled", type: "interview" },
      ],
    },
    {
      id: 2,
      jobTitle: "Product Manager",
      company: {
        name: "StartupXYZ",
        logo: "/placeholder.svg?height=40&width=40",
      },
      appliedDate: "2024-01-18",
      status: "Under Review",
      statusColor: "yellow",
      location: "San Francisco, CA",
      timeline: [
        { date: "2024-01-18", status: "Application Received", type: "received" },
        { date: "2024-01-19", status: "Under Review", type: "review" },
      ],
    },
    {
      id: 3,
      jobTitle: "UX Designer",
      company: {
        name: "DesignCo",
        logo: "/placeholder.svg?height=40&width=40",
      },
      appliedDate: "2024-01-15",
      status: "Application Received",
      statusColor: "blue",
      location: "New York, NY",
      timeline: [{ date: "2024-01-15", status: "Application Received", type: "received" }],
    },
    {
      id: 4,
      jobTitle: "Frontend Developer",
      company: {
        name: "WebAgency",
        logo: "/placeholder.svg?height=40&width=40",
      },
      appliedDate: "2024-01-10",
      status: "Not Selected",
      statusColor: "red",
      location: "Remote",
      timeline: [
        { date: "2024-01-10", status: "Application Received", type: "received" },
        { date: "2024-01-12", status: "Under Review", type: "review" },
        { date: "2024-01-16", status: "Not Selected", type: "rejected" },
      ],
    },
  ]

  const getStatusBadgeClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-800 border-green-200"
      case "yellow":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "blue":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "red":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
        <p className="text-gray-600 mt-2">Track the status of your job applications</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter((app) => app.status === "Under Review").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Interviews</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter((app) => app.status === "Interview Scheduled").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <Building2 className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter((app) => app.status === "Not Selected").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((application) => (
          <Card key={application.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{application.jobTitle}</h3>
                    <p className="text-gray-600">{application.company.name}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{application.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Badge className={getStatusBadgeClass(application.statusColor)}>{application.status}</Badge>
              </div>

              {/* Timeline */}
              <div className="mt-6 pl-16">
                <div className="space-y-3">
                  {application.timeline.map((event, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          event.type === "received"
                            ? "bg-blue-500"
                            : event.type === "review"
                              ? "bg-yellow-500"
                              : event.type === "interview"
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}
                      />
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-sm text-gray-700">{event.status}</span>
                        <span className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
