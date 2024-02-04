"use client";
import { useForm } from "react-hook-form"


const ContactForm = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="bg-white p-10 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div className="flex flex-col">
                        <label className="font-bold uppercase text-[#363636]" htmlFor="name">Name</label>
                        <input className="outline-0 px-3 py-2 rounded-md w-full bg-gray-200" type="text" placeholder="Your name" id="name" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold uppercase text-[#363636]" htmlFor="email">Email</label>
                        <input className="outline-0 px-3 py-2 rounded-md w-full bg-gray-200" type="text" placeholder="Your email" id="email" />
                    </div>
                </div>
                <div className="mt-5">
                    <label className="font-bold uppercase text-[#363636]" htmlFor="message">Message</label>
                    <textarea className="outline-0 px-3 py-2 rounded-md w-full bg-gray-200" name="message" id="message" cols="5" rows="5" placeholder="Your message"></textarea>
                </div>
                <div>
                    <input type="submit" value="SEND REQUEST" className="btn bg-[#4DAC6A] w-full font-bold mt-5 text-white cursor-pointer"/>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;