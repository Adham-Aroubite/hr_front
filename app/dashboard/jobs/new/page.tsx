import { JobForm } from "@/components/job-form"

// This page should render when accessing /dashboard/jobs/new
export default function CreateJobPage() {
  return <JobForm mode="create" />
}
