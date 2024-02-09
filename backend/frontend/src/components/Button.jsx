

export default function Button({ label, buttonOnClick, alternativeDes, alternative, alternativeOnClick }){

    return (
        <div className="m-2 mb-4 w-full flex flex-col justify-center items-center font-Inter ">
            <button onClick={buttonOnClick} className=" outline-none w-10/12 p-2 text-lg font-medium rounded-md bg-black text-baseColorLight focus:ring-2 focus:ring-baseColor">
                {label}
            </button>
            <div className=" m-1 flex justify-center items-center gap-1 font-light">
                <p>{alternativeDes}</p>
                <p className=" cursor-pointer underline text-fontColorLight" onClick={alternativeOnClick}>{alternative}</p>
            </div>
        </div>
    )

}