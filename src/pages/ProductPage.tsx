import { useParams } from "react-router-dom";
import { useGetProductInfo } from "../hooks/useGetProductInfo";
import { useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import { ProductDetails, ReviewsContainer, SimilarProductsContainer } from "../components";

// Define ProductInfo type (replace with actual structure)
interface ProductInfo {
    id: string; // Add missing properties
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    brand: string;
    warrantyInformation: string;
    shippingInformation: string;
    reviews: any[]; // Replace with actual review type
    returnPolicy: string;
    minimumOrderQuantity: string;
    availabilityStatus: string;
    images: string[];
    category: string;
    // Add other properties if needed
}


const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // `id` is string or undefined
    const productInfo = useSelector((store: any) => store.product.productInfo) as ProductInfo | null;

    const [currImg, setCurrImg] = useState<number>(0);
    const [isOutline, setIsOutline] = useState<number>(0);

    const productId = id ? parseInt(id, 10) : undefined; // Convert id to number

    useGetProductInfo(productId); // Use productId which is of type number or undefined

    // Scroll to top whenever component re-renders
    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
    }, []);

    const handleMouseEnter = useCallback((index: number) => {
        setCurrImg(index);
        setIsOutline(index);
    }, []);

    if (!productInfo) {
        return <div>Loading...</div>; // Fallback UI or handle loading state
    }

    const { images, reviews, category } = productInfo;



    return (
        <div>
            <div className="flex flex-col md:flex-row bg-white p-2 lg:p-4">
                <div className="mr-2 w-16 md:w-24 flex items-center h-16 md:block my-2 md:my-0">
                    {images.map((url, i) => (
                        <img
                            src={url}
                            alt={`Product image ${i}`}
                            key={i}
                            className={`w-full h-full my-1 mr-1 rounded-lg p-1 border outline outline-2 border-zinc-400 ${isOutline === i ? "outline-sky-900" : "outline-transparent"
                                }`}
                            onMouseEnter={() => handleMouseEnter(i)}
                            loading="eager"
                        />
                    ))}
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full sm-[90%] md:w-6/12">
                        <div className="w-full border border-zinc-200 h-[350px] md:h-[450px] flex justify-center">
                            <img
                                src={images[currImg]}
                                alt="Product main"
                                className="h-full p-1 border-zinc-300 object-cover"
                            />
                        </div>
                    </div>
                    <ProductDetails productData={productInfo} />
                </div>
            </div>

            <ReviewsContainer reviews={reviews} />
            <SimilarProductsContainer category={category} />
        </div>
    );
};

export default ProductPage;
