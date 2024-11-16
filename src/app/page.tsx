import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />

            <Container className="pb-14">
                <div className="flex gap-[60px]">
                    {/* фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-13">
                            Список товаров
                            {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4 ,5]} />
                            <ProductGroupList title="Комбо" items={[1, 2, 3, 4 ,5]} /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
