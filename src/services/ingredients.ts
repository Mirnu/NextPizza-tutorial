import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getAll = async () => {
    const { data } = await axiosInstance.get<Ingredient[]>(
        ApiRoutes.ingredients.name
    );
    return data;
};
