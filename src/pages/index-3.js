import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import NavThree from "../components/NavThree";
import SliderOne from "../components/SliderOne";
import CourseCatThree from "../components/CourseCatThree";
// import CallToActionOne from "../components/CallToActionOne";
import TeamTab from "../components/TeamTab";
import CourseThree from "../components/CourseThree";
import CallToActionSix from "../components/CallToActionSix";
import TestimonialOne from "../components/TestimonialOne";
import VideoThree from "../components/VideoThree";
import BrandsTwo from "../components/BrandsTwo";
import CallToActionFive from "../components/CallToActionFive";

const HomePageThree = () => {
  return (
    <Layout pageTitle="Mahatma Valley | Home 3">
      <NavThree />
      <SliderOne />
      <CourseCatThree />
      {/* <CallToActionOne /> */}
      <TeamTab />
      <CourseThree />
      <CallToActionSix />
      <TestimonialOne />
      <VideoThree />
      <BrandsTwo />
      <CallToActionFive />
      <Footer />
    </Layout>
  );
};

export default HomePageThree;
