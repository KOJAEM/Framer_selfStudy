import React, { useState } from "react";
import { motion } from "framer-motion";


export default function Box10() {
    const [string, setString] = useState("드래그 해보세요");
  return (
    <div className="box-container">
      <motion.div
        //animate={{x:0}}
        className="box10-div"
        drag // 이 코드가 있으면 드래그가 가능해짐! (아무것도 없이 drag 만 적용하면 문서 전체에서 이동 가능.)
             // x축으로만 이동하게 하고싶으면 drag="x" 이런식으로 적용하면 됨.
        dragConstraints={{ // 드래그로 변경할 수 있는 최대위치에 제약사항을 주는 코드 (상,하,좌,우 설정 가능)
          right: 250,
          left: -20,
          top: 5,
          bottom: 5,
        }}
        dragElastic={0.5} // 드래그 하면서 최대위치를 벗어났을때 얼만큼 따라오게 할건지 (1이면 마우스를 놓기 전까지 계속 따라옴)
        whileHover={{ // 마우스를 갖다 대는동안
          scale: 1.1,
        }}
        whileTap={{ // 마우스를 누르고 있는동안 (떼면 X)
          scale: 0.9,
        }}
        whileDrag={{ // 드래그 중
            scale: 1.5,
            backgroundColor: 'lightskyblue'
        }}
        onDrag= { () => // 드래그 중 실행되는 콜백함수
            changeText(setString, "드래그 중")
        }
        onDragEnd = { () => { // 드래그 끝났을때 실행되는 콜백함수
            changeText(setString, "드래그 해보세요")
        }}
      >{string}</motion.div>
    </div>
  );
  
}

function changeText(setString, text) {
    setString(text);
}