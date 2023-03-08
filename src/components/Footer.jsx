import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { socialLinks } from "../constants";

const SocialBtn = () => {
    return (
        <p>Hello world</p>
    )
}

const Footer = () => {
    return (
        <footer className="bg-black-100 text-center text-white">
            <motion.div
                variants={fadeIn('','',0.1,1)}
                className='flex gap-4 items-center justify-center p-5'
            >
                {socialLinks.map((social,index) => (
                    <a 
                        href={social.link} target='_blank' key={index}
                        className="flex items-center bg-secondary hover:bg-white p-1 rounded-full"
                        title={social.name}
                    >
                        <img 
                            src={social.icon}
                            alt={social.name}
                            className="w-6 h-6"
                        />
                    </a>
                ))}
            </motion.div>
            <div
                className="bg-primary h-auto p-3"
            >
                <p
                    className="sm:text-[12px] md:text-[16px] xl:text-[18px] text-white"
                >© 2023 Copyright: Saurabh Yadav</p>
            </div>
        </footer>
    )
}

export default Footer;
