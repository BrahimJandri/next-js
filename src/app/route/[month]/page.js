export default async function route({ params }) {
    const { month } = await params;

    return <div>Dynamic Routing practice for month: {month}</div>;
}