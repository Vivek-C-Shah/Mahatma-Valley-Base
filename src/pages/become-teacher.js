import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeTeacher from "../components/BecomeTeacher";
import TeamOne from "../components/TeamOne";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Mahatma Valley | Become Teacher">
      <NavOne />
      <PageHeader title="Become Teacher" />
      <BecomeTeacher />
      <TeamOne />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
