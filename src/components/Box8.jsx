import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Box8() {
  return (
    <div className="box-container">
      <motion.button className="box8-button"
        whileHover={{ // 마우스가 올라갔을때
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }} // 버튼이 탭 됐을때
        onHoverStart={() => console.log('Hover starts')}
        onHoverEnd={() => console.log('Hover End')}
        onClick={() => console.log('Click')}
        >눌러보세요<br />(+ 콘솔창 확인)
      </motion.button>
    </div>
  );
}
