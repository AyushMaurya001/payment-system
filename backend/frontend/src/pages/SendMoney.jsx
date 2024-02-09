import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, CardHeader, Input, UserData } from "../components/index";
import axios from "axios";
import { useState } from "react";

export default function SendMoney(){

    const navigate = useNavigate();

    const [searchParams, setsearchParams] = useSearchParams();

    const [amount, setAmount] = useState(0);

    return (
        <div>
            <div className=" h-screen w-full bg-baseColorDark flex justify-center items-center">
                <div className=" flex flex-col justify-center items-center p-4 bg-white shadow-black shadow rounded-md">
                    <CardHeader title="Send Money" />
                    <UserData name={searchParams.get("name")} />
                    <Input required={true} label="" type="Number" min="1" max="99" placeholder="Enter Amount" onChangeSet={setAmount} />
                    <Button label="Send Money" alternativeDes="Running low in balance." alternative="Take Loan!" buttonOnClick={ async ()=>{
                        try {
                            const to = searchParams.get("to");
                            const response = await axios.post(`${window.location.origin}/api/v1/account/sendmoney`, {
                                to,
                                amount: parseInt(amount)
                            }, {
                                headers: {
                                    Authorization: localStorage.getItem('token')
                                }
                            })
                            alert(response.data.msg.toUpperCase());
                            navigate("transaction?id="+to+"&at="+Date.now());
                        } catch (err){
                            const error = err.response;
                            if (error==undefined){
                                alert(err.message);
                            } else alert(error.data.msg.toUpperCase())
                        }
                    }} alternativeOnClick={()=>{
                        // navigate to bank website
                    }} />
                </div>
            </div>
        </div>
    )

}