import { CardHeader, Input, Button } from "../components"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function Signup(){
    
    const navigate = useNavigate();
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className=" w-full h-screen bg-baseColorDark flex justify-center items-center ">
            <div className=" w-3/12 bg-white shadow-lg shadow-black rounded-md flex justify-center items-center flex-col ">
                <CardHeader title="Sign Up" description="Create your wallet account by entering required credentials" />
                <Input required={true} label="Enter first name" min="1" max="99" type="text" placeholder="John" onChangeSet={setFirstName} />
                <Input required={true} label="Enter last name" min="1" max="99" type="text" placeholder="Wick" onChangeSet={setLastName} />
                <Input required={true} label="Enter email" min="1" max="99" type="email" placeholder="johnwick@example.com" onChangeSet={setEmail} />
                <Input required={true} label="Enter password" min="4" max="20" type="password" placeholder="" onChangeSet={setPassword} />
                <Button label="Sign Up" buttonOnClick={ async ()=>{
                    try {
                        const response = await axios.post(`${window.location.origin}/api/v1/user/signup`, {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password
                        });
                        localStorage.setItem("token", "Bearer "+response.data.token);
                        alert(response.data.msg.toUpperCase());
                        navigate("/dashboard");
                    } catch (err){
                        const error = err.response;
                        if (error===undefined){
                            alert(err.message);
                        } else alert(error.data.msg.toUpperCase());
                    }
                }} alternativeDes="Already have an account? " alternative="Login" alternativeOnClick={()=>{
                    navigate("/signin");
                }}  />
            </div>
        </div>
    )

}