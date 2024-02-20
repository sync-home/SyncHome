import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CommunityEvents = () => {
  const initialEvents = [
    {
      id: 1,
      title: "Community BBQ",
      image: "https://i.ibb.co/44vjz74/event.jpg",
      date: "2024-02-15",
      location: "Community Park",
      description:
        "Join us for a fun-filled BBQ event in the community park. There will be food, games, and music for everyone!",
    },
    {
      id: 2,
      title: "Yoga in the Park",
      image: "https://i.ibb.co/JkffBCT/yoga.jpg",
      date: "2024-02-22",
      location: "Community Park",
      description:
        "Start your day with a refreshing yoga session in the serene surroundings of the community park. All levels are welcome!",
    },
    {
      id: 3,
      title: "Movie Night Under the Stars",
      image: "https://i.ibb.co/44vjz74/event.jpg",
      date: "2024-02-29",
      location: "Community Amphitheater",
      description:
        "Bring your blankets and snacks for a cozy movie night under the stars. We'll be screening a family-friendly movie for all to enjoy!",
    },
    {
      id: 4,
      title: "Community BBQ",
      image: "https://i.ibb.co/n3rJjTN/enent2.jpg",
      date: "2024-02-15",
      location: "Community Park",
      description:
        "Join us for a fun-filled BBQ event in the community park. There will be food, games, and music for everyone!",
    },
    {
      id: 5,
      title: "Yoga in the Park",
      image: "https://i.ibb.co/JkffBCT/yoga.jpg",
      date: "2024-02-22",
      location: "Community Park",
      description:
        "Start your day with a refreshing yoga session in the serene surroundings of the community park. All levels are welcome!",
    },
    {
      id: 6,
      title: "Movie Night Under the Stars",
      image: "https://i.ibb.co/n3rJjTN/enent2.jpg",
      date: "2024-02-29",
      location: "Community Amphitheater",
      description:
        "Bring your blankets and snacks for a cozy movie night under the stars. We'll be screening a family-friendly movie for all to enjoy!",
    },
  ];

  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-bold mb-4">Community Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialEvents?.map((event) => (
          <Card key={event.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={event?.image}
                alt="event image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="pt-2"
                >
                  Date: {event.date}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="pt-2"
                >
                  Location: {event.location}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityEvents;
