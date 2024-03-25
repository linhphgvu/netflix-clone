import React from "react";

const AccountMenuDD = () => {
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full bg-black">
                    <img className="w-8 rounded-md" src="profilephoto.svg" alt="" />
                    <p className="text-white text-sm group-hover/item:underline ">username</p>
                </div>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div className="px-3 text-center text-white text-sm hover:underline bg-black">
                Sign out of Netflix
            </div>
        </div>
    )
}

export default AccountMenuDD;