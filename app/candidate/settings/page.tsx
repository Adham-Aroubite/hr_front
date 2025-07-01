"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function CandidateSettings() {
  const [notifications, setNotifications] = useState({
    jobAlerts: true,
    applicationUpdates: true,
    interviewReminders: true,
    weeklyDigest: false,
    marketingEmails: false,
  })

  const [jobPreferences, setJobPreferences] = useState({
    jobTypes: ["Full-time", "Remote"],
    salaryRange: { min: 80000, max: 120000 },
    locations: ["San Francisco, CA", "Remote"],
    industries: ["Technology", "Startups"],
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and job search settings.</p>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="preferences">Job Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your personal account details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                </div>
                <Button variant="outline">Update Password</Button>
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Search Preferences</CardTitle>
              <CardDescription>Set your preferences to receive better job recommendations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Job Types</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Full-time", "Part-time", "Contract", "Freelance", "Remote"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={type}
                          defaultChecked={jobPreferences.jobTypes.includes(type)}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor={type} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="min-salary">Minimum Salary</Label>
                    <Input
                      id="min-salary"
                      type="number"
                      defaultValue={jobPreferences.salaryRange.min}
                      placeholder="80000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-salary">Maximum Salary</Label>
                    <Input
                      id="max-salary"
                      type="number"
                      defaultValue={jobPreferences.salaryRange.max}
                      placeholder="120000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferred-locations">Preferred Locations</Label>
                  <Input
                    id="preferred-locations"
                    defaultValue={jobPreferences.locations.join(", ")}
                    placeholder="San Francisco, CA; Remote; New York, NY"
                  />
                  <p className="text-xs text-muted-foreground">Separate multiple locations with commas</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industries">Preferred Industries</Label>
                  <Input
                    id="industries"
                    defaultValue={jobPreferences.industries.join(", ")}
                    placeholder="Technology, Healthcare, Finance"
                  />
                  <p className="text-xs text-muted-foreground">Separate multiple industries with commas</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience-level">Experience Level</Label>
                  <Select defaultValue="senior">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                      <SelectItem value="lead">Lead/Principal (8+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Choose what notifications you want to receive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="job-alerts">Job Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new jobs matching your preferences
                    </p>
                  </div>
                  <Switch
                    id="job-alerts"
                    checked={notifications.jobAlerts}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, jobAlerts: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="application-updates">Application Updates</Label>
                    <p className="text-sm text-muted-foreground">Get updates on your job applications</p>
                  </div>
                  <Switch
                    id="application-updates"
                    checked={notifications.applicationUpdates}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, applicationUpdates: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="interview-reminders">Interview Reminders</Label>
                    <p className="text-sm text-muted-foreground">Get reminded about upcoming interviews</p>
                  </div>
                  <Switch
                    id="interview-reminders"
                    checked={notifications.interviewReminders}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, interviewReminders: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="weekly-digest">Weekly Digest</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive a weekly summary of your job search activity
                    </p>
                  </div>
                  <Switch
                    id="weekly-digest"
                    checked={notifications.weeklyDigest}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, weeklyDigest: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive tips and career advice emails</p>
                  </div>
                  <Switch
                    id="marketing-emails"
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, marketingEmails: checked }))}
                  />
                </div>
              </div>

              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control your privacy and data sharing preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Profile Visibility</Label>
                    <p className="text-sm text-muted-foreground">Allow recruiters to find your profile</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Salary Expectations</Label>
                    <p className="text-sm text-muted-foreground">Display your salary range to employers</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Anonymous Mode</Label>
                    <p className="text-sm text-muted-foreground">Hide your identity when browsing jobs</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    Delete Account
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    This action cannot be undone. All your data will be permanently deleted.
                  </p>
                </div>
              </div>

              <Button>Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
