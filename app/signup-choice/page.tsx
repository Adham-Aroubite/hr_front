import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Target, User, Building2 } from "lucide-react"

export default function SignUpChoicePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">TalentFlow</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How would you like to join TalentFlow?</h1>
          <p className="text-lg text-gray-600">Choose the option that best describes you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Job Seeker Card */}
          <Link href="/candidate-signup">
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-200">
              <CardContent className="p-8 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <User className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900">I'm a Job Seeker</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Create a profile, apply for jobs with one click, and track your application status.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center text-blue-600 font-medium">
                    Get Started as Candidate
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Company/HR Card */}
          <Link href="/signup">
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-green-200">
              <CardContent className="p-8 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-green-100 rounded-full">
                    <Building2 className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900">I'm a Company / HR</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Post job openings, discover top talent with AI matching, and manage your recruitment pipeline.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center text-green-600 font-medium">
                    Get Started for Business
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
