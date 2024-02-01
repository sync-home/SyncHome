import EnergyGraph from "@/components/AdminDashboard/EnergyAnalytics/EnergyGraph";


const Energy = () => {

    // const energyConsumption = {'24h': 600, '7d': 4261, '30d': 19653};
    // const alertTyle = {'high_energy_consumption': 24, 'spike_detection': 5, 'maintenance_required': 9};
    // const energyConsumptionByFlat = {'lighting': 1.5, 'hvac': 4, 'refrigerators': 3, 'freezers': 2.2, 'electronic': 0.5, 'automatic_doors': 2.5 }

    return (
        <div>
            <div style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                <div style={{ borderBottom: '1px solid #ccc' }} className="flex justify-between px-5 py-3">
                    <h4 className="text-xl font-semibold text-[#363636]">Energy Consumption by Flat</h4>
                    <span style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '5px' }}>Last 7 Days</span>
                </div>
                <div className="p-5">
                    <EnergyGraph></EnergyGraph>
                </div>
            </div>
        </div>
    );
};

export default Energy;