import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box14() {
  const boxVariant = {
    hidden: {
      x: "-100vw", // vw 란 viewPort 너비의 1% 를 의미함.
    },
    visible: {
      x: 0,

      transition: {
        delay: 1, // 애니메이션에 딜레이 걸리게하기
        when: "beforeChildren", // ★ 이 코드가 실행되고 나서 자식들의 코드가 실행되게 하는 코드
        // 만약 이 코드가 없으면, 아래 boxItem 의 listVariant 도 같이 실행 됨!
        staggerChildren: 0.5, // 자식들의 애니메이션이 차례대로 일어나게 함. (첫째자식의 애니메이션이 끝나면 둘째자식...)
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box14-div"
        variants={boxVariant} // 무슨 애니메이션을 적용할건지
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="box14-boxItem"
              variants={listVariant}
              //animate="visible" // 부모에서도 같은 visible, hidden 을 사용하기 때문에 이 코드가 없어도
              //initial="hidden"  // 자동으로 적용된다고함. (이해하기 힘들수도 있겠지만, 이해하라고 나옴.
              // 만약 싫다면 listVariant 에서 부모와 같은 이름(visible, hidden)을 사용하지 않으면 됨)
              // 단, staggerChildren 과 같은 transition 을 사용할거면 위 방법처럼 사용해야함!
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
