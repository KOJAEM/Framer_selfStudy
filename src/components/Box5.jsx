import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Box5() {
    const[isOpen, setIsOpen] = useState(false);

  return (
      <div className="box-container">
          <motion.div
            layout
            data-isOpen={isOpen}
            initial={{borderRadius: 50}}
            className="parent"
            onClick={()=>setIsOpen(!isOpen)}
          >
              <motion.div layout className="child" />
          </motion.div>
        </div>
  );
}

