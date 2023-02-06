import React from "react";
import useSWR from "swr";
import ItemCard from "../../components/itemCard";
import Layout from "../../components/layout";
import useItems from "../../hooks/useItems";

export default function Profile() {
  const { items, isError, isLoading } = useItems();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return (
    <Layout>
      {items.map((item) => (
        <ItemCard key={item.id} id={item.id} />
      ))}
    </Layout>
  );
}
