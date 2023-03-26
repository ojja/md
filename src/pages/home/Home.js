import React from "react";
import { useState, useEffect } from "react";
import { fetchData } from "../../lib/axiosData";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  amountAdded,
  resetValue,
} from "../../features/counter/counter-slice";
import { NavBar } from "../../layouts";
import HeroSection from "../../components/HeroSection";
import Blog from "../../components/Blog";
import HeroTitle from "../../components/HeroTitle";
import AboutSection from "../../components/AboutSection";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(amountAdded({ mitch: 3 }));
  };
  const reset = () => {
    dispatch(resetValue());
  };
  const [data, setData] = useState();
  useEffect(() => {
    fetchData("wp-json/").then((resp) => setData(resp));
  }, []);
  return (
    <>
      {!data && (
        <div>
          <h4>Loading ...</h4>
        </div>
      )}
      {data && (
        <div>
          <HeroSection/>
          <AboutSection/>
          <HeroTitle/>
          <Testimonials/>
          <Blog/>
        </div>
      )}
    </>
  );
}
