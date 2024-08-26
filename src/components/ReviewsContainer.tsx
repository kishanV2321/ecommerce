import ReviewBox from "./ReviewBox";

interface Review {
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    rating: number;
}

interface ReviewsContainerProps {
    reviews: Review[];
}

const ReviewsContainer: React.FC<ReviewsContainerProps> = ({ reviews }) => {
    return (
        <div className="bg-white p-2 md:p-4">
            <div className="border p-2 md:p-4">
                <h1 className="text-xl lg:text-2xl font-semibold">Customer Reviews</h1>

                {reviews.length > 0 ? (
                    reviews.map((review, i) => (
                        <ReviewBox key={i} reviewData={review} />
                    ))
                ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default ReviewsContainer;
