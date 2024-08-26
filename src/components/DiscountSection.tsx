import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addDiscountFilter, removeDiscountFilter } from "../store/productSlice";

const DiscountSection: React.FC = () => {
    const dispatch = useDispatch();
    const [showDiscount, setShowDiscount] = useState<boolean>(false);

    const handleCheckbox = (value: string, isChecked: boolean) => {
        const discountValue = parseInt(value);
        if (isChecked) {
            // Wrap the discount value in an array for addDiscountFilter
            dispatch(addDiscountFilter([discountValue]));
        } else {
            dispatch(removeDiscountFilter(discountValue));
        }
    };

    return (
        <div className="p-3 border-b">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowDiscount(!showDiscount)}
            >
                <h1 className="font-semibold">DISCOUNT</h1>
                {showDiscount ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showDiscount && (
                <div className="mx-1 my-2">
                    <div className="flex items-center my-2">
                        <input
                            type="checkbox"
                            value={15}
                            id="discount-15"
                            onChange={(e) => handleCheckbox(e.target.value, e.target.checked)}
                        />
                        <p className="ml-2">15% or more</p>
                    </div>

                    <div className="flex items-center my-2">
                        <input
                            type="checkbox"
                            value={30}
                            id="discount-30"
                            onChange={(e) => handleCheckbox(e.target.value, e.target.checked)}
                        />
                        <p className="ml-2">30% or more</p>
                    </div>

                    <div className="flex items-center my-2">
                        <input
                            type="checkbox"
                            value={45}
                            id="discount-45"
                            onChange={(e) => handleCheckbox(e.target.value, e.target.checked)}
                        />
                        <p className="ml-2">45% or more</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiscountSection;
