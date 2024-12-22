"use client";

import { FC, useState } from "react";
import { Input, RangeSlider, Title } from "../ui";
import { FilterCheckbox } from ".";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: FC<Props> = ({ className }) => {
    const { ingredients, loading, onAddId, selectedIds } =
        useFilterIngredients();

    const [prices, setPrice] = useState<PriceProps>({
        priceFrom: 0,
        priceTo: 1000,
    });

    const items = ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: String(ingredient.id),
    }));

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,
        });
    };

    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold" />

            {/* Верхние чекбоксы */}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

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
                        value={prices.priceFrom}
                        onChange={(e) =>
                            updatePrice("priceFrom", e.target.valueAsNumber)
                        }
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={prices.priceTo}
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
                        isNaN(prices.priceFrom) ? 0 : prices.priceFrom,
                        isNaN(prices.priceTo) ? 0 : prices.priceTo,
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
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
                name="ingredients"
            />
        </div>
    );
};
