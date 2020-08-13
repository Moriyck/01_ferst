import React from 'react'
import { Route } from "react-router-dom"

export const pathRoute=(allMenu) =>{
    debugger
    return allMenu.elementsLinks.map(f =><Route path={`${f.routPath}`} render={() => < f.component />} />)
} 