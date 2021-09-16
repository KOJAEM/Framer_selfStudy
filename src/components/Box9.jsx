import React, { useEffect, useState } from "react";
import { animate, AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useAnimation } from "framer-motion";



export default function Box9() {
  return (
    <div className="box-container">
     <motion.div
     className="box9-div"
     onPan={onPan}
     onPanStart={onPanStart}
     onPanEnd={onPanEnd}
     >누르면서 콘솔창 확인</motion.div>
    </div>
  );
}

function onPan(event, info) {
  console.log(info.point.x, info.point.y)
}

function onPanStart(event, info) {
  console.log("onPan 시작")
}

function onPanEnd(event, info) {
  console.log("onPan 끝")
}