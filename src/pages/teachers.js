import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import CallToActionTwo from "../components/CallToActionTwo";

const TeachersPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | Teachers">
      <NavOne />
      <PageHeader title="Teachers" />
      <Teachers />
      <CallToActionTwo />
      <Footer />
    </Layout>
  );
};

export default TeachersPage;
