import { Html, Head, Main, NextScript } from "next/document";

// Componente para agregar hojas de estilos externas, links y informacion meta
export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        {/* Main invokes the file _app.tsx */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
