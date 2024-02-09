

export default function Header(){

    return (
        <div className="flex flex-col items-center">

            <header className=" w-full h-20 bg-white flex items-center justify-between font-Inter">
                <div className=" mx-10 flex justify-center items-center">
                    <svg className=" h-10 mx-2 fill-baseColorDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.0049 6.99979H23.0049V16.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V6.99979ZM20.0049 16.9998H14.0049C11.2435 16.9998 9.00488 14.7612 9.00488 11.9998C9.00488 9.23836 11.2435 6.99979 14.0049 6.99979H20.0049V4.99979H4.00488V18.9998H20.0049V16.9998ZM21.0049 14.9998V8.99979H14.0049C12.348 8.99979 11.0049 10.3429 11.0049 11.9998C11.0049 13.6566 12.348 14.9998 14.0049 14.9998H21.0049ZM14.0049 10.9998H17.0049V12.9998H14.0049V10.9998Z"></path></svg>
                    <p className=" font-bold text-fontColorDark text-2xl cursor-default">Wallet</p>
                </div>
                <div className=" mx-10 flex justify-center items-center align-middle">
                    <button className=" h-7 w-20 mx-5 text-center px-1 rounded-md font-Inter font-medium text-lg text-fontColorDark hover:text-fontColorLight transition-all ">
                        Sign Up
                    </button>
                    <div className=" w-0.5 h-6 bg-color1 opacity-20"></div>
                    <div className=" mx-5 w-10 h-5 flex justify-center items-center">
                        <label htmlFor="themeSwitch" className=" w-10 h-5 rounded-full bg-black border-2 border-baseColor border-opacity-70 relative flex items-center justify-center" >
                            <input id="themeSwitch" type="checkbox" className=" appearance-none w-5 h-5 rounded-full scale-110 bg-baseColorLight absolute -left-1 checked:left-5 transition-all " />
                        </label>
                    </div>
                    <div>
                        <svg className=" w-10 fill-baseColorDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                    </div>
                </div>
            </header>
            <div className=" w-full border border-b-baseColorLight "></div>

        </div>
    )

}