export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Welcome to My Website</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          A clean, modern site built with Next.js and Tailwind CSS — fast, responsive, and easy to customize.
        </p>
        <a
          href="#features"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
        >
          Learn More
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Fast & Responsive",
                description:
                  "Built with Next.js for lightning-fast performance and a great experience on any device.",
                icon: "⚡",
              },
              {
                title: "Modern Design",
                description:
                  "Clean, beautiful UI powered by Tailwind CSS with a focus on simplicity and usability.",
                icon: "🎨",
              },
              {
                title: "Easy to Customize",
                description:
                  "Well-structured code that makes it simple to add your own content and style.",
                icon: "🛠️",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a passionate team dedicated to building great web experiences. Our goal is to deliver
              high-quality, performant websites that help people and businesses thrive online.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a developer looking for a starting point or a business needing an online presence,
              this template is designed to get you up and running quickly.
            </p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-64 flex items-center justify-center">
            <span className="text-7xl">🌐</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-500 mb-8">
            Have a question or want to work together? Send us a message and we will get back to you soon.
          </p>
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-800 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} My Website. Built with Next.js &amp; Tailwind CSS.</p>
      </footer>
    </div>
  );
}
