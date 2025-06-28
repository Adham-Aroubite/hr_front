import { JobForm } from "@/components/job-form"

// Mock data for existing jobs
const mockJobs = {
  "1": {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote",
    status: "Open",
    description: `We are looking for a Senior React Developer to join our growing engineering team. You will be responsible for building and maintaining our web applications using modern React technologies.

## Key Responsibilities
• Develop and maintain React applications using TypeScript
• Collaborate with design and product teams to implement user interfaces
• Write clean, maintainable, and well-tested code
• Participate in code reviews and technical discussions
• Mentor junior developers and contribute to team knowledge sharing

## Requirements
• 5+ years of experience with React and JavaScript/TypeScript
• Strong understanding of modern React patterns (hooks, context, etc.)
• Experience with state management libraries (Redux, Zustand, etc.)
• Proficiency with modern build tools (Webpack, Vite, etc.)
• Knowledge of testing frameworks (Jest, React Testing Library)
• Experience with version control systems (Git)

## What We Offer
• Competitive salary and equity package
• Comprehensive health, dental, and vision insurance
• Flexible work arrangements and remote-first culture
• Professional development budget for conferences and courses`,
  },
  "2": {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    status: "Open",
    description: `We're seeking an experienced Product Manager to drive the strategy and execution of our core product initiatives.

## Key Responsibilities
• Define product strategy and roadmap
• Work closely with engineering and design teams
• Conduct user research and analyze market trends
• Manage product launches and feature rollouts

## Requirements
• 3+ years of product management experience
• Strong analytical and problem-solving skills
• Experience with agile development methodologies
• Excellent communication and leadership abilities`,
  },
  "3": {
    title: "UX Designer",
    department: "Design",
    location: "New York, NY",
    status: "Open",
    description: `Join our design team to create beautiful and intuitive user experiences for our products.

## Key Responsibilities
• Design user interfaces and experiences
• Create wireframes, prototypes, and design systems
• Collaborate with product and engineering teams
• Conduct user research and usability testing

## Requirements
• 3+ years of UX/UI design experience
• Proficiency in design tools (Figma, Sketch, etc.)
• Strong portfolio demonstrating design thinking
• Understanding of front-end development principles`,
  },
  "4": {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    status: "Draft",
    description: `We're looking for a DevOps Engineer to help scale our infrastructure and improve our deployment processes.

## Key Responsibilities
• Manage cloud infrastructure and deployments
• Implement CI/CD pipelines
• Monitor system performance and reliability
• Collaborate with development teams on best practices

## Requirements
• 4+ years of DevOps/Infrastructure experience
• Experience with cloud platforms (AWS, GCP, Azure)
• Knowledge of containerization (Docker, Kubernetes)
• Scripting and automation skills`,
  },
  "5": {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Los Angeles, CA",
    status: "Closed",
    description: `Lead our marketing efforts to drive growth and brand awareness.

## Key Responsibilities
• Develop and execute marketing strategies
• Manage digital marketing campaigns
• Analyze marketing performance and ROI
• Collaborate with sales and product teams

## Requirements
• 5+ years of marketing experience
• Experience with digital marketing tools
• Strong analytical and creative skills
• Excellent written and verbal communication`,
  },
}

export default function EditJobPage({ params }: { params: { id: string } }) {
  const jobData = mockJobs[params.id as keyof typeof mockJobs]

  if (!jobData) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600">The job you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return <JobForm mode="edit" initialData={jobData} jobId={params.id} />
}
