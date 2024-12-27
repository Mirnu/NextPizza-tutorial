interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryParams extends PriceProps {
    pizzaTypes: Set<string>;
    sizes: Set<string>;
    ingredients: Set<string>;
}
