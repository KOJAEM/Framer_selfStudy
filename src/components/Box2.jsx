import React from 'react';
import { motion } from 'framer-motion';

export default function Box2() {
    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },

        hidden: { 
            opacity: 0,
            transition: {
                when:"afterParents",
            }
        },
        
      }
      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
    return (
        <div className="box-container">
            <motion.ul
                initial="hidden"
                animate="visible"
                transition={{duration:10}}
                variants={list}
            >
                <motion.li variants={item} />
                <motion.li variants={item} />
                <motion.li variants={item} />
            </motion.ul>
        </div>
    );
}