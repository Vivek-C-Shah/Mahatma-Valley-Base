import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const FaqPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | FAQ">
      <NavOne />
      <PageHeader title="FAQ" />
      <Faq />
      <Footer />
    </Layout>
  );
};

export default FaqPage;
