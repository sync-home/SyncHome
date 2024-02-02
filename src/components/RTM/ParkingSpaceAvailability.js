import parkingcar from "@/assets/rtm/carparking.png";
import parking1 from "@/assets/rtm/park1.png";
import fuel from "@/assets/rtm/fuel.png";
import safety from "@/assets/rtm/safety.png";
import parkingviolation from "@/assets/rtm/parkingviolation.png";


import Image from "next/image";


const ParkingSpaceAvailability = () => {
    return (
        <div>
            <div className="w-full mx-auto">
                <figure><Image src={parkingcar} className="w-full" alt="Shoes" /></figure>
            </div>
            <div className="grid grid-cols-2 gap-10 pt-10 text-justify">
                <div class="card  bg-base-100 bordered rounded">
                    <div class="card-body">
                        <div class="avatar w-full mx-auto">
                            <div class="w-24 mask mask-hexagon">
                                <Image src={parking1} height={100} width={100} />
                            </div>
                        </div>
                        <h2 class="card-title">Reduced Traffic Congestion!</h2>
                        <p>A real-time parking availability system is an eco-friendly solution as it can help reduce fuel consumption.
                            When drivers reach the right parking spot without driving extra kilometers to find one, they consume less fuel.
                            This smart parking solution saves time and money and improves the overall driving experience. It also helps reduce greenhouse gas emissions and other harmful pollutants.

                        </p>
                    </div>
                </div>
                <div class="card  bg-base-100 bordered rounded">
                    <div class="card-body">
                        <div class="avatar w-full mx-auto">
                            <div class="w-24 mask mask-hexagon">
                                <Image src={fuel} height={100} width={100} />
                            </div>
                        </div>
                        <h2 class="card-title">Minimizes Fuel Consumption</h2>
                        <p>A real-time parking availability system provides real-time information about the available parking spots.
                            It combines the data generated by smart navigation systems, cameras, predictive analytics and other transportation systems to deliver accurate information to drivers finding a parking space.
                            With this information, the drivers can make informed decisions about parking the vehicle. This reduces the number of cars on the road and lowers the chances of traffic congestion.

                        </p>
                    </div>
                </div>
                <div class="card  bg-base-100 bordered rounded">
                    <div class="card-body">
                        <div class="avatar w-full mx-auto">
                            <div class="w-24 mask mask-hexagon">
                                <Image src={parkingviolation} height={100} width={100} />
                            </div>
                        </div>
                        <h2 class="card-title">Reduced Parking Violations</h2>
                        <p>A parking violation is a major problem law enforcement agencies face in a densely populated urban city. With a real-time parking availability system, drivers receive accurate information about the available parking spaces. Hence, they are less likely to park illegally.
                            This saves time and effort for the parking lot attendants and law enforcement agencies.
                            It also increases compliance with traffic rules and regulations.

                        </p>
                    </div>
                </div>
                <div class="card  bg-base-100 bordered rounded">
                    <div class="card-body">
                        <div class="avatar w-full mx-auto">
                            <div class="w-24 mask mask-hexagon">
                                <Image src={safety} height={100} width={100} />
                            </div>
                        </div>
                        <h2 class="card-title">Improved Safety</h2>
                        <p>Smart city parking management solutions, such as real-time traffic availability systems, have the potential to benefit the urban transportation network significantly.
                            Such smart solutions help government agencies and parking lot managers to streamline their operations. They can focus more on upgrading the overall parking experience for drivers. These solutions can make urban areas more efficient, livable and sustainable.
                            As technology continues to evolve, such systems are likely to become more sophisticated, further improving the benefits of the urban transportation network.

                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full my-10">
                {/* <iframe className="w-full"
                    src="https://youtu.be/n0oiNNbC1bE?si=fkwB2p0cyrDrqnd3"
                    frameborder="0"
                    allowfullscreen
                /> */}
                {/* <iframe className="w-full" src="https://www.youtube.com/embed/n0oiNNbC1bE?si=gjAllS1uDoIIcnir" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <video className="w-full h-[300px]" controls  muted preload="none">
                    <source src="../../assets/rtm/parkingvideo.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srclang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    );
};

export default ParkingSpaceAvailability;