import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"


export default function Balancebar(){

    const [balance, setBalance] = useState(0);
    
    const token = localStorage.getItem("token");
    useEffect(()=>{
        const response = axios.get("http://localhost:1234/api/v1/account/balance", {
            headers: {
                Authorization: token
            }
        }).then(res => setBalance(res.data.balance));
    }, [token])

    return (
        <div>
            <p className=" font-Inter text-center text-xl font-medium px-10 m-4 ">
                Your Balance: {balance}
            </p>
        </div>
    )

}