import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import useItem from "../../hooks/useItem";
import { env } from "../../lib/env";
import utilStyles from "../../styles/utils.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(env.API_SERVER_URL);
  console.log(context.params.id);

  let resp = await fetch(`${env.API_SERVER_URL}/items/${context.params.id}`);
  let result = await resp.json();

  return {
    props: {
      id: context.params.id,
      item: result,
    },
  };
};

//   const { item, isError, isLoading } = useItem(context.params?.id as string);
//   return {
//     props: {
//       item,
//       isError,
//       isLoading,
//     },
//   };
// };

export default function Item({ item, id }: any) {
  // { params, item, isError, isLoading }: any

  //   console.log(env.API_SERVER_URL);
  //   if (isError) return <div>failed to load</div>;
  //   if (isLoading) return <div>loading...</div>;

  console.log(item);
  console.log(id);

  return (
    <Layout>
      <Head>
        <title>{item.name}</title>
      </Head>{" "}
      <article>
        <h1 className={utilStyles.headingXl}>{item.name}</h1>
        <div className={utilStyles.lightText}>
          <div>price: {item.price}</div>
          {/* <Date dateString={postData.date} /> */}
        </div>
        <br />
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}
