
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaExclamationTriangle, FaDollarSign, FaWrench } from "react-icons/fa";
import EnergyGraph from "@/components/Dashboard/AdminDashboard/EnergyAnalytics/EnergyGraph";

const Energy = () => {
    const energy_alerts = [
          {
            "id": 1,
            "flat_number": 101,
            "alert_type": "High Energy Consumption"
          },
          {
            "id": 2,
            "flat_number": 102,
            "alert_type": "Spike Detection"
          },
          {
            "id": 3,
            "flat_number": 103,
            "alert_type": "Billing Alert"
          },
          {
            "id": 4,
            "flat_number": 104,
            "alert_type": "Maintenance Required"
          },
          {
            "id": 5,
            "flat_number": 105,
            "alert_type": "High Energy Consumption"
          },
          {
            "id": 6,
            "flat_number": 106,
            "alert_type": "Spike Detection"
          },
          {
            "id": 7,
            "flat_number": 107,
            "alert_type": "Billing Alert"
          },
          {
            "id": 8,
            "flat_number": 108,
            "alert_type": "Maintenance Required"
          },
          {
            "id": 9,
            "flat_number": 109,
            "alert_type": "High Energy Consumption"
          },
          {
            "id": 10,
            "flat_number": 110,
            "alert_type": "Spike Detection"
          }
        ];
      

    const energyConsumption = { 'today': 600, 'seven': 4261, 'thirty': 19653 };
    const alertType = { 'hec': 24, 'sd': 5, 'mr': 9, 'ba': 8 };
    // const energyConsumptionByFlat = {'lighting': 1.5, 'hvac': 4, 'refrigerators': 3, 'freezers': 2.2, 'electronic': 0.5, 'automatic_doors': 2.5 }

    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="inline-block px-10 py-3 rounded-md text-2xl font-extrabold text-[#363636] uppercase font-catamaran" style={{border: '1px solid #ccc'}}>Energy Usage Analytics</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full mb-5">
                <div style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                    <div style={{ borderBottom: '1px solid #ccc' }} className="px-5 py-3">
                        <h4 className="text-xl font-semibold text-[#363636]">Energy Consumption</h4>
                    </div>
                    <div className="p-5 flex lg:flex-row flex-col gap-5 justify-between">
                        <div className="text-center">
                            <p className="text-[#363636]">Last 24 Hours</p>
                            <h4 className="text-[#363636] font-semibold text-xl mt-2">{energyConsumption.today} kWh</h4>
                        </div>
                        <div className="text-center">
                            <p className="text-[#363636]">Last 7 Days</p>
                            <h4 className="text-[#363636] font-semibold text-xl mt-2">{energyConsumption.seven} kWh</h4>
                        </div>
                        <div className="text-center">
                            <p className="text-[#363636]">Last 30 Days</p>
                            <h4 className="text-[#363636] font-semibold text-xl mt-2">{energyConsumption.thirty} kWh</h4>
                        </div>
                    </div>
                </div>
                <div style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                    <div style={{ borderBottom: '1px solid #ccc' }} className="px-5 py-3">
                        <h4 className="text-xl font-semibold text-[#363636]">Alert Type</h4>
                    </div>
                    <div className="p-5 flex lg:flex-row flex-col gap-5 justify-between">
                        <div className="text-center">
                            <p className="text-[#363636]">High Energy <br />Consumption</p>
                            <h4 className="text-[#363636] font-semibold text-xl mt-2">{alertType.hec}</h4>
                        </div>
                        <div className="text-center">
                            <p className="text-[#363636]">Spike <br />Detection</p>
                            <h4 className="text-[#363636] font-semibold text-xl mt-2">{alertType.sd}</h4>
                        </div>
                        <div className="text-center">
                            <p className="text-[#363636]">Billing <br />Alert</p>
                            <h4 className="text-[#363636] font-semibold text-xl mt-2">{alertType.ba}</h4>
                        </div>
                        <div className="text-center">
                            <p className="text-[#363636]">Maintenance <br />Required</p>
                            <h4 className="text-[#363636] font-semibold text-xl mt-2">{alertType.mr}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
                <div className="lg:col-span-3" style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                    <div style={{ borderBottom: '1px solid #ccc' }} className="flex lg:flex-row flex-col gap-5 justify-between px-5 py-3">
                        <h4 className="text-xl font-semibold text-[#363636]">Energy Consumption by Flat</h4>
                        <span style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '5px' }}>
                            <select className="outline-0">
                                <option value="7d">Last 7 Days</option>
                                <option value="30d">Last 30 Days</option>
                                <option value="24h">Last 24 Hours</option>
                            </select>
                        </span>
                    </div>
                    <div className="py-5">
                        <EnergyGraph />
                    </div>
                </div>
                <div className="lg:col-span-2" style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                    <div style={{ borderBottom: '1px solid #ccc' }} className="px-5 py-3">
                        <h4 className="text-xl font-semibold text-[#363636]">Alerts</h4>
                    </div>
                    <div className="p-5">
                        <div className="flex gap-5 bg-gray-200 px-5 py-2 mb-2">
                            <h5>SL</h5>
                            <h5>Flat Number</h5>
                            <h5>Alert Type</h5>
                        </div>
                        {
                            energy_alerts.map((alert, idx) => (<>
                                <div key={idx} className="flex gap-14 text-sm pl-5 py-1">
                                    <span className="text-center">{idx+1}.</span>
                                    <span className="text-center">{alert.flat_number}</span>
                                    <span>{
                                    alert.alert_type == 'High Energy Consumption' ? <span className="text-red-500 flex items-center gap-1"><IoAlertCircleOutline/> {alert.alert_type}</span> :
                                    alert.alert_type == 'Spike Detection' ? <span className="text-[#0088FE] flex items-center gap-1"><FaExclamationTriangle/>{alert.alert_type}</span> :
                                    alert.alert_type == 'Billing Alert' ? <span className="text-[#00C49F] flex items-center gap-1"><FaDollarSign/>{alert.alert_type}</span> :
                                    alert.alert_type == 'Maintenance Required' ? <span className="text-[#ff4af0] flex items-center gap-1"><FaWrench/>{alert.alert_type}</span> : ''
                                    }</span>
                                </div>
                                <hr/>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Energy;