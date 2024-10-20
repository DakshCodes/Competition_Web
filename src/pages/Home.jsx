import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
function Home() {

    const [dots, setDots] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
        }, 400); // Adjust the interval duration as needed

        return () => clearInterval(intervalId);
    }, []);



    return (
        <>
            <header className="relative  flex flex-col items-center  pt-[450px] text-xl lg:mb-52" id="hero">
                <div className="" >
                    <p className="font2 absolute left-1/2 top-[0%] z-50 w-max -translate-x-1/2 rounded-xl border border-b-[#000] border-[#667085] bg-dark-violet px-10 py-2 font-font-cartograph-cf-demi-bold text-2xl uppercase">11,12</p>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="transition-colors duration-300 absolute left-1/2 top-[9%] w-max -translate-x-1/2 z-50 font1  text-center text-[2vw] uppercase">January</motion.span>
                </div>
                <h1 className="font1 relative z-50 text-center text-[3vw] uppercase flex gap-10">
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                        viewport={{ once: true }}
                        transition={{ delay: 2 }}
                        className="transition-colors duration-300"> Future</motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.5 }}
                        className="transition-colors duration-300"> into </motion.span>
                    <motion.span
                        initial={{ color: "#475467" }}
                        whileInView={{ color: "#fff" }}
                        viewport={{ once: true }}
                        transition={{ delay: 3 }}
                        className="transition-colors duration-300">Robotics</motion.span>
                </h1>
            </header>
        </>
    )
}
export default Home
