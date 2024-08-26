import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Brand from "./Brand";

interface BrandSectionProps {
    brands: string[];
}

const BrandSection: React.FC<BrandSectionProps> = ({ brands }) => {
    const [showBrands, setShowBrands] = useState<boolean>(true);

    // Filter out duplicate brands
    const brandNames = Array.from(new Set(brands));

    return (
        <div className="p-3 border-b">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowBrands(!showBrands)}
            >
                <h1 className="font-semibold">BRAND</h1>
                {showBrands ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {showBrands && (
                <div className="mx-1 my-2">
                    {brandNames.map((brand, i) => (
                        <Brand key={i} brandName={brand} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrandSection;
