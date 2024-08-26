import BrandSection from "./BrandSection";
import DiscountSection from "./DiscountSection";
import PriceSection from "./PriceSection";
import RatingSection from "./RatingSection";

interface Product {
    brand: string | undefined;
    price: number;
    discountPercentage: number;
}

interface FilterProductsSideBarProps {
    products: Product[];
    query?: string | null;
}

const FilterProductsSideBar: React.FC<FilterProductsSideBarProps> = ({ products }) => {
    const brands = products.map((product) => product.brand).filter((brand): brand is string => brand !== undefined);

    const prices = products.map(
        (product) =>
            Math.round(product.price * 85) -
            (Math.round(product.price * 85) * Math.round(product.discountPercentage * 3)) / 100
    );

    const maxPrice = Math.max(...prices);

    return (
        <div className="bg-white mt-2 mx-2 h-full overflow-y-scroll">
            <h1 className="font-semibold text-lg md:text-xl p-3 border-b">Filters</h1>

            <PriceSection maxPrice={maxPrice} />

            {brands.length > 0 && <BrandSection brands={brands} />}

            <DiscountSection />

            <RatingSection />
        </div>
    );
};

export default FilterProductsSideBar;
