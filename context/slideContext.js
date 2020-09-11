import React, { createContext, useState, useContext } from "react";

const SlideContext = createContext();

export default function SlideProvider({ children }) {
  const [slide, setSlide] = useState(0);
  return (
    <SlideContext.Provider value={{ slide, setSlide }}>
      {children}
    </SlideContext.Provider>
  )
}

export function useSlide() {
  const context = useContext(SlideContext)
  const { slide, setSlide } = context
  return { slide, setSlide };
}