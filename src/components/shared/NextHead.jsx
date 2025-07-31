import Head from "next/head";

const NextHead = ({
  title = "Luciano - Full Stack Developer",
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
      
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GYCKZLS5ZB"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GYCKZLS5ZB');
          `,
        }}
      />
    </Head>
  );
};

export default NextHead;
