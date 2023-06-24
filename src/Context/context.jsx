import { createContext, useContext } from "react";

const mcrContext=createContext();

const McrProvider=({children})=>{

    return(
        <mcrContext.Provider>
            {children}
        </mcrContext.Provider>
    )
}
const useMcr=()=>useContext(mcrContext);

export {useMcr,McrProvider};