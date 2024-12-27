import { useRouter } from "next/navigation";
import qs from "qs";
import { useEffect } from "react";

export const useQueryFilters = (filter: QueryParams) => {
    const router = useRouter();

    useEffect(() => {
        const filters = {
            priceFrom: filter.priceFrom,
            priceTo: filter.priceTo,
            pizzaTypes: Array.from(filter.pizzaTypes),
            sizes: Array.from(filter.sizes),
            ingredients: Array.from(filter.ingredients),
        };

        const query = qs.stringify(filters, {
            arrayFormat: "comma",
        });
        router.push(`?${query}`, { scroll: false });
    }, [
        filter.priceTo,
        filter.priceFrom,
        filter.pizzaTypes,
        filter.sizes,
        filter.ingredients,
        router,
    ]);
};
