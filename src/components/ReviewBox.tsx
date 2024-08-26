import { FaCircleUser } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";

interface ReviewData {
    comment: string;
    date: string; // Assuming ISO date string
    reviewerName: string;
    rating: number;
}

const ReviewBox: React.FC<{ reviewData: ReviewData }> = ({ reviewData }) => {
    const { comment, date, reviewerName, rating } = reviewData;
    const dateObj = new Date(date);

    // Formatting options for the date
    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };

    return (
        <div className="mx-2 md:mx-3 my-3 md:my-6">
            <div className="flex items-center">
                <FaCircleUser className="text-2xl self-start mt-0.5" />
                <div>
                    <p className="ml-1 font-semibold text-zinc-600">{reviewerName}</p>
                    <div className="font-semibold flex items-center mx-1">
                        <span className="mr-2">{comment}</span>
                        <div
                            className={`rounded-md px-1.5 py-0.5 text-white text-xs font-semibold flex items-center w-max ${rating >= 4 ? "bg-emerald-600" : "bg-orange-400"
                                }`}
                        >
                            {rating} <LiaStarSolid className="ml-0.5" />
                        </div>
                    </div>

                    <p className="text-zinc-500 mx-1">
                        {dateObj.toLocaleDateString("en-GB", options)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;
