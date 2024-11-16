import { FC } from "react";
import { FilterCheckbox, Title } from ".";

interface Props {
    className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold" />
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>
        </div>
    );
};
