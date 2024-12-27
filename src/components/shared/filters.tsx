"use client";

import { FC } from "react";
import { Input, RangeSlider, Title } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilters, useIngredients, useQueryFilters } from "@/hooks";

interface Props {
    className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
    const { ingredients, loading } = useIngredients();

    const {
        pizzaTypes,
        togglePizzaTypes,
        sizes,
        toggleSizes,
        selectedIngredients,
        onAddId,
        prices,
        updatePrice,
        setPrice,
    } = useFilters();

    useQueryFilters({
        ...prices,
        pizzaTypes: pizzaTypes,
        sizes: sizes,
        ingredients: selectedIngredients,
    });

    const items = ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: String(ingredient.id),
    }));

    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold" />

            {/* Верхние чекбоксы */}
            <CheckboxFiltersGroup
                name="pizzaTypes"
                title="Тип теста"
                className="mb-5"
                loading={loading}
                onClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                items={[
                    { text: "Тонкое", value: "1" },
                    { text: "Традиционное", value: "2" },
                ]}
            />

            <CheckboxFiltersGroup
                name="sizes"
                title="Размеры"
                className="mb-5"
                loading={loading}
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    { text: "20 см", value: "20" },
                    { text: "30 см", value: "30" },
                    { text: "40 см", value: "40" },
                ]}
            />

            {/* Фильтр цен */}
            <div className="mt-5 border-y border-neutral-100 pt-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        defaultValue={0}
                        value={prices?.priceFrom}
                        onChange={(e) =>
                            updatePrice("priceFrom", e.target.valueAsNumber)
                        }
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={prices?.priceTo}
                        onChange={(e) =>
                            updatePrice("priceTo", e.target.valueAsNumber)
                        }
                    />
                </div>
                {/* Фильтр ингредиентов */}
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[
                        !prices?.priceFrom || isNaN(prices.priceFrom)
                            ? 0
                            : prices.priceFrom,
                        !prices?.priceTo || isNaN(prices.priceTo)
                            ? 1000
                            : prices.priceTo,
                    ]}
                    onValueChange={([priceFrom, priceTo]) =>
                        setPrice({ priceFrom, priceTo })
                    }
                />
            </div>

            <CheckboxFiltersGroup
                title="Фильтрация"
                className="mt-5"
                limit={6}
                defaultItems={[...items]
                    .sort(({ value: value1 }, { value: value2 }) =>
                        selectedIngredients.has(value1)
                            ? selectedIngredients.has(value2)
                                ? 0
                                : -1
                            : 0
                    )
                    .slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selected={selectedIngredients}
                name="ingredients"
            />
        </div>
    );
};
