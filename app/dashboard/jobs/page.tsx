import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Eye, Edit, Archive, Users } from "lucide-react"
import Link from "next/link"

export default function JobOffersPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      status: "Open",
      applicants: 34,
      created: "2024-01-15",
      location: "Remote",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      status: "Open",
      applicants: 28,
      created: "2024-01-12",
      location: "San Francisco",
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      status: "Open",
      applicants: 19,
      created: "2024-01-10",
      location: "New York",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      status: "Draft",
      applicants: 0,
      created: "2024-01-08",
      location: "Remote",
    },
    {
      id: 5,
      title: "Marketing Manager",
      department: "Marketing",
      status: "Closed",
      applicants: 45,
      created: "2023-12-20",
      location: "Los Angeles",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Offers</h1>
          <p className="text-muted-foreground mt-2">Manage all your job openings and track applications</p>
        </div>
        {/* CRITICAL: This Link component MUST navigate to /dashboard/jobs/new */}
        <Link href="/dashboard/jobs/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Job Offer
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search job titles..." className="pl-10" />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Jobs Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Job Offers</CardTitle>
          <CardDescription>
            {jobs.length} total jobs • {jobs.filter((j) => j.status === "Open").length} open positions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{job.title}</div>
                    </div>
                  </TableCell>
                  <TableCell>{job.department}</TableCell>
                  <TableCell>
                    <Badge
                      variant={job.status === "Open" ? "default" : job.status === "Draft" ? "secondary" : "outline"}
                    >
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{job.applicants}</span>
                    </div>
                  </TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{new Date(job.created).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Link href={`/dashboard/jobs/${job.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/dashboard/jobs/${job.id}/edit`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm">
                        <Archive className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
