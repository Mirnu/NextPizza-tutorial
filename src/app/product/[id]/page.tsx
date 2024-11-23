type params = {
    params: { id: string };
};

export default function ProductPage({ params: { id } }: params) {
    return <>Product {id}</>;
}
