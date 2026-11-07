import { events } from "../../eventsData";
import Countdown from "./countdown";

export default async function EventDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event = events.find((item) => item.id.toString() === id);

  if (!event) {
    return <div className="p-10 text-center">Event not found.</div>;
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-72 md:h-96 object-cover"
        />

        <div className="p-6 md:p-10">
          <span className="text-sm font-semibold text-teal-600">
            {event.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#101d35] mt-3">
            {event.title}
          </h1>

          <p className="text-slate-600 mt-6 leading-7">
            {event.description}
          </p>

          <div className="mt-8 space-y-4 text-slate-700">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>

          <a
            href="/"
            className="inline-block mt-8 bg-[#101d35] text-white px-6 py-3 rounded-lg hover:bg-[#20d6c2] transition"
          >
            
            Back to Events
             <Countdown date={event.sortDate} />
          </a>
        </div>
      </div>
    </main>
  );
}