import React, {useState} from 'react';

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0){
      setVisible(true)
    } 
    else if (scrolled <= 0){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className="goTop" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
       goTop
    </button>
  );
}
  
export default ScrollButton;
