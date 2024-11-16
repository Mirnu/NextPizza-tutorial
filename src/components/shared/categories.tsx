import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    className?: string;
}

const cats = [
    "Пиццы",
    "Комбо",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Напитки",
    "Десерты",
];
const activeIndex = 0;

export const Categories: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className
            )}
        >
            {cats.map((cat, index) => (
                <a
                    className={cn(
                        "py-2.5 px-5 font-bold rounded-2xl",
                        index === activeIndex &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    key={index}
                >
                    <button>{cat}</button>
                </a>
            ))}
        </div>
    );
};