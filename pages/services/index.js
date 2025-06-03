export default function Services() {
  return (
    <main className="p-8 bg-light min-h-screen">
      <h2 className="text-2xl font-bold text-primary mb-4">💼 Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h3 className="font-bold">Website Setup</h3>
          <p className="text-sm">Starting at $30</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h3 className="font-bold">One-on-one Call</h3>
          <p className="text-sm">Price: $20</p>
        </div>
      </div>
    </main>
  )
}