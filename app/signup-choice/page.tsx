// ==== app/signup-choice/page.tsx (create this new file) ====
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, User, ArrowRight } from "lucide-react"
import { Logo } from "@/components/logo"

export default function SignupChoicePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <Logo size="md" href="/" className="justify-center" />
        </div>
        
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-foreground">Join TalentFlow</h1>
          <p className="text-lg text-muted-foreground">
            Choose how you'd like to get started
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For Companies/HR */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">For Companies</CardTitle>
              <CardDescription className="text-base">
                Post jobs, manage applications, and find the best talent for your team
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild className="w-full" size="lg">
                <Link href="/signup">
                  Get Started for Business
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Perfect for HR teams and recruiters
              </p>
            </CardContent>
          </Card>

          {/* For Candidates */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">For Job Seekers</CardTitle>
              <CardDescription className="text-base">
                Discover opportunities, apply to jobs, and advance your career
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild className="w-full" size="lg" variant="outline">
                <Link href="/candidate-signup">
                  Find Your Next Job
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Perfect for professionals and job seekers
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}