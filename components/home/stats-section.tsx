const stats = [
  { id: 1, name: "Active Members", value: "500+" },
  { id: 2, name: "Countries Represented", value: "15+" },
  { id: 3, name: "Annual Events", value: "12+" },
  { id: 4, name: "Scholarships Awarded", value: "$50K+" },
]

export function StatsSection() {
  return (
    <section className="bg-primary/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Impact by the Numbers
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Building a stronger pharmaceutical community, one connection at a time
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center rounded-lg bg-card p-8 shadow-sm">
              <dt className="font-display text-5xl font-bold text-primary">{stat.value}</dt>
              <dd className="mt-2 text-center text-sm font-medium text-muted-foreground">{stat.name}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
