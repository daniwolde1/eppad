export function VideoSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="h-1 w-16 bg-gold mb-6 mx-auto" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            EPPAD in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our community come together to advance pharmaceutical sciences and healthcare in Ethiopia
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 max-w-6xl mx-auto">
          <video
            controls
            className="w-full aspect-[21/9]"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf1-WLQ9bQF7c0lF63AiiIkrqV3NjjHd3Q.jpeg"
            preload="metadata"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-19%20at%2011.43.38-BE8KbdRk9GdUrBZ4BRnmdMXzsOLA6D.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
