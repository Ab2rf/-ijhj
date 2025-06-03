export default function Products() {
  return (
    <main className="p-8 bg-light min-h-screen">
      <h2 className="text-2xl font-bold text-primary mb-4">🧩 Digital Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h3 className="font-bold">Ebook 1</h3>
          <p className="text-sm">Price: $5</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h3 className="font-bold">Template</h3>
          <p className="text-sm">Price: $10</p>
        </div>
      </div>
    </main>
  )
}