import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsDetails from "../components/NewsDetails";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | News Details">
      <NavOne />
      <PageHeader title="News Details" />
      <NewsDetails />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
