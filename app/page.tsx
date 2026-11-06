"use client";

import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Tech Innovation Summit",
    category: "Technology",
    date: "NOV 14",
    time: "10:00 AM",
    venue: "University Auditorium",
    description:
      "Discover new ideas, connect with innovators and explore the future of technology.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    tagColor: "bg-cyan-100 text-cyan-800",
  },
  {
    id: 2,
    title: "Campus Music Festival",
    category: "Entertainment",
    date: "NOV 18",
    time: "4:00 PM",
    venue: "University Sports Ground",
    description:
      "Experience great music, amazing performances and unforgettable campus moments.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900",
    tagColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 3,
    title: "Career Development Workshop",
    category: "Workshop",
    date: "NOV 22",
    time: "11:00 AM",
    venue: "Faculty Conference Hall",
    description:
      "Meet professionals, develop new skills and prepare for exciting career opportunities.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900",
    tagColor: "bg-emerald-100 text-emerald-800",
  },
];
const categories = [
  "All Events",
  "Technology",
  "Entertainment",
  "Sports",
  "Workshop",
  "Academic",
  "Business",
];

export default function Home() {
  const [registered, setRegistered] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const filteredEvents = events.filter((event) => {
  const matchesSearch = `${event.title} ${event.category} ${event.venue}`
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All Events" ||
    event.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#14213d]">
      {/* Navigation */}
      <header className="bg-[#101d35] text-white">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tight">
            CAMPUS<span className="text-[#20d6c2]">EVENTS</span>
            <span className="text-orange-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-9 text-sm text-slate-300">
            <a href="#" className="text-white hover:text-[#20d6c2]">
              Home
            </a>
            <a href="#events" className="hover:text-[#20d6c2]">
              Explore Events
            </a>
            <a href="#about" className="hover:text-[#20d6c2]">
              About
            </a>
          </div>

          <a
            href="#events"
            className="bg-[#20d6c2] text-[#101d35] px-5 py-3 rounded-full text-sm font-bold hover:bg-white transition"
          >
            Explore Now →
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#101d35] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-20 w-80 h-80 bg-[#20d6c2] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-400 opacity-10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-[#20d6c2] mb-7">
              <span className="w-2 h-2 rounded-full bg-[#20d6c2]" />
              YOUR CAMPUS. YOUR MOMENTS.
            </span>

            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Something
              <span className="block text-[#20d6c2]">exciting is</span>
              happening.
            </h1>

            <p className="text-slate-300 mt-6 text-lg leading-8 max-w-lg">
              From tech meetups to music festivals, discover what's
              happening around your campus and be part of the experience.
            </p>

            <a
              href="#events"
              className="inline-block mt-9 bg-[#20d6c2] text-[#101d35] px-8 py-4 rounded-xl font-bold hover:bg-white transition"
            >
              Discover Events →
            </a>

            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-3xl font-black">03+</p>
                <p className="text-sm text-slate-400 mt-1">Upcoming events</p>
              </div>
              <div>
                <p className="text-3xl font-black">01</p>
                <p className="text-sm text-slate-400 mt-1">Campus community</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-1">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000"
                alt="Students attending a campus event"
                className="w-full h-[350px] md:h-[440px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-5 bg-white text-[#101d35] p-5 rounded-2xl shadow-xl">
              <p className="text-xs text-slate-500 font-semibold">
                MAKE EVERY MOMENT COUNT
              </p>
              <p className="font-black text-lg mt-1">
                Discover. Connect. Experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
          <div>
            <p className="text-[#079e94] font-bold text-sm tracking-widest mb-3">
              FIND YOUR NEXT EXPERIENCE
            </p>
            <h2 className="text-4xl font-black">Explore Events</h2>
            <p className="text-slate-500 mt-3">
              Find something interesting happening around you.
            </p>
          </div>

          <div className="w-full md:w-80">
            <label htmlFor="event-search" className="sr-only">
              Search events
            </label>
            <input
              id="event-search"
              type="search"
              placeholder="Search events or categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#20bfae] focus:ring-2 focus:ring-[#20bfae]/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />

                <span
                  className={`absolute top-5 left-5 px-4 py-2 rounded-full text-xs font-bold ${event.tagColor}`}
                >
                  {event.category}
                </span>

                <span className="absolute bottom-5 right-5 bg-white text-[#101d35] px-4 py-3 rounded-xl text-center shadow-lg">
                  <span className="block font-black text-lg">
                    {event.date.split(" ")[1]}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {event.date.split(" ")[0]}
                  </span>
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span>◷ {event.time}</span>
                  <span className="text-slate-300">|</span>
                  <span>📍 {event.venue}</span>
                </div>

                <h3 className="text-xl font-black mb-3">
                  {event.title}
                </h3>

                <p className="text-slate-500 text-sm leading-7 min-h-[72px]">
                  {event.description}
                </p>

                <button
                  onClick={() =>
                    setRegistered((previous) =>
                      previous.includes(event.id)
                        ? previous
                        : [...previous, event.id]
                    )
                  }
                  disabled={registered.includes(event.id)}
                  className="w-full mt-6 py-4 rounded-xl bg-[#101d35] text-white font-bold hover:bg-[#087f79] disabled:bg-emerald-600 transition"
                >
                  {registered.includes(event.id)
                    ? "Interest Registered ✓"
                    : "Register Interest →"}
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-slate-500 py-16">
            No events found. Try another search.
          </p>
        )}
      </section>

      {/* Bottom Banner */}
      <section id="about" className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-[#dff8f4] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-[#087f79] font-bold text-sm mb-3">
              CAMPUS LIFE IS MORE THAN LECTURES
            </p>
            <h2 className="text-3xl md:text-4xl font-black max-w-xl">
              Find your people. Discover your interests.
            </h2>
            <p className="text-slate-600 mt-4">
              There's always something happening. Don't miss out.
            </p>
          </div>

          <a
            href="#events"
            className="bg-[#101d35] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#087f79] transition whitespace-nowrap"
          >
            Find an Event →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101d35] text-white px-6 py-9">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p className="font-black text-xl">
            CAMPUS<span className="text-[#20d6c2]">EVENTS</span>.
          </p>
          <p className="text-sm text-slate-400">
            Bringing campus communities together.
          </p>
          <p className="text-sm text-slate-500">
            © 2026 Campus Events
          </p>
        </div>
      </footer>
    </main>
  );
}