export default function CampusEvents() {
  return (
    <div className="min-h-screen bg-[#F7F4FF] text-[#171333] md:flex">

      {/* SIDEBAR */}
      <aside className="w-full bg-[#111126] p-6 text-white md:min-h-screen md:w-60">
        <h1 className="mb-12 text-3xl font-bold">
          Student
          <span className="block text-purple-400">Hub</span>
        </h1>

        <nav className="space-y-4">
          <a
            href="/"
            className="block rounded-xl px-4 py-3 hover:bg-purple-700"
          >
            🏠 Dashboard
          </a>

          <a
            href="/campus-event"
            className="block rounded-xl bg-purple-700 px-4 py-3"
          >
            📅 Campus Events
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 hover:bg-purple-700"
          >
            📖 Courses
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 hover:bg-purple-700"
          >
            📊 Grades
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 hover:bg-purple-700"
          >
            👤 Profile
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 hover:bg-purple-700"
          >
            ⚙️ Settings
          </a>
        </nav>

        <p className="mt-16 text-sm italic text-purple-300">
          Learn • Connect • Grow
        </p>
      </aside>

      {/* MAIN CONTENT */}
      <main className="min-w-0 flex-1">

        {/* TOP HEADER */}
        <header className="flex items-center justify-between bg-white px-6 py-5 shadow-sm">
          <h2 className="text-lg font-semibold">Campus Events</h2>

          <div className="flex items-center gap-4">
            <span className="text-xl">🔔</span>
            <span className="font-semibold">Student 👤</span>
          </div>
        </header>

        {/* PAGE INTRODUCTION */}
        <section className="p-6 md:p-8">
          <h1 className="text-4xl font-extrabold">
            Campus <span className="text-purple-700">Events</span>
          </h1>

          <p className="mt-3 text-gray-600">
            Discover exciting events happening on campus.
          </p>
        </section>

      </main>
    </div>
  );
}
