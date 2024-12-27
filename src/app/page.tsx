import { Container, Filters, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/ui";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
    const categories = (
        await prisma.category.findMany({
            include: {
                products: {
                    include: {
                        ingredients: true,
                        variants: true,
                    },
                },
            },
        })
    ).filter((category) => category.products.length > 0);

    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar categories={categories} />

            <Container className="mt-9 pb-14">
                <div className="flex gap-20">
                    {/* фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map(
                                (category) =>
                                    category.products.length > 0 && (
                                        <ProductsGroupList
                                            key={category.id}
                                            title={category.name}
                                            products={category.products}
                                            categoryId={category.id}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
