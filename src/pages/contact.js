import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | Contact">
      <NavOne />
      <PageHeader title="Contact" />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
