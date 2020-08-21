import React from "react";
import useCard from "./hooks/use.card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isDeleteState: boolean;
  data: PhotoType.Document;
}

const Card = ({ data, isDeleteState }: Props) => {
  const { isSelected, handleToggleSelect } = useCard(data);
  return (
    <div
      className={`${
        isDeleteState && !isSelected ? "opacity-50" : "opacity-100"
      } flex flex-col justify-center items-center cursor-pointer`}
      onClick={handleToggleSelect}
    >
      <div className="relative">
        <img
          src={data.raw}
          className="h-40 rounded-sm w-full object-cover"
          alt="#"
        />
        {isSelected && (
          <FontAwesomeIcon
            icon={faCheckSquare}
            className="text-red-100 absolute top-0 ml-1 mt-1 left-0"
          ></FontAwesomeIcon>
        )}
      </div>
      <h6 className="font-semibold text-sm mt-2">{data.name}</h6>
      <span className="text-xs text-gray-600">{data.album}</span>
    </div>
  );
};

export default Card;
