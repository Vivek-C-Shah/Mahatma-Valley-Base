import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavOne";
import SliderTwo from "../components/SliderTwo";
import Footer from "../components/Footer";
import CourseCatTwo from "../components/CourseCatTwo";
import AboutOne from "../components/AboutOne";
import CourseTwo from "../components/CourseTwo";
import TeamOne from "../components/TeamOne";
import Pricing from "../components/Pricing";
import MeetingOne from "../components/MeetingOne";
import CallToActionTwo from "../components/CallToActionTwo";
import BlogThree from "../components/BlogThree";

const HomePageTwo = () => {
  return (
    <Layout pageTitle="Mahatma Valley | Home ">
      <NavTwo />
      <SliderTwo />
      <CourseCatTwo />
      <AboutOne />
      {/* <CourseTwo /> */}
      {/* <TeamOne /> */}
      {/* <Pricing /> */}
      {/* <MeetingOne /> */}
      {/* <CallToActionTwo /> */}
      {/* <BlogThree /> */}
      <Footer />
    </Layout>
  );
};

export default HomePageTwo;
