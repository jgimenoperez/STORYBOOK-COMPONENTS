/// <reference types="react" />
import './mylabel.css';
export interface MyProductCard {
    count: number;
    maxcount: number;
    color: string;
    shadow?: React.CSSProperties;
    background?: React.CSSProperties;
    background2?: React.CSSProperties;
    estilofinal?: React.CSSProperties;
}
export declare const MyProductCard: ({ count, maxcount, color, shadow, background, background2, estilofinal }: MyProductCard) => JSX.Element;
