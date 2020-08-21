import React, { PropsWithChildren } from "react";

interface MenuItemProps {
    children: string;
    onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <span
            className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer'
            role='menuitem'
            onClick={props.onClick}
        >
            {props.children}
        </span>
    );
};

interface Props extends PropsWithChildren<any> {
    in: boolean;
    onChoose: (limit: string) => void;
}

const DropdownAlbum = (props: Props) => {
    return (
        <div className='relative inline-block text-left ' style={{ zIndex: 10 }}>
            <div
                className={`${props.in ? "transition ease-out duration-100" : "transition ease-in duration-75"} ${
                    props.in ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95"
                }
          origin-top-right absolute left-0 bottom-0 mb-10 rounded-md shadow-lg`}
                style={{ width: 138.56 }}
            >
                <div className='rounded-md bg-white shadow-xs'>
                    <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                        <MenuItem onClick={() => props.onChoose("Travel")}>Travel</MenuItem>
                        <MenuItem onClick={() => props.onChoose("Personal")}>Personal</MenuItem>
                        <MenuItem onClick={() => props.onChoose("Food")}>Food</MenuItem>
                        <MenuItem onClick={() => props.onChoose("Nature")}>Nature</MenuItem>
                    </div>
                </div>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default DropdownAlbum;
