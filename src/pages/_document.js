import { siteSettings } from "@/staticData/siteSettings";
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument({ locale, ...props }) {
  const dir =
    locale === "ar"
      ? siteSettings?.themeData?.dir
      : siteSettings?.themeData?.dir;
  const bodyClass =
    locale === "ar"
      ? siteSettings?.themeData?.mode
      : siteSettings?.themeData?.mode;

  return (
    <Html lang="en" dir={dir}>
      <Head>
        <meta name="locale" content={locale} />
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={bodyClass}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    locale: ctx?.locale || "es",
    bodyClass: ctx?.locale || "es",
  };
};

export default MyDocument;
