import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Box7() {
    const[selected, setSelected] = useState(colors[0]);

  return (
    <div className="box-container">
      <AnimateSharedLayout>
          <ul className="box7-ul">
              {colors.map((color) => (
                  <Item
                    key={color}
                    color={color}
                    isSelected={selected === color}
                    onClick={() => setSelected(color)}
              />
              ))}
              
          </ul>
      </AnimateSharedLayout>
    </div>
  );
}

const Item = ({color, isSelected, onClick}) => {
    return (
        <li className="box7-item" onClick={onClick} style={{backgroundColor: color}}>
             {isSelected && (
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    animate={{borderColor: color}}
                    transition={spring}
                />
            )}
        </li>
    );
}



const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 3 // 무게 조절
  };
