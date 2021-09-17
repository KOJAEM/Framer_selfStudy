import React, {useState} from 'react'
import { motion, useAnimation} from "framer-motion"

export default function Box5() {

    const control = useAnimation(); // useAnimation Hook 사용

    return (
      <div className="box-container">
        <button className="box16-button" onClick={() => {
            control.start({
                x: 1000,
                transition: { duration: 2 }
            })
        }}
        >Move Right</button>
        <button className="box16-button" onClick={() => {
            control.start({
                x: 0,
                transition: { duration: 2 }
            })
        }}>Move Left</button>
        <button className="box16-button" onClick={() => {
            control.start({
                borderRadius:"50%",
                transition: { duration: 1 }
            })
        }}>Circle</button>
        <button className="box16-button" onClick={() => {
            control.start({
                borderRadius: 0,
                transition: { duration: 1 }
            })
        }}>Square</button>
        <button className="box16-button" onClick= {() => {
            control.stop()
        }}>Stop</button>
        <motion.div
            className="box16-div"
            animate={control}
          >
         
        </motion.div>
      </div>
    );
}
  