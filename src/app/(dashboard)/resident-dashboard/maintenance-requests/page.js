import React from "react";

const MaintenanceRequests = () => {
  const maintenanceRequests = [
    {
      id: 1,
      description: "Leaking faucet in the kitchen",
      status: "Pending",
    },
    {
      id: 2,
      description: "Broken door handle in the living room",
      status: "In Progress",
    },
    {
      id: 3,
      description: "Faulty light fixture in the bathroom",
      status: "Completed",
    },
    // Add more maintenance requests as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Maintenance Requests</h1>
      <div className="grid grid-cols-1 gap-4">
        {maintenanceRequests.map((request) => (
          <div
            key={request.id}
            className="border border-gray-300 p-4 rounded-md"
          >
            <h2 className="text-lg font-semibold mb-2">
              Description: {request.description}
            </h2>
            <p>
              <strong>Status:</strong> {request.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceRequests;
