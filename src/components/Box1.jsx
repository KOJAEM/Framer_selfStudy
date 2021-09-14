import React from 'react';
import { motion } from 'framer-motion';

export default function Box1() {
    return (
        <>
        <motion.div
            className="box"
            animate={{rotate:360}}
            transition={{duration:1}}
            >

        </motion.div>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="750px" height="450px"
        viewBox="-150 0 600 150">
             <motion.circle cx="0" cy="0"r="100" animate={{ cx: [null,300] }}/>
             {/* 첫번째 코드를 null 로 하면 애니메이션이 더 부드러워지는 효과가 있음.*/}
        </svg>


        
        </>
    );
}