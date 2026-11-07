"use client";

import { useEffect, useState } from "react";

export default function Countdown({ date }: { date: string }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date(`${date}T00:00:00`).getTime();
      const difference = eventDate - Date.now();

      if (difference <= 0) {
        setTimeLeft("This event has started or passed.");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      setTimeLeft(`${days} days ${hours} hours remaining`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="mt-6 rounded-xl bg-teal-50 p-5">
      <p className="font-semibold text-[#101d35]">Event Countdown</p>
      <p className="mt-2 text-teal-700 font-bold">{timeLeft}</p>
    </div>
  );
}