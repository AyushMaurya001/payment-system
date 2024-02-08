import { useNavigate } from "react-router-dom"
import UserData from "./UserData";


export default function User({ firstName, lastName, userId }){

    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center px-14 m-2 font-medium text-lg">
            <UserData name={firstName+" "+lastName} />
            <button className=" bg-neonDark text-white p-1 px-4 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 focus:shadow-md hover:bg-neonLight transition-all" onClick={()=>{
                navigate("/sendmoney?to="+userId+"&name="+firstName);
            }}>
                Send Money
            </button>
        </div>
    )

}