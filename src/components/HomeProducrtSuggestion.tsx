import { HomeSuggestionBigCard, HomeSuggestionCard } from "./HomeSuggestionCard";

interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    discountPercentage: number;
    // Add other relevant fields as necessary
}

interface HomeProductSuggestionsProps {
    products: Product[];
    category: string;
}

const HomeProductSuggestions: React.FC<HomeProductSuggestionsProps> = ({ products, category }) => {
    if (products.length) {
        return (
            <div className="px-3 py-4 bg-gray-50 border">
                <h1 className="text-[22px] mb-3 font-bold text-sky-900">{category}</h1>
                <div className="grid lg:grid-cols-2">
                    <div className="grid grid-cols-2 grid-rows-2">
                        {/* This will slice first 4 elements and then map() on it */}
                        {products.slice(0, 4).map((product, i) => (
                            <HomeSuggestionCard key={product.id} productData={product} />
                        ))}
                    </div>
                    {products[4] && (
                        <div>
                            <HomeSuggestionBigCard productData={products[4]} />
                        </div>
                    )}
                </div>
            </div>
        );
    } else {
        return null; // Handle case where products are empty or undefined
    }
};

export default HomeProductSuggestions;
