export default async function product({ params }) {
    const { categoryName, productId } = await params;
    return <div>Product page for category: {categoryName} and product ID: {productId}</div>;
}