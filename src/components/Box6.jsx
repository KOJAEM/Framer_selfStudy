import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Box6() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box-container">
      <AnimateSharedLayout>
          {/* AnimateSharedLayout 서로 다른 요소들끼리 애니메이션 레이아웃을 공유. */}
        <motion.ul className="box6-ul" layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={{ item }} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      className="box6-li"
            // css 충돌을 막기위해서 className 값을 box6-{item = (li) }
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence> {/* AnimatePresence */}
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // 이 상태를 끝내고 마운트를 해제시킨다는것!
    >
      {" "}
      {/* exit 체크 */}
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

const items = [0, 1, 2];
