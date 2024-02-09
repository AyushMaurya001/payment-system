

export default function Input({ required, label, type, min, max, placeholder, onChangeSet }){

    return (
        <div className=" m-2 w-full flex justify-center items-center flex-col">
            <label className=" w-10/12 font-Inter font-semibold">
                {label}
            </label>
            <input onChange={(e)=>{
                onChangeSet(e.target.value);
            }} required={required} minLength={min} maxLength={max} type={type} className=" font-Inter py-1 border-2 w-10/12 rounded-sm px-3 focus:outline-none focus:ring focus:valid:ring-baseColor invalid:ring-red-500 " placeholder={placeholder} />
        </div>
    )

}