import React from "react";
import { TypeAnimation } from "react-type-animation";
import bannertia from "../../assets/bannerwithitial.png";
import name from "../../assets/Fortune Teller-01.png";
import tia from "../../assets/tia_00182.png";
import logo from "../../assets/Break-The-Box-Content.png";

const Page3 = () => {
  return (
    <>
      <section className="relative bg-[#F4ECE1] bg-[url('/src/assets/zodiac-01-01.png')] bg-cover bg-center bg-no-repeat bgbg bg-fixed">
        <div className="mx-auto max-w-screen-xl px-4  flex h-screen items-center">
          <div className="mx-auto max-w-7xl text-center ">
            <div className="relative mx-auto xl:h-[430px] lg:h-[350px] md:h-[250px] h-[130px]  ">
              {/* <div className="mx-auto xl:h-[430px] lg:h-[350px] md:h-[250px] h-[130px] overflow-hidden"> */}
              <img
                src={tia}
                className="absolute sm:w-96 md:w-auto -top-48 md:-top-96 md:-left-60 -left-32  z-50"
                alt=""
              />
              <img
                src={name}
                className="absolute  -top-14 md:-top-32  z-50"
                alt=""
              />
              {/* <img src={bannertia} className="mx-auto " alt="brandImage" /> */}
            </div>

            <p className=" w-[100%] textgradient text-xl md:text-3xl lg:text-4xl emad bg-gradient-to-t from-[#eb475c] to-[#fba209] bg-clip-text font-extrabold text-transparent ">
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  height: "100px",
                  display: "block",
                }}
                className="lg:h-[100px] lg:text-4xl "
                sequence={[
                  `“Your horoscope advises you to\n wear pants today. Trust us,it's for the best”`,
                  1000,
                ]}
              />
            </p>
          </div>
        </div>
        {/* “Your horoscope advises you to <br /> wear pants today. Trust us,
              it's for the best” */}
        <img
          src={logo}
          className=" lg:w-24 md:w-20 w-12 absolute bottom-8 right-8"
          alt="logo"
        />
      </section>
    </>
  );
};

export default Page3;
