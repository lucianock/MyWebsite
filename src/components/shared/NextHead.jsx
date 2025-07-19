import Head from "next/head";

const NextHead = ({
  title = "Luciano Portfolio",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="A modern design and high-speed performance Nextjs template that can be used for Personal Portfolio Landing."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default NextHead;
