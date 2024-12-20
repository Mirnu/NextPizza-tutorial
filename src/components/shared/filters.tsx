"use client";

import { FC } from "react";
import { Input, RangeSlider, Title } from "../ui";
import { FilterCheckbox } from ".";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
    className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
    const { ingredients, loadig } = useFilterIngredients();

    const items = ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: String(ingredient.id),
    }));

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
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                    />
                </div>
                {/* Фильтр ингредиентов */}
                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
            </div>

            <CheckboxFiltersGroup
                title="Фильтрация"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loadig}
            />
        </div>
    );
};
