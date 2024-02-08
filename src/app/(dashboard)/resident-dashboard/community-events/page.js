import React from "react";

const CommunityEvents = () => {
  const initialEvents = [
    {
      id: 1,
      title: "Community BBQ",
      date: "2024-02-15",
      location: "Community Park",
      description:
        "Join us for a fun-filled BBQ event in the community park. There will be food, games, and music for everyone!",
    },
    {
      id: 2,
      title: "Yoga in the Park",
      date: "2024-02-22",
      location: "Community Park",
      description:
        "Start your day with a refreshing yoga session in the serene surroundings of the community park. All levels are welcome!",
    },
    {
      id: 3,
      title: "Movie Night Under the Stars",
      date: "2024-02-29",
      location: "Community Amphitheater",
      description:
        "Bring your blankets and snacks for a cozy movie night under the stars. We'll be screening a family-friendly movie for all to enjoy!",
    },
    // Add more events as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Community Events</h1>

      <div className="grid grid-cols-1 gap-6">
        {initialEvents?.map((event) => (
          <div key={event.id} className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
            <p className="mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityEvents;
