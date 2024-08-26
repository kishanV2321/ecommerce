import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    addBrandsFilter,
    removeBrandsFromFilter,
} from "../store/productSlice";
import { removeGeminiBrandFilter } from "../store/appSlice";
import { RootState, AppDispatch } from "../store/appStore"; // Adjust the import path as needed

interface BrandProps {
    brandName: string;
}

const Brand: React.FC<BrandProps> = ({ brandName }) => {
    const dispatch: AppDispatch = useDispatch();
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const filteredBrand = useSelector(
        (store: RootState) => store.app?.geminiFilteredSearch?.brand
    );

    // Tick the checkbox of brand if it matches searched brand
    useEffect(() => {
        if (
            filteredBrand &&
            filteredBrand.toUpperCase() === brandName.toUpperCase()
        ) {
            setIsChecked(true);
        }

        return () => {
            // To update it with new one
            dispatch(removeGeminiBrandFilter());

            // To untick the old checkbox
            if (isChecked === true) {
                setIsChecked(false);
            }
        };
    }, [filteredBrand, brandName, dispatch]);

    useEffect(() => {
        if (isChecked) {
            dispatch(addBrandsFilter([brandName]));
        } else {
            dispatch(removeBrandsFromFilter(brandName));
        }
    }, [isChecked, brandName, dispatch]);

    return (
        <div className="flex items-center my-2">
            <input
                type="checkbox"
                value={brandName}
                id={brandName}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor={brandName} className="ml-2">
                {brandName}
            </label>
        </div>
    );
};

export default Brand;
