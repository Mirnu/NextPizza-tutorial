"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";
import { ProductCard } from "./product-card";
import { Title } from "../ui";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Variant {
    price: number;
}

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    variants: Variant[];
}

interface Props {
    title: string;
    products: Product[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: FC<Props> = ({
    title,
    products,
    className,
    listClassName,
    categoryId,
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {products
                    .filter((product) => product.variants.length > 0)
                    .map((product, index) => (
                        <ProductCard
                            key={index}
                            id={product.id}
                            name={product.name}
                            price={product.variants[0].price}
                            imageUrl={product.imageUrl}
                        />
                    ))}
            </div>
        </div>
    );
};
