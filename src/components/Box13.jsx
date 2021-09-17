import React, { useRef } from 'react'
import { motion } from "framer-motion"

export default function Box13() {
  const constraintsRef = useRef(null);
  
    return (
      <div className="box-container">
        <motion.div className="box13-drag-area" ref={constraintsRef} />
        <motion.div className="box13-div"
        drag 
        dragConstraints={constraintsRef} />
      </div>
    );
}
  