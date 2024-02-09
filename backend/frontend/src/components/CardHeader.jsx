

export default function CardHeader({ title, description }){

    return (
        <div className=" m-2 font-Inter flex justify-center items-center flex-col">
            <h1 className=" p-2 w-full text-center text-3xl font-Inter font-bold">{title}</h1>
            <h3 className=" px-2 w-full text-center ">{description}</h3>
        </div>
    )

}