import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../components/index"

export default function UsersBar(){

    const token = localStorage.getItem("token");

    const [filter, setFilter] = useState("");

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const response = axios.get(`${window.location.origin}/api/v1/user/users?search=${filter}`, {
            headers: {
                authorization: token
            }
        }).then(res => setUsers(res.data.users));
    }, [token, filter])

    return (
        <div>
            <div className=" w-full flex flex-col gap-2 justify-center items-center">
                <input className=" p-2 px-4 mx-10 w-11/12 font-Inter font-medium focus:outline-none border-2 border-baseColorLight rounded-md focus:shadow-md" placeholder="Search users..." onChange={(e)=>{
                    setFilter(e.target.value);
                }} />
                <div className=" w-full m-2">
                    {users.map(user => <User key={user._id} userId={user._id} firstName={user.firstName} lastName={user.lastName} />)}
                </div>
            </div>
        </div>
    )

}