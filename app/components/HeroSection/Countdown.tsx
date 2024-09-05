"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  deadline: string; // e.g., "2024-09-07T00:00:00"
}

const Countdown: React.FC<CountdownProps> = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [mounted]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);
  if (!mounted) return <div>Loading...</div>;
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold text-red-500 mb-2">USE "BIRTHDAY"</div>
      <div className="text-sm mb-4">
        Lifetime under 5K as it's Striver's birthday weekend!
      </div>
      <div
        suppressHydrationWarning={true}
        className="flex space-x-4 text-center"
      >
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{timeLeft.days} :</span>
          <span className="text-xs uppercase">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{timeLeft.hours} :</span>
          <span className="text-xs uppercase">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{timeLeft.minutes} :</span>
          <span className="text-xs uppercase">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
          <span className="text-xs uppercase">Seconds</span>
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Click Here
      </button>
    </div>
  );
};

export default Countdown;
