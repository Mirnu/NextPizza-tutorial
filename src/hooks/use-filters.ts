import { useState } from "react";
import { useSet } from "react-use";
import { useSearchParams } from "next/navigation";

export const useFilters = () => {
    const params = useSearchParams() as unknown as Map<
        keyof QueryParams,
        string
    >;

    const [sizes, { toggle: toggleSizes }] = useSet(
        new Set<string>(params.get("sizes")?.split(",") ?? [])
    );
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
        new Set<string>(params.get("pizzaTypes")?.split(",") ?? [])
    );
    const [selectedIngredients, { toggle: onAddId }] = useSet(
        new Set<string>(params.get("ingredients")?.split(",") ?? [])
    );

    const [prices, setPrice] = useState<PriceProps>({
        priceFrom: Number(params.get("priceFrom")) ?? undefined,
        priceTo: Number(params.get("priceTo")) ?? undefined,
    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,
        });
    };

    return {
        sizes,
        toggleSizes,
        pizzaTypes,
        togglePizzaTypes,
        selectedIngredients,
        onAddId,
        prices,
        updatePrice,
        setPrice,
    };
};
