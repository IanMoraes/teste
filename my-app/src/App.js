import React, {useState} from 'react';
import './App.css';
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
function App() {
  const [clicks, setClicks] = useState(0)
 

  return (
    <div>
      <p>clicou {clicks} vezes</p>
      <motion.div 
      whileHover={{ borderRadius: "100%"}}
      >
        <Button  variant="outlined" onClick={()=>setClicks(clicks+1)}>Clique aqui +</Button>
      </motion.div>
      <motion.div 
      whileHover={{ borderRadius: "100%"}}
      >
      <Button variant="outlined" onClick={()=>setClicks(clicks-
        1)}>Clique aqui -</Button>
    </motion.div>


    </div>
    

    
  );
}

export default App;
