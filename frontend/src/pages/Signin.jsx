import { useState } from "react";
import { CardHeader, Input, Button } from "../components"
import { useNavigate } from "react-router-dom"
import axios, { isAxiosError } from "axios";

export default function Signin(){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className=" w-full h-screen bg-baseColorDark flex justify-center items-center ">
            <div className=" w-3/12 bg-white shadow-lg shadow-black rounded-md flex justify-center items-center flex-col ">
                <CardHeader title="Sign In" description="Enter your credentials to Login into your Wallet account" />
                <Input required={true} label="Enter email" min="1" max="99" type="email" placeholder="johnwick@example.com" onChangeSet={setEmail} />
                <Input required={true} label="Enter password" min="4" max="20" type="password" placeholder="" onChangeSet={setPassword} />
                <Button label="Sign Up" buttonOnClick={ async ()=>{
                    try {
                        const response = await axios.post("http://localhost:1234/api/v1/user/signin", {
                            email: email,
                            password: password
                        })
                        alert(response.data.msg.toUpperCase());
                        navigate("/dashboard");
                    } catch (err){
                        const error = err.response;
                        if (error===undefined){
                            alert(err.message.toUpperCase());
                        } else alert(error.data.msg.toUpperCase());
                    }
                }} alternativeDes="Don't have an account? " alternative="Sign Up" alternativeOnClick={()=>{
                    navigate("/signup");
                }}  />
            </div>
        </div>
    )

}