"use client";
import SectionTitle from "@/components/Titles/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegStar, FaStar, FaUser } from "react-icons/fa";
import tesImg from "@/assets/images/image-3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from "react-rating";

const TestimonialSection = () => {
  const feedbacks = [
    {
      id: 1,
      fullName: "Imam Hossain",
      username: "imamhossain",
      clientSay:
        "Dear Flex Code Team, I am writing to express my heartfelt gratitude for the incredible experience I've had using your problem-solving website, Flex Code. As someone passionate about programming and development, I have found your platform to be an invaluable resource for honing my skills and tackling real-world challenges.",
      image: tesImg,
      rating: 4,
    },
    {
      id: 2,
      fullName: "Imam Hossain",
      username: "imamhossain",
      clientSay:
        "Dear Flex Code Team, I am writing to express my heartfelt gratitude for the incredible experience I've had using your problem-solving website, Flex Code. As someone passionate about programming and development, I have found your platform to be an invaluable resource for honing my skills and tackling real-world challenges.",
      image: tesImg,
      rating: 4.5,
    },
    {
      id: 3,
      fullName: "Imam Hossain",
      username: "imamhossain",
      clientSay:
        "Dear Flex Code Team, I am writing to express my heartfelt gratitude for the incredible experience I've had using your problem-solving website, Flex Code. As someone passionate about programming and development, I have found your platform to be an invaluable resource for honing my skills and tackling real-world challenges.",
      image: tesImg,
      rating: 5,
    },
    {
      id: 4,
      fullName: "Imam Hossain",
      username: "imamhossain",
      clientSay:
        "Dear Flex Code Team, I am writing to express my heartfelt gratitude for the incredible experience I've had using your problem-solving website, Flex Code. As someone passionate about programming and development, I have found your platform to be an invaluable resource for honing my skills and tackling real-world challenges.",
      image: tesImg,
      rating: 3.5,
    },
  ];

  return (
    <section className="py-8 lg:py-16">
      <div className="shadin-container">
        <div>
          <SectionTitle
            title={"Client Testimonials"}
            subTitle={"What Clients say?"}
          />
        </div>
        <div className=" mt-10 lg:mt-14">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {feedbacks?.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className="flexcode-banner-bg p-5 md:p-5 mb-9 rounded-2xl text-white border border-1 hover:border-primary transition-all duration-300 cursor-pointer">
                  {/* <h2 className="text-xl font-semibold mb-5 line-clamp-1">
                  {feedback.thumbExpression}
                </h2> */}
                  <p className="line-clamp-6">{feedback.clientSay}</p>
                  <span className="flex flex-col-reverse mt-8 justify-between">
                    <h3 className="text-xl font-semibold mb-4 line-clamp-1">
                      ~ {feedback.fullName}
                    </h3>
                    <Rating
                      initialRating={feedback.rating}
                      readonly
                      className="flex items-center justify-center"
                      emptySymbol={
                        <FaRegStar className="text-lg mr-1 text-amber-500" />
                      }
                      fullSymbol={
                        <FaStar className="text-lg mr-1 text-amber-500" />
                      }
                    />
                  </span>
                  <div className="w-16 h-16 bg-secondary object-cover rounded-full border-primary bg-secondary-color border absolute bottom-0">
                    {feedback?.image ? (
                      <img
                        src={feedback.image.src}
                        className="w-full rounded-full p-1"
                        alt=""
                      />
                    ) : (
                      <FaUser className=" text-primary w-full h-full p-1 rounded-full" />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
