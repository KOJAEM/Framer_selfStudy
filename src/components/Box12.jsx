import React, {useState} from 'react'
import { motion } from "framer-motion"

export default function Box12() {

    const[isAnimating, setIsAnimating] = useState(false);
  
    return (
      <div className="box-container">
        <motion.div
          className="box12-div"
          animate={{ // 어떤 애니메이션을 적용할건지 (CSS 속성도 가능한듯)
            x: isAnimating ? "750px" : "0px",
            opacity: isAnimating ? 1 : 0.5 ,
            rotate: isAnimating ? 360 : 0,
            //backgroundColor : "blue",
            //scale: 4
          }}
          // initial={{ // 애니메이션이 그려지기 전 초기값 조절
          //   opacity: 0.2
          // }}
          transition= {{
            type: "spring", // 스프링 타입
            stiffness: 100,// 강성 조절 (spring 타입. 높을수록 스프링 힘이 강함)
            damping: 30 // 감쇠
            // type: "tween" // 일정한 속도
            //duration: 2 // 속도 조절 (tween 타입)
          }}
          onClick={() => setIsAnimating(!isAnimating)}
          >
         
        </motion.div>
      </div>
    );
}
  