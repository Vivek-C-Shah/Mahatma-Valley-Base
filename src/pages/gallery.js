import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | Gallery">
      <NavOne />
      <PageHeader title="Gallery" />
      <Gallery />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
