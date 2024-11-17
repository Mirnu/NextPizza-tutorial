import Link from "next/link";
import { FC } from "react";
import { Button, Title } from "../ui";
import { Plus } from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: FC<Props> = ({
    id,
    name,
    price,
    className,
    imageUrl,
}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="group flex justify-center py-6 px-9 bg-secondary rounded-lg h-[260px]">
                    <img
                        className="-translate-y-1 group-hover:translate-y-0 transition-all duration-200"
                        src={imageUrl}
                        alt={name}
                        width={215}
                        height={215}
                    />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                <p className="text-gray-400 text-sm">
                    Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус,
                    томаты, соус альфредо, чеснок
                </p>

                <div className="flex justify-between mt-3 items-center">
                    <span className="text-[20px]">
                        от <b>{price} ₽</b>
                    </span>

                    <Button variant="secondary" className="text-base font-bold">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
};
