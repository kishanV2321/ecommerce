import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addDiscounts, addSubTotalsWithoutDiscount, removeCartItem } from "../store/cartSlice";
import { getCalculatedAmount } from "../utils/helper";

interface Product {
    id: string;
    title: string;
    brand: string;
    price: number;
    discountPercentage: number;
    availabilityStatus: string;
    minimumOrderQuantity: number;
    images: string[];
}

interface CartProductProps {
    index: number;
    product: Product;
}

const CartProduct: React.FC<CartProductProps> = ({ index, product }) => {
    const dispatch = useDispatch();
    const [subtotal, setSubtotal] = useState<number>(0);
    const [productQuantity, setProductQuantity] = useState<number>(0);

    const {
        id,
        title,
        brand,
        price,
        discountPercentage,
        availabilityStatus,
        minimumOrderQuantity,
        images,
    } = product;

    const [originalPrice, discount] = useMemo(
        () => getCalculatedAmount(price, discountPercentage),
        [price, discountPercentage]
    );

    // Setting the minimum order quantity of the product
    useEffect(() => {
        setProductQuantity(minimumOrderQuantity);
    }, [minimumOrderQuantity]);

    // Modifying the subtotal and discount for the particular product
    useEffect(() => {
        const calculatedSubtotal = productQuantity * originalPrice;
        setSubtotal(calculatedSubtotal);
        dispatch(
            addSubTotalsWithoutDiscount({
                index,
                price: productQuantity * Math.round(price * 85),
            })
        );
        dispatch(
            addDiscounts({
                index,
                discount:
                    productQuantity * Math.round(price * 85) - calculatedSubtotal,
            })
        );
    }, [productQuantity, originalPrice, dispatch, index, price]);

    const increaseQuantity = () => {
        setProductQuantity(productQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (productQuantity > minimumOrderQuantity) {
            setProductQuantity(productQuantity - 1);
        }
    };

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(id));
    };

    return (
        <div className="flex md:px-2 py-5 border-b">
            <div>
                <div className="w-36 h-36 flex justify-center">
                    <img src={images[0]} alt={title} className="h-full p-1" />
                </div>
                <div className="text-center mt-1">
                    <button
                        className="border border-zinc-300 w-8 py-1 font-semibold"
                        onClick={decreaseQuantity}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        className="border border-zinc-300 outline-none w-14 text-center py-1 font-semibold mx-1"
                        value={productQuantity}
                        onChange={(e) => {
                            const newQuantity = Number(e.target.value);
                            if (newQuantity >= minimumOrderQuantity) {
                                setProductQuantity(newQuantity);
                            }
                        }}
                    />
                    <button
                        className="border border-zinc-300 w-8 py-1 font-semibold"
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="ml-2 md:ml-4 w-full relative">
                <p
                    className="absolute -top-5 right-5 font-bold text-red-600 cursor-pointer text-sm"
                    onClick={handleRemoveCartItem}
                >
                    REMOVE
                </p>
                <h1 className="font-semibold text-lg md:text-xl">{title}</h1>
                <p className="text-zinc-500 font-semibold text-sm md:my-1">{brand}</p>
                {availabilityStatus === "Out of stock" && (
                    <p className="text-sm md:text-lg font-semibold text-red-600 my-2">
                        {availabilityStatus}
                    </p>
                )}

                <div className="flex flex-col md:flex-row md:items-center mt-1 md:mt-2">
                    <h1 className="text-xl md:text-2xl font-semibold">
                        {"₹ " + originalPrice.toLocaleString("en-IN")}
                    </h1>
                    <div className="flex items-center text-sm md:text-base">
                        <p className="md:ml-3 text-zinc-500 line-through">
                            {"₹" + Math.round(price * 85).toLocaleString("en-IN")}
                        </p>
                        <p className="ml-3 text-emerald-600 font-semibold">
                            {discount + "% off"}
                        </p>
                    </div>
                </div>

                <p className="mt-1.5 md:mt-3 font-semibold text-sm md:text-base">
                    {"Minimum order quantity: " + minimumOrderQuantity}
                </p>

                <p className="absolute mt-2 md:mt-0 md:bottom-1 md:right-5 font-semibold text-sm md:text-lg">
                    Subtotal ({productQuantity} items): ₹
                    {subtotal.toLocaleString("en-IN")}
                </p>
            </div>
        </div>
    );
};

export default CartProduct;
