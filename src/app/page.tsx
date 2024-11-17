import { Container, Filters, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/ui";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />

            <Container className="mt-9 pb-14">
                <div className="flex gap-20">
                    {/* фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Пиццы"
                                products={[
                                    {
                                        id: 1,
                                        name: "Ветчина и грибы",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EF5B10B39BBBBDA9F8C4E4FF1B067C.avif",
                                        variants: [
                                            {
                                                price: 465,
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: "Жюльен",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                                        variants: [
                                            {
                                                price: 519,
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: "Двойной цыпленок",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                                        variants: [
                                            {
                                                price: 409,
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: "Пепперони фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                                        variants: [
                                            {
                                                price: 309,
                                            },
                                        ],
                                    },
                                    {
                                        id: 5,
                                        name: "Пицца из половинок",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                                        variants: [
                                            {
                                                price: 690,
                                            },
                                        ],
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title="Комбо"
                                products={[
                                    {
                                        id: 1,
                                        name: "Ветчина и грибы",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EF5B10B39BBBBDA9F8C4E4FF1B067C.avif",
                                        variants: [
                                            {
                                                price: 465,
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: "Жюльен",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                                        variants: [
                                            {
                                                price: 519,
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: "Двойной цыпленок",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                                        variants: [
                                            {
                                                price: 409,
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: "Пепперони фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                                        variants: [
                                            {
                                                price: 309,
                                            },
                                        ],
                                    },
                                    {
                                        id: 5,
                                        name: "Пицца из половинок",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:233x233/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                                        variants: [
                                            {
                                                price: 690,
                                            },
                                        ],
                                    },
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
