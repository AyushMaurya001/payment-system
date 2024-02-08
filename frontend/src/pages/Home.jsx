import { useNavigate } from "react-router-dom"
import { Header, Footer } from "./../components/index"

export default function Home(){

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className=" w-full h-screen bg-white ">
                <div className=" w-full flex flex-col justify-center items-center ">
                    <p className=" mt-20 m-7 w-10/12 font-Inter font-extrabold text-6xl text-fontColorDark text-center">
                        Do Payment just like you are using your WALLET.
                    </p>
                    <p className=" m-4 w-3/5 font-Inter text-black text-xl text-center">
                        A payment software made using MERN that can be used to create a personal wallet with coins. These coins can be transfer to another wallet. On requirement you can even take more coins as loan from coins bank.
                    </p>
                    <div className=" mb-10 m-7 flex justify-center items-center font-Inter text-white">
                        <button className=" mx-4 w-32 h-10 bg-sky-800 rounded-md hover:bg-sky-600 transition-all" onClick={()=>{
                            navigate("/signup");
                        }}>
                            Get Started
                        </button>
                        <button className=" mx-4 w-32 h-10 bg-sky-950 rounded-md hover:bg-sky-700 transition-all" onClick={()=>{
                            navigate("/signin");
                        }}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}