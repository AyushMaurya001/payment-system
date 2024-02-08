

export default function UserData({ name }){

    return (
        <div>
            <div className=" flex p-2 justify-center items-center gap-2 font-Inter text-lg">
                <div className=" w-10 h-10 rounded-full bg-neonLight flex justify-center items-center">
                    {name[0].toUpperCase()}
                </div>
                <p className=" mx-4">
                    {name}
                </p>
            </div>
        </div>
    )
    
}