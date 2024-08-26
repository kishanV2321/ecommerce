import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ProductCard, FilterProductsSideBar, SortOptionsContainer } from "../components";
import { useGetFilteredProducts } from "../hooks/useGetFilteredProducts";
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";
import { useGetProductsByQuery } from "../hooks/useGetProductsByQuery";
import {
    addBrandsFilter,
    addDiscountFilter,
    addPriceFilter,
    addRatingsFilter,
} from "../store/productSlice";
import { FiMenu } from "react-icons/fi";
import { RootState } from "../store/appStore";

const ProductListPage = () => {
    const dispatch = useDispatch();
    const [showFilters, setShowFilters] = useState(false);

    const isSideBar = useSelector((store: RootState) => store.app.isSideBar);
    const categoryProducts = useSelector(
        (store: RootState) => store.product.categoryProducts
    );
    const filteredProducts = useSelector(
        (store: RootState) => store.product.filteredProducts
    );

    const [searchParams] = useSearchParams();
    const category = searchParams.get("c");
    const query = searchParams.get("q");

    // Fetch products based on category or query
    useGetProductsByCategory(category || "");
    useGetProductsByQuery(query || "");

    // Determine products to display
    const products = categoryProducts[category || ""]?.length
        ? categoryProducts[category || ""]
        : categoryProducts[query || ""];

    useEffect(() => {
        document.body.style.overflow = isSideBar || showFilters ? "hidden" : "auto";
    }, [isSideBar, showFilters]);

    // Apply filters to products
    useGetFilteredProducts(products);

    // Clean filters on unmount
    useEffect(() => {
        return () => {
            dispatch(addPriceFilter(Infinity));
            dispatch(addBrandsFilter([]));
            dispatch(addDiscountFilter([]));
            dispatch(addRatingsFilter([]));
        };
    }, [dispatch]);

    const screenWidth = window.innerWidth;

    if (!products) {
        return <p className="font-semibold text-2xl text-center mt-10">Loading...</p>;
    }

    return (
        <div className={isSideBar ? "opacity-40 pointer-events-none" : ""}>
            <div>
                {filteredProducts.length > 0 && (
                    <SortOptionsContainer
                        products={products}
                        filteredProducts={filteredProducts}
                        searchQuery={query}
                    />
                )}
                {screenWidth < 768 && (
                    <div
                        className="bg-white flex justify-end p-2.5 cursor-pointer"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <span className="font-semibold mr-1.5">Filters</span>
                        <FiMenu className="text-2xl" />
                    </div>
                )}
                <div className="flex">
                    <div
                        className={
                            "absolute w-screen top-30 h-[62vh] md:w-4/12 lg:w-1/5 md:h-[90vh] md:sticky md:top-12 " +
                            (screenWidth > 768 || showFilters ? "z-10" : "-z-10")
                        }
                    >
                        <FilterProductsSideBar products={products} query={query} />
                    </div>

                    <div className="md:w-8/12 lg:w-4/5 bg-white mt-2 pb-5">
                        {filteredProducts.length === 0 ? (
                            <p className="font-semibold text-2xl text-center mt-10">
                                <span className="text-red-600">Oops!</span> No products found.
                            </p>
                        ) : (
                            <div className="flex flex-wrap">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} productData={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
