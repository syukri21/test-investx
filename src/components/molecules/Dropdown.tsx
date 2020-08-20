import React, { PropsWithChildren } from "react";

interface MenuItemProps {
    children: string;
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <span
            className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
            role='menuitem'
        >
            {props.children}
        </span>
    );
};

interface Props extends PropsWithChildren<any> {
    in: boolean;
}

const Dropdown = (props: Props) => {
    return (
        <div className='relative inline-block text-left'>
            <div>{props.children}</div>
            <div
                className={`${props.in ? "transition ease-out duration-100" : "transition ease-in duration-75"} ${
                    props.in ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95"
                }
                origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg`}
            >
                <div className='rounded-md bg-white shadow-xs'>
                    <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                        <MenuItem>10</MenuItem>
                        <MenuItem>25</MenuItem>
                        <MenuItem>50</MenuItem>
                        <MenuItem>100</MenuItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
