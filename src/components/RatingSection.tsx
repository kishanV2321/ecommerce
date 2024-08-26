import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import {
    addRatingsFilter,
    removeRatingsFilter,
} from "../store/productSlice";
import { RootState } from "../store/appStore";

const RatingSection: React.FC = () => {
    const dispatch = useDispatch();
    const selectedRatings = useSelector((state: RootState) => state.product.filters.ratings); // Select ratings from Redux store
    const [showRating, setShowRating] = useState<boolean>(false);

    const handleCheckbox = (value: string, isChecked: boolean) => {
        const ratingValue = parseInt(value);
        if (isChecked) {
            // Wrap the single rating value in an array
            dispatch(addRatingsFilter([...selectedRatings, ratingValue]));
        } else {
            dispatch(removeRatingsFilter(ratingValue));
        }
    };

    return (
        <div className="p-3 border-b">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowRating(!showRating)}
            >
                <h1 className="font-semibold">RATING</h1>
                {showRating ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showRating && (
                <div className="mx-1 my-2">
                    <div className="flex items-center my-2">
                        <input
                            type="checkbox"
                            value={4}
                            id="rating-4"
                            onChange={(e) => handleCheckbox(e.target.value, e.target.checked)}
                        />
                        <p className="ml-2 flex items-center">
                            4 <LiaStarSolid className="mx-1" /> & above
                        </p>
                    </div>

                    <div className="flex items-center my-2">
                        <input
                            type="checkbox"
                            value={3}
                            id="rating-3"
                            onChange={(e) => handleCheckbox(e.target.value, e.target.checked)}
                        />
                        <p className="ml-2 flex items-center">
                            3 <LiaStarSolid className="mx-1" /> & above
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RatingSection;
