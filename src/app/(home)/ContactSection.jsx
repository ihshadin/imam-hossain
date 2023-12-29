import ContactForm from "@/components/ContactForm/ContactForm";
import SectionTitle from "@/components/Titles/SectionTitle";
import Link from "next/link";
import React from "react";
import { BsEnvelopeAtFill, BsHeadset } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="shadin-container">
        <div>
          <SectionTitle title={"Get In Touch"} subTitle={"Contact With Me"} />
        </div>
        <div className="flex flex-col md:flex-row gap-7 md:gap-2 items-center mt-8 lg:mt-14">
          <div className="flex flex-col gap-3 w-full md:w-[45%] self-start">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Don't Be Shy!
            </h3>
            <p>
              Feel Free to get in touch with me. I am always open to discussing
              new projects. Creative Ideas or opportunities to be part of your
              visions.
            </p>
            <div className="flex flex-col gap-5 mt-2 md:mt-5">
              <div className="flex items-center gap-3">
                <span className="text-[40px] text-primary">
                  <FaMapMarkedAlt />
                </span>
                <div>
                  <p className="text-base lg:text-lg font-semibold uppercase text-2 leading-none">
                    Address point
                  </p>
                  <p>Maijdee, Noakhali, Bangladesh.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[40px] text-primary">
                  <BsEnvelopeAtFill />
                </span>
                <div>
                  <p className="text-base lg:text-lg font-semibold uppercase text-2 leading-none">
                    Mail me
                  </p>
                  <Link href={"mailto:inforimamhossainshadin.com"}>
                    info@imamhossainshadin.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[40px] text-primary">
                  <BsHeadset />
                </span>
                <div>
                  <p className="text-base lg:text-lg font-semibold uppercase text-2 leading-none">
                    call me
                  </p>
                  <Link href={"tel:01858733453"}>+880 1858733453</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[55%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
