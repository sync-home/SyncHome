import visitorManagementimg from '@/assets/rtm/VisitorManagementimg.png'

import Image from "next/image";

const VisitorManagement = () => {
    return (
        <div>
             <h3 className='text-2xl font-semibold text-red-500'>Better Security and Access Control</h3>
            <p className='my-5 text-justify'>System administrators can digitally grant, revoke or remove access to visitors. Integrating visitor management systems with existing security infrastructure, such as access control systems, CCTV cameras or biometric facial recognition scanners, enhances overall security measures and ensures only authorised individuals enter restricted areas. In the event of an emergency or evacuation, the system aids in ensuring an accurate headcount and efficient evacuation procedures. A visitor management system can effectively manage and monitor visitor access, minimising potential security breaches and unauthorised entries.</p>
            <div className='max-w-3xl mx-auto '>
             <div className="w-full ">
                <figure><Image src={visitorManagementimg} className="w-9/12 mx-auto" alt="Shoes" /></figure>
            </div>
            <h3 className='text-2xl font-semibold text-red-500'>Best Visitor Management In Our System</h3>
            <div className='space-y-10 text-justify'>
                <p>
                Brihaspathi Technologies Hyderabad' new and innovative Visitor Management System with features like notifications, capturing visitor image, instantly printing badges, and live monitoring has been transforming your reception into an e-reception. We offer the most reliable, competitively priced, value-for-money and the best visitor management system software in Hyderabad.
                </p>
                <p>
                Brihaspathi Technologies Hyderabad’ innovative and the best Visitor Management System (VMS) in Hyderabad comes with rich features like notifications, capturing visitor images, instantly printing badges, and live monitoring. This means to transform traditional receptions into e-receptions. Here's how these features contribute to the transformation:
                </p>
                <p><span>Notifications:</span> The VMS sends real-time notifications to hosts or employees when their visitors arrive. This feature eliminates the need for receptionists or security personnel to make phone calls or physically inform employees about visitor arrivals. Notifications can be sent via email, text messages, or through dedicated communication platforms, ensuring instant and efficient communication.
                    </p>
                <p><span>Capturing Visitor Images:</span> The VMS sends real-time notifications to hosts or employees when their visitors arrive. This feature eliminates the need for receptionists or security personnel to make phone calls or physically inform employees about visitor arrivals. Notifications can be sent via email, text messages, or through dedicated communication platforms, ensuring instant and efficient communication.
                    </p>

            </div>
            
        </div>
        </div>
    );
};

export default VisitorManagement;