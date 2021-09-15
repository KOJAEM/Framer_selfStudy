import React from 'react';
import { motion } from 'framer-motion';

export default function Box1() {
    return (
        <div className="box-container">
        <motion.div
            className="box"
            animate={{rotate:360}}
            transition={{
                duration:2,
                repeat:Infinity,
                repeatType:"loop",
            }}
            
            >

        </motion.div>
        <motion.div>
            <svg xmlns="http://www.w3.org/2000/svg" width="750px" height="450px"
            viewBox="-150 0 600 150">
                <motion.circle cx="0" cy="0"r="100" animate={{ cx: [null,300] }}
                transition={{
                    duration:2,
                    repeat:Infinity,
                    repeatType:'reverse',
                    repeatDelay:1,
                }}/>
                </svg> 
        </motion.div>
        </div>
    );
}