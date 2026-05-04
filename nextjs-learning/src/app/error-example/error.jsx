'use client'

import { useEffect } from "react"

export default function errorFallbackUi ({error,reset}){
    useEffect(()=>{
        // do  something
        
    },[error]);
    return <div>
        <p>Failed to fetch products:{error.message}</p>
    </div>
}