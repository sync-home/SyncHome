import EnergyConsumptionChart from "@/components/Dashboard/ResidentDashboard/EnergyConsumptionChart/EnergyConsumptionChart";
import React from "react";

const EnergyUsage = () => {
  const energyConsumptionData = [
    { name: "Last 24 Hours", consumption: 20 },
    { name: "Last 7 Days", consumption: 500 },
    { name: "Last 30 Days", consumption: 1200 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Used Energy</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full mb-5">
        <div style={{ border: "1px solid #ccc", borderRadius: "10px" }}>
          <div style={{ borderBottom: "1px solid #ccc" }} className="px-5 py-3">
            <h4 className="text-xl font-semibold text-[#363636]">
              Energy Consumption
            </h4>
          </div>
          <div className="p-5 flex lg:flex-row flex-col gap-5 justify-between">
            <div className="text-center">
              <p className="text-[#363636]">Last 24 Hours</p>
              <h4 className="text-[#363636] font-semibold text-xl mt-2">
                20 kWh
              </h4>
            </div>
            <div className="text-center">
              <p className="text-[#363636]">Last 7 Days</p>
              <h4 className="text-[#363636] font-semibold text-xl mt-2">
                500 kWh
              </h4>
            </div>
            <div className="text-center">
              <p className="text-[#363636]">Last 30 Days</p>
              <h4 className="text-[#363636] font-semibold text-xl mt-2">
                1200 kWh
              </h4>
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid #ccc", borderRadius: "10px" }}>
          <div style={{ borderBottom: "1px solid #ccc" }} className="px-5 py-3">
            <h4 className="text-xl font-semibold text-[#363636]">
              Energy Consumption Chart
            </h4>
          </div>
          <div className="p-5">
            <EnergyConsumptionChart
              energyConsumptionData={energyConsumptionData}
            ></EnergyConsumptionChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyUsage;
