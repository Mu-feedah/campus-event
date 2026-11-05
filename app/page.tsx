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
    description: "Explore technology, innovation and the future of digital solutions.",
    emoji: "💻",
    color: "from-violet-600 to-indigo-800",
  },
  {
    id: 2,
    title: "Campus Music Festival",
    category: "Entertainment",
    date: "NOV 18",
    time: "4:00 PM",
    venue: "University Sports Ground",
    description: "An exciting evening of music, performances and entertainment.",
    emoji: "🎵",
    color: "from-pink-500 to-rose-700",
  },
  {
    id: 3,
    title: "Career Development Workshop",
    category: "Workshop",
    date: "NOV 22",
    time: "11:00 AM",
    venue: "Faculty Conference Hall",
    description: "Build professional skills and prepare for your future career.",
    emoji: "🎓",
    color: "from-emerald-500 to-teal-800",
  },
];

export default function Home() {
  const [registered, setRegistered] = useState<number[]>([]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">
            Campus<span className="text-pink-500">Events</span>
          </h1>
          <span className="text-sm text-slate-500">
            Discover. Connect. Experience.
          </span>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <p className="text-indigo-600 font-semibold mb-3">
            YOUR CAMPUS, YOUR COMMUNITY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Discover what's happening on campus.
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl">
            Find exciting events, meet new people and never miss an
            opportunity to be part of something amazing.
          </p>
        </div>

        <div className="flex justify-between items-center mb-7">
          <div>
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
            <p className="text-slate-500 text-sm mt-1">
              Explore events happening around your campus.
            </p>
          </div>

          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
            {events.length} Events
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${event.color} flex items-center justify-center relative`}
              >
                <span className="text-7xl">{event.emoji}</span>

                <span className="absolute top-4 left-4 bg-white text-indigo-700 text-xs font-bold px-3 py-2 rounded-full">
                  {event.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-indigo-700 font-bold">
                    {event.date}
                  </span>
                  <span className="text-sm text-slate-500">
                    {event.time}
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-3">
                  {event.title}
                </h4>

                <p className="text-slate-500 text-sm leading-6 mb-5">
                  {event.description}
                </p>

                <p className="text-sm text-slate-600 mb-5">
                  📍 {event.venue}
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
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-emerald-600 transition"
                >
                  {registered.includes(event.id)
                    ? "Interest Registered ✓"
                    : "Register Interest"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}