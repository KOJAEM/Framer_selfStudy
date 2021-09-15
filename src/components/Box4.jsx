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
   stiffness: 700, // 강성 (값이 커질수록 갑작스런 변화가 생김)
   damping: 30,
  //bounce:0.25,
};