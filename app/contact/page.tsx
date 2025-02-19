"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs, { sendForm } from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";


// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+(520)-551-5369",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "anthonyp.fatato@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Arizona, USA",
    }
];



const Contact = () => {
    // State for form feedback (success or error message)
    const [isSending, setIsSending] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    // Form submission function
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  // Prevent the page from reloading
        setIsSending(true);
        setFeedbackMessage("");

        const form = e.target as HTMLFormElement; // Explicitly casting the target as HTMLFormElement

        // Send email via EmailJS
        sendForm("service_hqc3bt3", "template_zgihizh", form, "yZXMHZdHds9TXUK_9")
            .then(
                () => {
                    setIsSending(false);
                    setFeedbackMessage("Message sent successfully!");
                },
                () => {
                    setIsSending(false);
                    setFeedbackMessage("Something went wrong, please try again.");
                }
            );

        // Reset the form after submission
        form.reset();
    };

    return <motion.section initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
    >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                        <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                        <p className="text-white/60">
                        I’d love to hear from you! Whether you have questions about my services or need expert assistance with software testing, penetration testing, digital marketing, or IT support, feel free to reach out. I'm here to help you achieve your goals and provide tailored solutions for your business needs. Simply fill out the form below, and I'll get back to you as soon as possible.                        </p>
                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" name="firstname" placeholder="First Name" />
                            <Input type="lastname" name="lastname" placeholder="Last Name" />
                            <Input type="email" name="email" placeholder="Email" />
                            <Input type="phone" name="phone" placeholder="Phone #" />
                            
                        </div>
                        {/* text-area */}
                        <Textarea
                            className="h-[200px]"
                            placeholder="Give me a description about your inquiries."
                            name="message"
                        />
                        {/* button */}
                        <Button size="lg" className="max-w-40">Send Message</Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item, index) => {
                            return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div>
                                        <p>{item.title}</p>
                                        <h3>{item.description}</h3>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </motion.section>

};

export default Contact;
