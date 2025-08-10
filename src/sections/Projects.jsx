import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FolderCheck,
  Loader2,
  Star,
  Users,
} from "lucide-react";

// Hook to animate count up
function useCountUp(target, duration = 2000, startOn = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOn) {
      setCount(0);
      return;
    }

    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    let timerId;

    const step = () => {
      start += 1;
      setCount(start);
      if (start < target) {
        timerId = setTimeout(step, stepTime);
      }
    };

    step();
    return () => clearTimeout(timerId);
  }, [target, duration, startOn]);

  return count;
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const pastProjectsTarget = 70;
  const ongoingProjectsTarget = 15;
  const userRatesTarget = 100;
  const staffWorkingTarget = 7;

  const pastProjectsCount = useCountUp(pastProjectsTarget, 2000, inView);
  const ongoingProjectsCount = useCountUp(ongoingProjectsTarget, 2000, inView);
  const userRatesCount = useCountUp(userRatesTarget, 2500, inView);
  const staffWorkingCount = useCountUp(staffWorkingTarget, 2000, inView);

  const averageRating = 4.9;

  return (
    <section
      ref={ref}
      className="bg-black py-20 px-6 sm:px-12 lg:px-24 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-white">
          Our Projects & Stats
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-14 text-white">
          Delivering high-quality projects with a committed team. Here’s an
          overview of our accomplishments and ongoing work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <StatCard
            label="Past Projects Done"
            count={pastProjectsCount}
            icon={<FolderCheck className="w-10 h-10 text-indigo-500" />}
          />
          <StatCard
            label="Ongoing Projects"
            count={ongoingProjectsCount}
            icon={
              <Loader2 className="w-10 h-10 text-yellow-500 animate-spin" />
            }
          />
          <StatCard
            label="User Ratings Count"
            count={userRatesCount}
            suffix="+"
            icon={<Star className="w-10 h-10 text-amber-500" />}
          />
          <RatingCard average={averageRating} />
        </div>
      </div>
    </section>
  );
}

// Stat card
function StatCard({ label, count, suffix = "", icon }) {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <p className="text-4xl sm:text-5xl font-bold text-indigo-600 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-base font-medium text-gray-700 mt-2">{label}</p>
    </div>
  );
}

// Rating card with larger stars
function RatingCard({ average }) {
  const fullStars = Math.floor(average); // 4
  const hasPartialStar = average % 1 !== 0; // true
  const emptyStars = 5 - fullStars - (hasPartialStar ? 1 : 0);

  const starSize = "w-8 h-8"; // increased size

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center flex flex-col items-center">
      <div className="mb-4">
        <Users className="w-10 h-10 text-green-500" />
      </div>

      <div className="flex items-center justify-center space-x-1 mb-3">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={`${starSize} text-amber-500 fill-amber-500`} />
        ))}

        {/* Partially filled star */}
        {hasPartialStar && (
          <div className={`relative ${starSize}`}>
            <Star className={`${starSize} text-gray-300`} />
            <Star
              className={`${starSize} text-amber-500 fill-amber-500 absolute top-0 left-0`}
              style={{
                clipPath: `inset(0 ${(1 - (average % 1)) * 100}% 0 0)`,
              }}
            />
          </div>
        )}

        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${starSize} text-gray-300`} />
        ))}
      </div>

      <p className="text-xl font-bold text-indigo-600">
        {average.toFixed(1)} / 5.0
      </p>
      <p className="text-sm text-gray-700 mt-1">Average User Rating</p>
    </div>
  );
}
