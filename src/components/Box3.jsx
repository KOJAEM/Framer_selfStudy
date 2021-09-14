import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from "framer-motion";

export default function Box3() {
    const controls = useAnimation()

useEffect(() => {
  controls.start(i => ({
    opacity: 0,
    x: 100,
    transition: { delay: i * 0.3 },
  }))
}, [])

return (
    <div className="box-container">
        <ul>
            <motion.li custom={0} animate={controls} />
            <motion.li custom={1} animate={controls} />
            <motion.li custom={2} animate={controls} />
        </ul>
  </div>
)
}