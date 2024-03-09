'use client'

import React from "react";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useAxiosPublic from "@/Hooks/useAxiosPublic";

const CommunityEvents = () => {
  const axiosPublic = useAxiosPublic()
  const { data: events = [], refetch, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/events`);
      return res.data;
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <Typography variant="h6" gutterBottom className="pb-3">
        Community Events
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <Typography variant="body1">No running events found!</Typography>
        ) : (
          events.map((event) => (
            <Card key={event.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={event.image}
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
          ))
        )}
      </div>
    </div>
  );
};

export default CommunityEvents;
