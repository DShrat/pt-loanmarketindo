import { useEffect, useState } from "react";

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
        <main>
            {rating}
        </main>
    )
}

export default Rating;