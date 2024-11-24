import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const search = async (query: string) => {
    const { data } = await axiosInstance.get<Product[]>(
        ApiRoutes.products.search.name,
        {
            params: { query },
        }
    );
    return data;
};
