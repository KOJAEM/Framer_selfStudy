import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from "framer-motion";

export default function Box4() {
    const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
      <div className="box-container">
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
            </div>
        </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};