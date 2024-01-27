import GoogleMaps from '@/components/GoogleMaps/GoogleMaps';
import Link from 'next/link';
import React from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ContactForm from '@/components/ContactForm/ContactForm';
import contactBg from '@/assets/contact-us.jpg';

const Contact = () => {
    return (
        <div>
            <div className="text-center bg-[#0A1D56] text-white py-16">
                <h2 className="text-5xl uppercase font-extrabold mb-5">Contact us</h2>
                <p className="font-semibold"><Link href="/">Home</Link> / Contact us</p>
            </div>

            {/* HOW TO REACH US */}

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-0'>
                <div className='min-h-96'>
                    <GoogleMaps></GoogleMaps>
                </div>
                <div className='my-20 lg:mr-20 lg:ml-10 mx-5'>
                    <h2 className="text-5xl uppercase font-extrabold mb-5 text-[#363636]">How to reach us</h2>
                    <p>Connecting with Our Team for Support, Inquiries, and Collaborations. Get in Touch Easily and Efficiently.</p>
                    <h2 className='text-3xl bg-gray-400 py-5 text-white pl-5 my-10 font-bold'>Sync Home Dhaka</h2>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 mt-10'>
                        <div className='flex lg:flex-row flex-col gap-5 lg:text-left text-center'>
                            <div className='bg-[#4DAC6A] lg:mx-0 mx-auto h-20 w-20 text-white rounded-full p-5'>
                                <BusinessIcon className='text-4xl' />
                            </div>
                            <div>
                                <h4 className='text-3xl text-[#363636] font-bold font-catamaran'>Address</h4>
                                <p>Mirpur-1, Dhaka-1216, Bangladesh.</p>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-5 lg:text-left text-center'>
                            <div className='bg-[#4DAC6A] h-20 w-20 lg:mx-0 mx-auto text-white rounded-full p-5'>
                                <PhoneEnabledIcon className='text-4xl' />
                            </div>
                            <div>
                                <h4 className='text-3xl text-[#363636] font-bold font-catamaran'>Contact details</h4>
                                <p>Mirpur-1, Dhaka-1216, Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* GET IN TOUCH */}
            <div style={{background: `url(${contactBg.src}) no-repeat center/cover`}}>
                <div className='bg-[rgba(77,172,106,0.8)] py-28 lg:px-0 px-5'>
                    <div className='max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 items-center gap-20'>
                        <div className='text-white'>
                            <h2 className="text-5xl uppercase font-extrabold mb-5">Get in Touch</h2>
                            <p>Reach Out for Inquiries, Support, Collaborations, or Just to Say Hello! We're Here to Hear from You.</p>
                        </div>
                        <div>
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;