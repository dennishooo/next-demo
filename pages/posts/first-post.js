import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          // control when the third party script should be loaded
          strategy="lazyOnload"
          // load完之後做
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>First Post</h1>
        <Link href={"/"}>back to home</Link>
      </Layout>
    </>
  );
}
