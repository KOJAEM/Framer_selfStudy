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
            viewBox="-150 0 800 150">
                <motion.circle cx="0" cy="0"r="100" animate={{ cx: [null,500] }}
                transition={{
                    duration:2,
                    repeat:Infinity,
                    repeatType:'reverse',
                    repeatDelay:1,
                    ease: 'circInOut', // 애니메이션 효과
                    from : -50, // 어디부터 시작할건지 (값 바꿔보면 바로 이해감)

                }}/>
                </svg> 
        </motion.div>
        </div>
    );
}