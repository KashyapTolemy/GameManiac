import React from "react";
import { useState } from "react";


export default function Salespage(){
    const [saleTime,setSaleTime] =useState("");
    const time =new Date().toLocaleString();
    // setSaleTime(time);
    return(
        <div className="page1">
            <h2 className="salesbox">MARCH MADNESS SALE!!<br />Mar 25-Mar 29</h2>
        </div>
    )
} 