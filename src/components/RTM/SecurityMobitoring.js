import Image from 'next/image';
import alarm from "@/assets/rtm/alarm.jpg"
import cable from "@/assets/rtm/cable.jpg"
import camerasensor from "@/assets/rtm/camerasensor.jpg"
import fence from "@/assets/rtm/fence.jpg"
import microwabe from "@/assets/rtm/microwabe.jpg"
import accessories from "@/assets/rtm/accessories.jpg"
import smarthome from "@/assets/rtm/smarthome.webp"

const SecurityMobitoring = () => {
    return (
        <div>
            <h3 className='text-2xl font-semibold text-red-500'>Security system</h3>
            <p className='my-5 text-justify'>Our industry-leading outdoor perimeter security systems for the protection of critical infrastructure, high value assets and human life.
                These technologies fortify many of the world’s highest security sites and perform reliably in harsh environments.</p>

            <div className='grid grid-cols-2 border border-b-black pb-10'>
                <div class="card flex flex-row bg-base-100 l">
                    <div>
                        <figure><Image src={alarm} height={300} width={500} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Alarm Monitoring & Control Systems!</h2>
                        <p className='text-justify'>Advanced security management systems that monitor, display
                            and control a facility’s complete perimeter security program.</p>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div class="card flex flex-row bg-base-100 ">
                    <div>
                        <figure><Image src={camerasensor} height={300} width={500} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Infrared and Dual Tech Sensors!</h2>
                        <p className='text-justify'>High-performance stand-alone active / passive infrared and motion sensors designed for outdoor intrusion detection.</p>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div class="card flex flex-row bg-base-100 ">
                    <div>
                        <figure><Image src={cable} height={300} width={500} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Buried Cable Detection Systems!</h2>
                        <p className='text-justify'>Terrain-following volumetric sensors that locate intruders to within 3 meters for covert protection applications.</p>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div class="card flex flex-row bg-base-100 ">
                    <div>
                        <figure><Image src={fence} height={300} width={500} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Fence Detection Systems!</h2>
                        <p className='text-justify'>High-security smart sensors that reliably pinpoint cut or climb attempts to within 1 meter while ignoring harmless disturbances.</p>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div class="card flex flex-row bg-base-100 ">
                    <div>
                        <figure><Image src={microwabe} height={300} width={500} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Microwave Sensors!</h2>
                        <p className='text-justify'>Flexible, reliable microwave links and transceivers
                            for the protection of open areas, gates or entryways and rooftop or wall applications.</p>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div class="card flex flex-row bg-base-100 ">
                    <div>
                        <figure><Image src={accessories} height={300} width={500} alt="Shoes" /></figure>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Accessories!</h2>
                        <p className='text-justify'>Southwest Microwave offers a complete range of accessories to support our perimeter security systems.</p>
                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <hr/>
            <div className='flex flex-row-reverse justify-between items-center pt-10 gap-8'>
                <div className='w-6/12' >
                    <h3 className='text-2xl font-semibold text-red-500 '>Our Commitment Our Security</h3>
                    <p className='my-5 text-justify '>Our goal of 100% equipment reliability is backed by a world-class manufacturing infrastructure. Southwest Microwave perimeter security products undergo rigorous testing, are certified by regulatory agencies worldwide, and are manufactured to meet ISO 9001:2015 quality management standards. We have extensive performance testing initiatives at hot- and cold-weather sensor test ranges in Arizona, USA and Worcestershire, UK.</p>
                </div>
                <div className='w-6/12'>
                    <figure><Image src={smarthome} height={600} width={600} alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default SecurityMobitoring;