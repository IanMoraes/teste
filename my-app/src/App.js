import React, {useState} from 'react';
import './App.css';
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useRef } from "react";
function App() {
  const [clicks, setClicks] = useState(0)
 
  const constraintsRef = useRef(null);

  
  return (
    
    <div className="flex">
      <p>clicou {clicks} vezes</p>
      <motion.div className="container" ref={constraintsRef}>
        <motion.div className="item" drag dragConstraints={constraintsRef} ><Button  variant="outlined" onClick={()=>setClicks(clicks+2)}>Clique aqui +</Button></motion.div>
      </motion.div>


    </div>
    

    
  );
}

export default App;
