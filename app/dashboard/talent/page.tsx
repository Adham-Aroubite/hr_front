import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Download, Tag, Briefcase } from "lucide-react"

export default function TalentPoolPage() {
  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      currentRole: "Senior Frontend Developer",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "6 years",
      location: "San Francisco, CA",
      dateAdded: "2024-01-20",
      avatar: "SJ",
      tags: ["JavaScript Expert", "Remote Ready"],
    },
    {
      id: 2,
      name: "Mike Chen",
      currentRole: "Full Stack Developer",
      skills: ["React", "Python", "AWS"],
      experience: "5 years",
      location: "New York, NY",
      dateAdded: "2024-01-19",
      avatar: "MC",
      tags: ["Cloud Expert", "Startup Experience"],
    },
    {
      id: 3,
      name: "Emma Davis",
      currentRole: "UX/UI Designer",
      skills: ["Figma", "React", "CSS"],
      experience: "4 years",
      location: "Austin, TX",
      dateAdded: "2024-01-18",
      avatar: "ED",
      tags: ["Design Systems", "Frontend"],
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      currentRole: "DevOps Engineer",
      skills: ["Docker", "Kubernetes", "AWS"],
      experience: "7 years",
      location: "Seattle, WA",
      dateAdded: "2024-01-17",
      avatar: "AR",
      tags: ["Infrastructure", "Automation"],
    },
    {
      id: 5,
      name: "Lisa Wang",
      currentRole: "Product Manager",
      skills: ["Strategy", "Analytics", "Agile"],
      experience: "8 years",
      location: "Los Angeles, CA",
      dateAdded: "2024-01-15",
      avatar: "LW",
      tags: ["B2B SaaS", "Growth"],
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Talent Pool</h1>
          <p className="text-muted-foreground mt-2">Search and manage your company's candidate database</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export List
          </Button>
          <Button variant="outline">
            <Tag className="mr-2 h-4 w-4" />
            Manage Tags
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
          <CardDescription>Find candidates across all your job applications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Main Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name, skills, role, or keywords..." className="pl-10" />
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Skills</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select skills" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="docker">Docker</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Experience Level</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid (3-5 years)</SelectItem>
                  <SelectItem value="senior">Senior (5+ years)</SelectItem>
                  <SelectItem value="lead">Lead (8+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                  <SelectItem value="seattle">Seattle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tags</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by tags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="js-expert">JavaScript Expert</SelectItem>
                  <SelectItem value="remote-ready">Remote Ready</SelectItem>
                  <SelectItem value="startup">Startup Experience</SelectItem>
                  <SelectItem value="leadership">Leadership</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button>
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
            <Button variant="outline">Clear All</Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Candidates</CardTitle>
              <CardDescription>{candidates.length} candidates in your talent pool</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select defaultValue="date-added">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-added">Date Added</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="experience">Experience</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>Candidate</TableHead>
                <TableHead>Current Role</TableHead>
                <TableHead>Key Skills</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.id} className="hover:bg-muted/50">
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{candidate.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{candidate.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{candidate.currentRole}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {candidate.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{candidate.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{candidate.experience}</TableCell>
                  <TableCell>{candidate.location}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {candidate.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{new Date(candidate.dateAdded).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Briefcase className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Bulk Actions */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="text-sm text-muted-foreground">0 of {candidates.length} candidates selected</div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                <Briefcase className="mr-2 h-4 w-4" />
                Match to Job...
              </Button>
              <Button variant="outline" size="sm" disabled>
                <Tag className="mr-2 h-4 w-4" />
                Add Tag
              </Button>
              <Button variant="outline" size="sm" disabled>
                <Download className="mr-2 h-4 w-4" />
                Export Selected
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
