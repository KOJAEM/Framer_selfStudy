import React, {useState} from 'react'
import { motion } from "framer-motion"

export default function Box15() {

  
    return (
      <div className="box-container">
        <motion.div
          className="box15-div"
          animate={{
              scale: [1, 1.4, 1.4, 1, 1], // 배열값을 줄 수도 있음!
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              rotate: [0, 0, 270, 270, 0]
          }}
          
          transition={{
              duration: 2, // 지속시간 (각 애니메이션들이 총 몇초에 걸쳐 진행될건지)
              repeat: Infinity,
              repeatDelay: 1,   
          }}
          
          >
        </motion.div>
      </div>
    );
}
  