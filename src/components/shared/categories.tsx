"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";
import { FC } from "react";

interface Props {
    categories: Category[];
    className?: string;
}

export const Categories: FC<Props> = ({ categories, className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className
            )}
        >
            {categories.map(({ name, id }, index) => (
                <a
                    className={cn(
                        "py-2.5 px-5 font-bold rounded-2xl",
                        id === categoryActiveId &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    key={index}
                    href={`/#${name}`}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
