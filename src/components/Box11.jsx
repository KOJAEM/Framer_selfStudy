import React, { useState } from "react";
import { motion,  useCycle  } from "framer-motion";




export default function Box11() {
    const [x, cycleX] = useCycle(0, 100, 200) // useCycle 로 순환사이클을 만들 수 있다.
  return (
    <div className="box-container">
        <motion.div className="box11-div" 
        animate={{ x: x }}
        onClick={() => cycleX()}
        >{`현재 x좌표 : ${x}`}</motion.div>

    </div>
  );
}



















// export default function Box11() {
//     const [x, cycleX] = useCycle(0, 100, 200) // useCycle 로 순환사이클을 만들 수 있다.
//   return (
//     <div className="box-container">
//         <motion.div className="box11-div" 
//         animate={{ x: x }}
//         onClick={() => cycleX()}
//         />

//     </div>
//   );
// }