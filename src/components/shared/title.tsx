import clsx from "clsx";
import { createElement } from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
};

const mapClassNameBySize = {
    xs: "text-[16px]",
    sm: "text-[22px]",
    md: "text-[26px]",
    lg: "text-[32px]",
    xl: "text-[40px]",
    "2xl": "text-[48px]",
};

interface Props {
    size?: TitleSize;
    className?: string;
    text: string;
}

export const Title: React.FC<Props> = ({ text, size = "sm", className }) => {
    return createElement(
        mapTagBySize[size],
        { className: clsx(mapClassNameBySize[size], className) },
        text
    );
};
