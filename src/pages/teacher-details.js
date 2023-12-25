import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import TeachersDetails from "../components/TeachersDetails";

const TeachersDetailsPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | Teachers Details">
      <NavOne />
      <PageHeader title="Teachers Details" />
      <TeachersDetails />
      <Footer />
    </Layout>
  );
};

export default TeachersDetailsPage;
