"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import Image from "next/image";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

interface Props {
    className?: string;
}

export const SearchInput: FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const ref = useRef<HTMLDivElement>(null);

    useClickAway(ref, () => setFocused(false));

    useDebounce(
        () => {
            Api.products.Search(searchQuery).then((data) => setProducts(data));
        },
        250,
        [searchQuery]
    );

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery("");
        setProducts([]);
    };

    return (
        <>
            {focused && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />
            )}

            <div
                ref={ref}
                className={cn(
                    className,
                    "flex flex-rounded-2xl flex-1 justify-between relative h-11 z-30"
                )}
            >
                <Search
                    size={20}
                    className="absolute top-1/2 translate-y-[-50%] left-3 text-gray-400"
                />
                <input
                    className="rounded-2xl outline-none pl-11 w-full bg-gray-50"
                    type="text"
                    placeholder="Найти пиццу..."
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {products.length > 0 && (
                    <div
                        className={cn(
                            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
                            focused && "visible opacity-100 top-12"
                        )}
                    >
                        {products.map((product, index) => (
                            <Link
                                key={index}
                                href={`/product/${product.id}`}
                                className="px-3 py-2 hover:bg-primary/10 flex items-center gap-2"
                                onClick={onClickItem}
                            >
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={32}
                                    height={32}
                                    className="rounded-sm"
                                />
                                <span>{product.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
