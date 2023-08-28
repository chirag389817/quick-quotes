import React from "react";

function LineThroughText({ children }) {
    return (
        <div className="flex my-3 items-center mx-auto w-96">
            <div className="flex bg-gray-500 flex-1 h-[2px] mx-5 "></div>
            {children}
            <div className="flex bg-gray-500 flex-1 h-[2px] mx-5 "></div>
        </div>
    );
}

export default LineThroughText;
