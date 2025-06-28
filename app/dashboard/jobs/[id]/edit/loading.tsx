export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="bg-white rounded-lg border p-6 space-y-6">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-64 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}
