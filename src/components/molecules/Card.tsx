import React from "react";

interface Props {}

const Card = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img src='http://localhost:8888/photos/nature/road-1072823_1280.jpg' className='w-100% rounded-sm h-auto' alt='#' />
            </div>
            <h6 className="font-semibold text-sm mt-2">Name.jpg</h6>
            <span className="text-xs text-gray-600" >Other</span>
        </div>
    );
};

export default Card;
