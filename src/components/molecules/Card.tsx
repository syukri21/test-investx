import React from "react";

interface Props {
    data: PhotoType.Document;
}

const Card = ({data}: Props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img src={data.raw} className='h-40 rounded-sm w-full object-cover' alt='#' />
            </div>
            <h6 className='font-semibold text-sm mt-2'>{data.name}</h6>
            <span className='text-xs text-gray-600'>{data.album}</span>
        </div>
    );
};

export default Card;
