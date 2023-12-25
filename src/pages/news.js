import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | News">
      <NavOne />
      <PageHeader title="News" />
      <News />
      <Footer />
    </Layout>
  );
};

export default NewsPage;
