import { createContext,useContext,useState } from "react";


const Context=createContext()

export const PageProvider=({children})=>{
    const [showPage,setShowPage]=useState('Cross')

    return(
        <Context.Provider value={[showPage,setShowPage]}>{children}</Context.Provider>
    )
}

export const usePageContext=()=>{
    return useContext(Context)
}