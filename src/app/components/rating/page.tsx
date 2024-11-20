import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
    rate: number;
}

const Rating: React.FC<RatingProps> = ({ rate }) => {
    const [rating, setRating] = useState<number>(0);

    useEffect(() => {
        const countRate = () => {
            setRating(Math.round(rate));
        }
        countRate();
    })

    return(
        <main className="flex flex-row">
            {[...Array(5)].map((_, index) => (
                <Star key={index} fill={index < rating ? "yellow" : "none"} />
            ))}
        </main>
    )
}

export default Rating;