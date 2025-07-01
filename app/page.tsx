"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, MapPin, Building2, Clock, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      logo: "/placeholder.svg?height=40&width=40",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140k - $180k",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignCo",
      logo: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $170k",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataFlow",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      type: "Full-time",
      salary: "$150k - $190k",
    },
    {
      id: 6,
      title: "Marketing Manager",
      company: "GrowthCorp",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$90k - $120k",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      {/* Global Parallax Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large Primary Blob - Top Right (starts from outside) */}
        <svg
          className="absolute w-[900px] h-[700px] opacity-10"
          style={{
            top: -200 + scrollY * 0.3,
            right: -300 + scrollY * 0.2,
          }}
          viewBox="0 0 900 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250,100 C400,60 500,140 650,120 C750,105 830,160 830,260 C830,360 750,420 650,440 C500,465 400,385 250,410 C150,430 70,375 70,275 C70,175 150,120 250,100 Z"
            fill="hsl(var(--primary))"
            opacity="0.1"
          />
        </svg>

        {/* Large Accent Blob - Top Left (starts from outside) */}
        <svg
          className="absolute w-[800px] h-[600px] opacity-8"
          style={{
            top: -150 + scrollY * 0.4,
            left: -350 + scrollY * 0.15,
          }}
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,80 C320,50 420,110 540,100 C620,93 680,130 680,200 C680,270 620,320 540,330 C420,345 320,285 200,300 C120,310 60,273 60,203 C60,133 120,93 200,80 Z"
            fill="hsl(var(--accent))"
            opacity="0.08"
          />
        </svg>

        {/* Medium Primary Blob - Middle Right */}
        <svg
          className="absolute w-[700px] h-[500px] opacity-9"
          style={{
            top: 400 + scrollY * 0.25,
            right: -250 + scrollY * 0.3,
          }}
          viewBox="0 0 700 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M180,70 C280,40 380,100 480,90 C560,83 620,120 620,190 C620,260 560,310 480,320 C380,335 280,275 180,290 C100,300 40,263 40,193 C40,123 100,83 180,70 Z"
            fill="hsl(var(--primary))"
            opacity="0.09"
          />
        </svg>

        {/* Medium Accent Blob - Middle Left */}
        <svg
          className="absolute w-[600px] h-[450px] opacity-7"
          style={{
            top: 600 + scrollY * 0.35,
            left: -200 + scrollY * 0.2,
          }}
          viewBox="0 0 600 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150,60 C230,35 310,85 390,80 C450,77 490,105 490,155 C490,205 450,240 390,245 C310,252 230,202 150,207 C90,210 50,182 50,132 C50,82 90,67 150,60 Z"
            fill="hsl(var(--accent))"
            opacity="0.07"
          />
        </svg>

        {/* Large Primary Blob - Lower Right */}
        <svg
          className="absolute w-[850px] h-[650px] opacity-8"
          style={{
            top: 1000 + scrollY * 0.2,
            right: -400 + scrollY * 0.25,
          }}
          viewBox="0 0 850 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M220,90 C350,55 450,125 580,115 C680,108 750,150 750,230 C750,310 680,370 580,385 C450,405 350,335 220,350 C130,360 60,318 60,238 C60,158 130,108 220,90 Z"
            fill="hsl(var(--primary))"
            opacity="0.08"
          />
        </svg>

        {/* Large Accent Blob - Lower Left */}
        <svg
          className="absolute w-[750px] h-[550px] opacity-9"
          style={{
            top: 1200 + scrollY * 0.3,
            left: -300 + scrollY * 0.15,
          }}
          viewBox="0 0 750 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190,70 C290,40 390,100 490,90 C570,83 630,120 630,190 C630,260 570,310 490,320 C390,335 290,275 190,290 C110,300 50,263 50,193 C50,123 110,83 190,70 Z"
            fill="hsl(var(--accent))"
            opacity="0.09"
          />
        </svg>

        {/* Bottom Primary Blob */}
        <svg
          className="absolute w-[800px] h-[600px] opacity-6"
          style={{
            top: 1800 + scrollY * 0.1,
            right: -350 + scrollY * 0.2,
          }}
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,80 C320,50 420,110 540,100 C620,93 680,130 680,200 C680,270 620,320 540,330 C420,345 320,285 200,300 C120,310 60,273 60,203 C60,133 120,93 200,80 Z"
            fill="hsl(var(--primary))"
            opacity="0.06"
          />
        </svg>

        {/* Small Floating Blobs with Parallax */}
        <svg
          className="absolute w-[300px] h-[200px] opacity-5"
          style={{
            top: 300 + scrollY * 0.5,
            left: 200 + scrollY * 0.1,
          }}
          viewBox="0 0 300 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80,30 C120,15 160,45 200,40 C230,37 250,55 250,85 C250,115 230,140 200,145 C160,152 120,122 80,127 C50,130 30,112 30,82 C30,52 50,37 80,30 Z"
            fill="hsl(var(--accent))"
            opacity="0.05"
          />
        </svg>

        <svg
          className="absolute w-[250px] h-[180px] opacity-4"
          style={{
            top: 800 + scrollY * 0.6,
            right: 150 + scrollY * 0.12,
          }}
          viewBox="0 0 250 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70,25 C100,12 130,35 160,32 C180,30 195,42 195,62 C195,82 180,97 160,100 C130,105 100,82 70,85 C50,87 35,75 35,55 C35,35 50,30 70,25 Z"
            fill="hsl(var(--primary))"
            opacity="0.04"
          />
        </svg>
      </div>

      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50 relative">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">TalentFlow</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Login
              </Button>
            </Link>
            <Link href="/signup-choice">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section - Unified */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                    Talent Meets Opportunity <span className="text-accent">with AI</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-[600px]">
                    Our AI-powered platform connects top talent with leading companies, streamlining the recruitment
                    process for everyone involved.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup-choice">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/jobs">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                      Browse Jobs
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <div className="relative h-[450px] w-[450px]">
                  <Image
                    src="/images/hero_page_logo.png"
                    alt="TalentFlow Secretary Bird Logo"
                    width={450}
                    height={450}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-24 relative" id="features">
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How TalentFlow Works</h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Our platform serves both job seekers and employers with powerful tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* For Job Seekers */}
              <Card className="border shadow-sm bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">For Job Seekers</h3>
                  <p className="text-muted-foreground">
                    Apply with confidence and track your progress in real-time. No more application black holes.
                  </p>
                  <div className="pt-4">
                    <Link href="/candidate-signup">
                      <Button variant="outline" className="w-full bg-transparent">
                        Find Your Next Job
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* For Companies */}
              <Card className="border shadow-sm bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">For Companies</h3>
                  <p className="text-muted-foreground">
                    Create beautiful job pages and let our AI find the perfect candidates for your positions.
                  </p>
                  <div className="pt-4">
                    <Link href="/signup?type=business">
                      <Button variant="outline" className="w-full bg-transparent">
                        Post Jobs
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* AI Matching */}
              <Card className="border shadow-sm bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2a4 4 0 0 1 4 4c0 1.95-.38 3.53-1.12 4.74l-.21.36.32.24A8 8 0 0 1 19 18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3 8 8 0 0 1 4.01-6.66l.32-.24-.21-.36C8.38 9.53 8 7.95 8 6a4 4 0 0 1 4-4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">AI Matching</h3>
                  <p className="text-muted-foreground">
                    Our intelligent algorithms match candidates with jobs based on skills, experience, and preferences.
                  </p>
                  <div className="pt-4">
                    <Link href="#pricing">
                      <Button variant="outline" className="w-full bg-transparent">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured Jobs</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Discover opportunities from top companies actively hiring through our platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="border hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="text-sm font-medium text-foreground">{job.salary}</div>
                      </div>

                      <Link
                        href={`/login?redirect=${encodeURIComponent(`/candidate/apply?jobTitle=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}&jobId=${job.id}`)}`}
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90">Apply Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-32 relative" id="pricing">
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Pricing Plans</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Choose the right plan for your recruitment needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <Card className="border shadow-sm bg-card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Basic</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">$0</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Up to 3 job postings
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Basic candidate matching
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Email support
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/signup?type=business&plan=basic">
                      <Button variant="outline" className="w-full bg-transparent">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="border shadow-sm relative bg-card">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Professional</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">$49</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Up to 10 job postings
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Advanced AI matching
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Candidate analytics
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/signup?type=business&plan=pro">
                      <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border shadow-sm bg-card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Enterprise</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">$199</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited job postings
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Premium AI matching
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom integrations
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Advanced analytics & reporting
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/signup?type=business&plan=enterprise">
                      <Button variant="outline" className="w-full bg-transparent">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 relative">
                  <Image src="/images/hero_page_logo.png" alt="TalentFlow Logo" fill className="object-contain" />
                </div>
                <span className="text-lg font-bold text-foreground">TalentFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered recruitment platform connecting talent with opportunity.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">For Companies</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-muted-foreground hover:text-foreground">
                  Post Jobs
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-foreground">
                  Find Talent
                </Link>
                <Link href="#pricing" className="block text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">For Job Seekers</h4>
              <div className="space-y-2 text-sm">
                <Link href="/jobs" className="block text-muted-foreground hover:text-foreground">
                  Browse Jobs
                </Link>
                <Link href="/candidate/dashboard" className="block text-muted-foreground hover:text-foreground">
                  My Applications
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-foreground">
                  Career Tips
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
                <Link href="#" className="block text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} TalentFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
