export default function DashboardPage() {
  return (
    <div className="bg-card rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-muted-foreground">
        This is a protected route. You can only see this if you're authenticated.
      </p>
    </div>
  )
}