import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPriceFilter } from "../store/productSlice";
import {
    removeGeminiIsPriceUnder,
    removeGeminiPriceFilter,
} from "../store/appSlice";
import { RootState } from "../store/appStore";

interface PriceSectionProps {
    maxPrice: number;
}

const PriceSection: React.FC<PriceSectionProps> = ({ maxPrice }) => {
    const dispatch = useDispatch();

    const { isPriceUnder, price } = useSelector(
        (store: RootState) => store.app?.geminiFilteredSearch || {}
    );

    const maxPriceSlider = parseInt((maxPrice / 1.5).toString());
    const [currPrice, setCurrPrice] = useState<number>(maxPriceSlider);

    // Update the current price when maxPriceSlider changes
    useEffect(() => {
        setCurrPrice(maxPriceSlider);
    }, [maxPriceSlider]);

    useEffect(() => {
        handlePriceFilter();

        // Clearing gemini filters on unmount
        return () => {
            dispatch(removeGeminiIsPriceUnder());
            dispatch(removeGeminiPriceFilter());
        };
    }, [currPrice, price]);

    const handlePriceFilter = () => {
        if (isPriceUnder) {
            setCurrPrice(price ?? maxPriceSlider); // Handle null or undefined by defaulting to maxPriceSlider
            dispatch(addPriceFilter(price ?? maxPriceSlider)); // Handle null or undefined by defaulting to maxPriceSlider
        } else {
            // If the user slides the price filter to the end, then add maxPrice to the priceFilter
            dispatch(
                addPriceFilter(currPrice === maxPriceSlider ? maxPrice : currPrice)
            );
        }
    };

    return (
        <div className="border-b p-3">
            <h1 className="font-semibold mb-1">PRICE</h1>

            <p className="font-semibold">
                ₹{currPrice.toLocaleString("en-IN")}
                {currPrice === maxPriceSlider && "+"}
            </p>
            <input
                className="cursor-pointer w-full"
                type="range"
                min="0"
                max={maxPriceSlider}
                value={currPrice}
                onChange={(e) => setCurrPrice(parseInt(e.target.value))}
            />
        </div>
    );
};

export default PriceSection;
