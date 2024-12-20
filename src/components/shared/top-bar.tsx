import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

interface Props {
    className?: string;
}

export const TopBar: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
                className
            )}
        >
            <Container>
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};
