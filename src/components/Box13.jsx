import React from 'react'
import { motion } from "framer-motion"

export default function Box13() {

  
    return (
      <div className="box-container">
        <motion.div
          //animate={{x:0}}
          className="box13-div"
          drag // 이 코드가 있으면 드래그가 가능해짐! (아무것도 없이 drag 만 적용하면 문서 전체에서 이동 가능.)
               // x축으로만 이동하게 하고싶으면 drag="x" 이런식으로 적용하면 됨.
          dragConstraints= {{ // 드래그에 제약사항을 주는 코드 (상,하,좌,우 설정 가능)
            right:250,
            left:-20,
            top: 5,
            bottom: 5,
          }}

          whileHover= {{ // 마우스를 갖다 대는동안
            scale: 1.1,
          }}
          whileTap={{ // 마우스를 누르고 있는동안 (떼면 X)
            scale: 0.9,
          }}
          >
         
        </motion.div>
      </div>
    );
}
  