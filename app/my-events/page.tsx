"use client";

import Link from "next/link";
import { events } from "../eventsData";
import { useSavedEvents } from "../SavedEventsContext";

export default function MyEvents() {
  const { savedEventIds, toggleSavedEvent } = useSavedEvents();

  const savedEvents = events.filter((event) =>
    savedEventIds.includes(event.id)
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-[#20d6c2] font-semibold"
        >
          ← Back to Events
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-[#101d35]">
          My Events
        </h1>

        <p className="mt-2 text-gray-600">
          Events you have saved.
        </p>

        {savedEvents.length === 0 ? (
          <p className="mt-10 rounded-xl bg-white p-8 text-center text-gray-500">
            You haven't saved any events yet.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-44 w-full rounded-xl object-cover"
                />

                <p className="mt-4 text-sm font-semibold text-teal-600">
                  {event.category}
                </p>

                <h2 className="mt-2 text-xl font-bold text-[#101d35]">
                  {event.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  {event.date} · {event.venue}
                </p>

                <Link
                  href={`/events/${event.id}`}
                  className="mt-4 block font-semibold text-[#20bfae]"
                >
                  View Details →
                </Link>

                <button
                  onClick={() => toggleSavedEvent(event.id)}
                  className="mt-4 w-full rounded-xl bg-[#101d35] px-4 py-3 text-white"
                >
                  Remove from My Events
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}