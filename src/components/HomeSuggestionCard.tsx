import { Link } from "react-router-dom";
import { getCalculatedAmount } from "../utils/helper";

// Define the type for product data
interface Product {
    id: number;
    price: number;
    title: string;
    images: string[];
    discountPercentage: number;
}

interface HomeSuggestionCardProps {
    productData: Product;
}

export const HomeSuggestionCard: React.FC<HomeSuggestionCardProps> = ({ productData }) => {
    const { id, price, title, images, discountPercentage } = productData;

    const [originalPrice, discount] = getCalculatedAmount(price, discountPercentage);

    return (
        <Link to={`/product/${id}`}>
            <div className="border h-full">
                <div className="flex justify-center">
                    <img src={images[0]} alt="" className="pt-3 px-3" />
                </div>
                <div className="text-center p-2">
                    <p>{title}</p>
                    <p className="font-semibold lg:text-lg">
                        {"₹ " + originalPrice}
                        <span className="text-emerald-600 font-bold ml-2">
                            {discount + "% off"}
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
};

interface HomeSuggestionBigCardProps {
    productData: Product;
}

export const HomeSuggestionBigCard: React.FC<HomeSuggestionBigCardProps> = ({ productData }) => {
    const { id, price, title, images, discountPercentage } = productData;

    const [originalPrice, discount] = getCalculatedAmount(price, discountPercentage);

    return (
        <Link to={`/product/${id}`}>
            <div className="ml-0 lg:ml-2 h-full border hover:shadow-lg">
                <div className="flex justify-center">
                    <img src={images[0]} alt="" className="pt-3 px-3" />
                </div>
                <div className="text-center lg:text-xl p-2">
                    <p>{title}</p>
                    <p className="font-semibold">
                        {"₹ " + originalPrice}
                        <span className="text-emerald-600 font-bold ml-2">
                            {discount + "% off"}
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
};
