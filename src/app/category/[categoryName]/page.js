export default async function categoryName({params}) {
    const { categoryName } = await params;

    return <div>Category page for: {categoryName}</div>;
}