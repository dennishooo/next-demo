import Link from "next/link";
import useItem from "../hooks/useItem";

export default function ItemCard({ id }: { id: string }) {
  const { item, isError, isLoading } = useItem(id);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <Link href={`/items/${id}`}>
        <h1>{item.name}</h1>
      </Link>
      <div>price: {item.price}</div>
    </>
  );
}
