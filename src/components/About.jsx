import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { ServiceCard } from "../components"
import { SectionWrapper } from '../hoc'

const About = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("","",0.1,1)}
                className='mt4 text-secondary text=[17px] max-w-3xl leading-[30px]'
            >
                Hello I'm Professional front-end Web Developer. I have mastered technologies like HTML*, CSS*, BOOTSTRAP, REACT, PHP, MySql. I also have my hands on technologies like JAVASCRIPT, PHP, TAILWINDCSS, PYTHON, JAVA, C, BASH.Turning your dream website into reality is my job. I'm a quick learner of any new technology so, with my this skill I want to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}
export default SectionWrapper(About, "about")