import { ReviewProps } from "./ReviewProps";

export interface MovieProps {
    id: number;
    title: string;
    subTitle: string;
    synopsis: string;
    year: number;
    imgUrl: string;
    genreId: number;
    reviews: ReviewProps [];
}