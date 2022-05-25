
import Heder from './Components/Header/Heder';
import HeroContat from './Components/HeroContact/HeroContat';
import Skilss from './Components/Skilss/Skilss';
import './App.css';
import Contact from './Components/Contact/Contact';
import WhoImI from './Components/WhoImI/WhoImI';
import Goals from './Components/Goals/Goals';
import Modal from './Components/Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyWork from './Components/MyWork/MyWork';
import cursor from './Components/IMGS/cursor.png'
function App() {
let store=useSelector(store=>store.ModalReducer)
 
  return (
    
    <div className="App overflow-x-hidden point">
     <Heder/>
     <HeroContat/>
     <WhoImI/>
     <Skilss/>
     <MyWork/>
     <Goals/>
     <Contact/>
   <AnimatePresence exitBeforeEnter>
     { store.is_open &&  <Modal/>}
   </AnimatePresence>
    </div>
  );
}

export default App;
