import Slider from "react-slick";
import HomePageProductCard from "./HomePageProductCard";

// slider settings
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
};

interface Product {
    id: string;
    price: number;
    title: string;
    images: string[];
    discountPercentage: number;
}

interface HomePageProductContainerProps {
    products: Product[];
    category: string;
}

const HomePageProductContainer: React.FC<HomePageProductContainerProps> = ({ products, category }) => {
    // Checking this because If I refresh when I'm inside productListPage, the store gets empty, then products be undefined here
    if (products) {
        return (
            <div className="px-3 py-4 my-3 bg-gray-50">
                <h1 className="text-[22px] font-semibold mb-3 text-sky-900">
                    {category}
                </h1>

                <div className="slider-container">
                    <Slider {...settings}>
                        {products.map((product) => (
                            <HomePageProductCard
                                key={product.id}
                                category={category}
                                productData={product}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }

    // You might want to add a fallback UI when products is undefined or null
    return <div>No products available</div>;
};

export default HomePageProductContainer;
