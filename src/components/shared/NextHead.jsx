import Head from "next/head";

const NextHead = ({
  title = "Luciano Campos Kriegl — Full Stack Developer",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Portfolio of Luciano Campos Kriegl. Full‑stack web development with PHP (Laravel), MySQL and JavaScript."
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Portfolio of Luciano Campos Kriegl. Full‑stack web development with PHP (Laravel), MySQL and JavaScript." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
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
