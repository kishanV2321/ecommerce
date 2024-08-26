import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSideBar } from "../store/appSlice";
import React from "react";

const CategorySideBar: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (category: string | null) => {
        if (category) {
            dispatch(toggleSideBar());
            navigate("/products/search?c=" + category);
        }
    };

    return (
        <div className="px-4 pb-2 w-full lg:w-3/12 h-[85vh] overflow-y-scroll absolute border-t-2 border-sky-800 bg-sky-900 z-10">
            <ul>
                <li className="mb-2 mt-5 text-xl font-semibold text-sky-200">
                    Men's Fashion
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value="mens-shirts"
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Shirts
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"mens-shoes"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Shoes
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"mens-watches"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Watches
                </li>
            </ul>

            <ul>
                <li className="mb-2 mt-5 text-xl font-semibold text-sky-200">
                    Women's Fashion
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"womens-dresses"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Dresses
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"womens-jewellery"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Jewellery
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"womens-shoes"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Shoes
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"womens-watches"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Watches
                </li>
            </ul>

            <ul>
                <li className="mb-2 mt-5 text-xl font-semibold text-sky-200">
                    Furniture, Decoration, Kitchen
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"furniture"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Furniture
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"home-decoration"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Home Decorations
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value={"kitchen-accessories"}
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Kitchen Accessories
                </li>
            </ul>

            <ul>
                <li className="mb-2 mt-5 text-xl font-semibold text-sky-200">
                    Mobile, Laptop, Sports
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value="smartphones"
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Mobiles
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value="laptops"
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Laptops
                </li>
                <li
                    className="text-sky-100 py-2 px-3 cursor-pointer hover:bg-sky-800"
                    data-value="sports-accessories"
                    onClick={(e) => handleClick(e.currentTarget.getAttribute("data-value"))}
                >
                    Sports Accessories
                </li>
            </ul>
        </div>
    );
};

export default CategorySideBar;
