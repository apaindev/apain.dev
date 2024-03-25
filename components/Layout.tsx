import React from "react";
import Head from "next/head";
import GlobalStyle from "../theme/GlobalStyle";

const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Alex Pain - apain.dev</title>
      <meta
        name="description"
        content="Portfolio for Alex Pain"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta
        name="keywords"
        content="Alex Pain, alex pain, pain, 
    Alexander Pain, Alexander, Data Analyst, information, github
    alexpaindev"
      />
    </Head>
    {children}
  </>
);

export default Layout;