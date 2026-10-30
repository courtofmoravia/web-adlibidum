import React, { useState, useEffect, useRef } from 'react';
import { CONTENT } from './content';

import imgBoxImg from './assets/box-outside.png';
import imgBoxImg1 from './assets/box-inside.png';
import imgRectangle65 from './assets/review-face1.png';
import imgBoxShadow from './assets/box-shadow2.svg';
import imgLogo from './assets/adlibidum-logo.svg';
import imgBoxShadow1 from './assets/box-shadow.svg';

import svgHeadlineExperience from './assets/headline-experience.svg';
import svgHeadlineImagine from './assets/headline-imagine.svg';
import svgHeadlineInside from './assets/headline-inside.svg';
import svgHeadlineReviews from './assets/headline-reviews.svg';
import svgHeadlineAbout from './assets/headline-about.svg';
import svgHeadlineFaq from './assets/headline-faq.svg';

export default function App() {
  const [activeReview, setActiveReview] = useState(2);
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const experienceRef = useRef<HTMLDivElement>(null);
  const [experienceOffset, setExperienceOffset] = useState(70);

  const imagineRef = useRef<HTMLDivElement>(null);
  const [imagineOffset, setImagineOffset] = useState(60);

  const insideRef = useRef<HTMLDivElement>(null);
  const [insideOffset, setInsideOffset] = useState(50);

  const reviewsRef = useRef<HTMLDivElement>(null);
  const [reviewsOffset, setReviewsOffset] = useState(50);

  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutOffset, setAboutOffset] = useState(40);

  const faqRef = useRef<HTMLDivElement>(null);
  const [faqOffset, setFaqOffset] = useState(40);

  useEffect(() => {
    const calcSectionOffset = (ref: React.RefObject<HTMLDivElement | null>, start: number, range: number) => {
      if (!ref.current) return start;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1.4, (windowHeight - rect.top) / (windowHeight + rect.height * 0.4)));
      return start - progress * range;
    };

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setExperienceOffset(calcSectionOffset(experienceRef, 85, 150));
      setImagineOffset(calcSectionOffset(imagineRef, 75, 135));
      setInsideOffset(calcSectionOffset(insideRef, 65, 120));
      setReviewsOffset(calcSectionOffset(reviewsRef, 65, 120));
      setAboutOffset(calcSectionOffset(aboutRef, 65, 120));
      setFaqOffset(calcSectionOffset(faqRef, 50, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterStatus("success");
      setTimeout(() => {
        setNewsletterStatus("idle");
        setNewsletterEmail("");
      }, 4000);
    }
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setOrderModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-fg flex flex-col items-center w-full overflow-x-hidden selection:bg-brand-ac selection:text-brand-bg" data-node-id="1:2">
      {/* Menu bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out border-b ${
          scrolled
            ? "pt-6 pb-3 sm:py-3.5 bg-brand-bg/85 backdrop-blur-sm border-brand-fg/5"
            : "pt-7 pb-4 sm:py-8 bg-brand-bg/50 backdrop-blur-sm border-transparent"
        }`}
        style={{ boxShadow: 'none' }}
      >
        <a
          href="#"
          className="transition-transform duration-300 hover:scale-105 inline-flex items-center justify-center"
          aria-label="Adlibidum Home"
          data-node-id="1:16"
        >
          <img
            src={imgLogo}
            alt="ADLIBIDUM"
            className={`w-auto block transition-all duration-300 ease-in-out ${
              scrolled ? "h-[22px] sm:h-[28px]" : "h-[34px] sm:h-[42px]"
            }`}
          />
        </a>
      </header>

      {/* Dynamic island spacer */}
      <div className="h-28 sm:h-32 md:h-28 w-full shrink-0" />

      {/* Hero section */}
      <section
        className="min-h-[80svh] w-full relative flex flex-col items-center justify-center py-12 sm:py-20 px-6 overflow-hidden bg-gradient-to-b from-brand-bg via-brand-bg/90 to-brand-bg"
        data-node-id="1:3"
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 items-center">

          <div className="lg:col-span-8 flex flex-col items-center lg:items-end justify-center relative order-2 lg:order-1 z-10" data-node-id="1:5">
            <div className="relative w-[98vw] max-w-[98vw] sm:w-full sm:max-w-[750px] lg:max-w-[1100px] xl:max-w-[1250px] aspect-[16/10] flex items-center justify-center">
              <img
                src={imgBoxImg1}
                alt="AdLibidum krabice"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_30px_60px_rgba(7,4,42,0.2)] relative z-10 transition duration-700 hover:rotate-1 hover:scale-105"
              />
              <img
                src={imgBoxShadow}
                alt=""
                aria-hidden="true"
                className="absolute -bottom-8 sm:-bottom-12 w-[125%] max-w-none pointer-events-none opacity-75 z-0"
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:-ml-40 xl:-ml-48 order-1 lg:order-2 z-20" data-node-id="1:7">
            <div className="bg-brand-bg/85 backdrop-blur-md rounded-[28px] p-6 sm:p-10 xl:p-12 border border-black/10 shadow-[0_20px_50px_rgba(7,4,42,0.15)] w-full max-w-[580px] flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-4 sm:gap-6" data-node-id="1:8">
                <h1
                  className="font-caslon-bold text-[28px] sm:text-[34px] xl:text-[40px] uppercase text-brand-fg leading-[1.2] tracking-tight"
                  data-node-id="1:9"
                  style={{ fontFeatureSettings: '"liga" 0' }}
                >
                  {CONTENT.hero.title}
                </h1>
                {CONTENT.hero.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-caslon-regular text-[17px] sm:text-[19px] text-brand-fg leading-[1.4]"
                    data-node-id="1:10"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2" data-node-id="1:11">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="bg-brand-ac hover:bg-brand-fg/90 active:scale-95 transition duration-200 text-brand-bg font-caslon-bold text-[17px] sm:text-[19px] uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-[90px] shadow-lg shadow-brand-ac/25 cursor-pointer"
                  data-node-id="1:12"
                >
                  {CONTENT.hero.buttons.order}
                </button>
                <a
                  href="#experience"
                  className="border-2 border-brand-ac hover:bg-brand-ac/10 active:scale-95 transition duration-200 text-brand-ac font-caslon-bold text-[17px] sm:text-[19px] uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-[90px] cursor-pointer text-center"
                  data-node-id="1:14"
                >
                  {CONTENT.hero.buttons.more}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section
        id="experience"
        ref={experienceRef}
        className="w-full relative flex flex-col items-center pt-16 sm:pt-24 pb-28 sm:pb-40 px-6 overflow-hidden"
        data-node-id="1:17"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center relative" data-node-id="1:30">
          <div className="w-full max-w-[1000px] flex justify-center select-none" data-node-id="1:31">
            <img
              src={svgHeadlineExperience}
              alt="EXPERIENCE"
              className="w-full h-auto max-h-[140px] sm:max-h-[180px] lg:max-h-[220px] object-contain pointer-events-none"
              style={{ borderStyle: 'none', borderColor: 'rgba(0, 0, 0, 0)' }}
            />
          </div>
          <div
            style={{
              transform: `translateY(${experienceOffset}px)`,
              transition: 'transform 0.01s linear',
            }}
            className="bg-brand-bg border border-brand-fg drop-shadow-[0px_10px_25px_rgba(7,4,42,0.20)] rounded-[24px] p-6 sm:p-10 md:p-16 relative z-10 max-w-[640px] w-full text-left mt-2 sm:mt-4 will-change-transform"
            data-node-id="1:32"
          >
            <p
              className="font-caslon-regular text-[16px] sm:text-[18px] md:text-[20px] text-brand-fg leading-[1.5]"
              data-node-id="1:33"
            >
              {CONTENT.experience.text}
            </p>
          </div>
          <div
            style={{
              transform: `translateY(${experienceOffset}px)`,
              transition: 'transform 0.01s linear',
            }}
            className="bg-brand-bg border border-brand-fg drop-shadow-[0px_10px_25px_rgba(7,4,42,0.20)] rounded-[24px] p-6 sm:p-10 md:p-16 relative z-10 max-w-[640px] w-full text-left mt-2 sm:mt-4 will-change-transform"
            data-node-id="1:32"
          >
            <p
              className="font-caslon-regular text-[16px] sm:text-[18px] md:text-[20px] text-brand-fg leading-[1.5]"
              data-node-id="1:33"
            >
              {CONTENT.experience.text2}
            </p>
          </div>
          <div
            style={{
              transform: `translateY(${experienceOffset}px)`,
              transition: 'transform 0.01s linear',
            }}
            className="bg-brand-bg border border-brand-fg drop-shadow-[0px_10px_25px_rgba(7,4,42,0.20)] rounded-[24px] p-6 sm:p-10 md:p-16 relative z-10 max-w-[640px] w-full text-left mt-2 sm:mt-4 will-change-transform"
            data-node-id="1:32"
          >
            <p
              className="font-caslon-regular text-[16px] sm:text-[18px] md:text-[20px] text-brand-fg leading-[1.5]"
              data-node-id="1:33"
            >
              {CONTENT.experience.text3}
            </p>
          </div>
        </div>
      </section>

      {/* Imagine section */}
      <section
        ref={imagineRef}
        className="w-full relative flex flex-col items-center pt-20 sm:pt-28 pb-28 sm:pb-36 px-6 overflow-hidden"
        data-node-id="1:39"
      >
        <div className="w-full max-w-[1440px] flex flex-col items-center">
          <div className="w-full max-w-[800px] flex justify-center select-none" data-node-id="1:40">
            <img
              src={svgHeadlineImagine}
              alt="IMAGINE"
              className="w-full h-auto max-h-[140px] sm:max-h-[180px] lg:max-h-[220px] object-contain pointer-events-none"
            />
          </div>

          {/* 3 pills */}
          <div
            style={{
              transform: `translateY(${imagineOffset}px)`,
              transition: 'transform 0.01s linear',
            }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 relative z-10 max-w-[1300px] mt-2 sm:mt-4 will-change-transform"
            data-node-id="1:41"
          >
            {CONTENT.imagine.pills.map((pill, idx) => {
              const alignClass = idx === 0 ? "justify-start lg:translate-y-0" : idx === 1 ? "justify-center lg:translate-y-8" : "justify-end lg:translate-y-16";
              return (
                <div key={idx} className={`flex flex-col items-center ${alignClass}`}>
                  <div className="bg-brand-bg border border-brand-fg drop-shadow-[0px_10px_20px_rgba(7,4,42,0.18)] rounded-full flex flex-col items-center justify-center px-8 py-16 sm:px-12 sm:py-20 min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] w-full max-w-[400px] text-center transition hover:shadow-2xl duration-300">
                    <div className="flex flex-col gap-6 items-center max-w-[280px] sm:max-w-[310px]">
                      <h3 className="font-caslon-semibold text-[26px] sm:text-[30px] lg:text-[32px] uppercase text-brand-fg tracking-wider" style={{ fontFeatureSettings: '"liga" 0' }}>
                        {pill.title}
                      </h3>
                      <p className="font-caslon-regular text-[16px] sm:text-[18px] lg:text-[20px] text-brand-fg leading-[1.4]">
                        {pill.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inside section */}
      <section
        ref={insideRef}
        className="w-full relative flex flex-col items-center pt-24 sm:pt-36 pb-20 sm:pb-32 px-6 overflow-hidden"
        data-node-id="1:57"
      >
        <div className="w-full max-w-[1300px] flex flex-col items-center relative">
          <div className="w-full max-w-[650px] flex justify-center select-none" data-node-id="1:58">
            <img
              src={svgHeadlineInside}
              alt="INSIDE"
              className="w-full h-auto max-h-[140px] sm:max-h-[180px] lg:max-h-[220px] object-contain pointer-events-none"
            />
          </div>

          <div
            style={{
              transform: `translateY(${insideOffset}px)`,
              transition: 'transform 0.01s linear',
            }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-2 sm:mt-4 relative z-10 will-change-transform"
          >
            {/* Box details */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-1" data-node-id="1:61">
              <div className="bg-brand-fg text-brand-bg border border-brand-fg drop-shadow-[0px_10px_25px_rgba(7,4,42,0.35)] rounded-[24px] p-8 sm:p-10 xl:p-14 flex flex-col gap-6 w-full max-w-[480px]">
                <h3
                  className="font-caslon-bold text-[26px] sm:text-[32px] uppercase tracking-wide text-brand-bg"
                  data-node-id="1:62"
                  style={{ fontFeatureSettings: '"liga" 0' }}
                >
                  {CONTENT.inside.title}
                </h3>
                <ul className="flex flex-col gap-3 font-caslon-regular text-[18px] sm:text-[20px] text-gray-200 list-disc list-inside">
                  {CONTENT.inside.items.map((item, i) => (
                    <li key={i} className="leading-[1.4]">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-center justify-center relative order-1 lg:order-2" data-node-id="1:59">
              <div className="relative w-full max-w-[800px] aspect-[4/3] flex items-center justify-center">
                <img
                  src={imgBoxImg1}
                  alt="Obsah krabice AdLibidum"
                  className="w-full h-full object-contain pointer-events-none relative z-10 transition duration-500 hover:scale-105"
                  data-node-id="1:64"
                />
                <img
                  src={imgBoxShadow1}
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-10 w-[120%] max-w-none pointer-events-none opacity-80 z-0"
                  data-node-id="1:60"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-16 sm:mt-20 text-center" data-node-id="1:65">
            <button
              onClick={() => setOrderModalOpen(true)}
              className="bg-brand-ac hover:bg-brand-fg/90 active:scale-95 transition duration-200 text-brand-bg font-caslon-bold text-[22px] sm:text-[28px] uppercase px-12 sm:px-20 py-4 sm:py-5 rounded-[90px] shadow-xl shadow-brand-ac/25 cursor-pointer"
              data-node-id="1:67"
            >
              {CONTENT.inside.button}
            </button>
            <p className="font-caslon-regular text-[15px] sm:text-[17px] text-brand-fg max-w-[420px] leading-[1.3]" data-node-id="1:66">
              {CONTENT.inside.faqNotePrefix}{" "}
              <a href="#faq" className="text-brand-ac underline hover:text-brand-fg font-caslon-semibold hover:opacity-80 transition">
              </a>
              {CONTENT.inside.faqNoteSuffix}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section
        ref={reviewsRef}
        className="w-full relative flex flex-col items-center pt-20 sm:pt-32 pb-24 sm:pb-36 px-6 overflow-hidden"
        data-node-id="1:69"
      >
        <div className="w-full max-w-[1440px] flex flex-col items-center relative" data-node-id="1:70">
          <div className="w-full max-w-[800px] flex justify-center select-none" data-node-id="1:71">
            <img
              src={svgHeadlineReviews}
              alt="REVIEWS"
              className="w-full h-auto max-h-[140px] sm:max-h-[180px] lg:max-h-[220px] object-contain pointer-events-none"
            />
          </div>

          <div
            style={{
              transform: `translateY(${reviewsOffset}px)`,
              transition: 'transform 0.01s linear',
              height: 'fit-content',
            }}
            className="w-full relative z-10 overflow-hidden pt-[64px] pb-[64px] will-change-transform"
          >
            <div
              className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(calc(50% - ${(activeReview + 0.5)} * min(580px, 85vw)))`,
              }}
            >
              {CONTENT.reviews.map((review, idx) => {
                const isActive = activeReview === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveReview(idx)}
                    style={{ width: 'min(580px, 85vw)' }}
                    className={`shrink-0 px-3 sm:px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
                      isActive
                        ? "opacity-100 cursor-default"
                        : "opacity-25 hover:opacity-40 cursor-pointer"
                    }`}
                  >
                    <div
                      className={`bg-brand-bg border rounded-[24px] p-8 sm:p-12 xl:p-14 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "border-brand-fg drop-shadow-[0px_10px_25px_rgba(7,4,42,0.22)]"
                          : "border-brand-fg/40 drop-shadow-none"
                      }`}
                      data-node-id={isActive ? "1:72" : undefined}
                    >
                      <p
                        className="font-caslon-regular text-[19px] sm:text-[22px] md:text-[24px] text-[#07042a] leading-[1.4]"
                        data-node-id={isActive ? "1:73" : undefined}
                      >
                        {review.quote}
                      </p>

                      <div className="flex items-center gap-5 pt-6" data-node-id={isActive ? "1:74" : undefined}>
                        <div
                          className="w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden shrink-0 border border-black/10 bg-gray-100"
                          data-node-id={isActive ? "1:75" : undefined}
                        >
                          <img
                            src={imgRectangle65}
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col text-brand-fg" data-node-id={isActive ? "1:76" : undefined}>
                          <h4 className="font-caslon-bold text-[20px] sm:text-[22px]" data-node-id={isActive ? "1:77" : undefined}>
                            {review.name}
                          </h4>
                          <p className="font-caslon-regular text-[16px] sm:text-[18px] text-gray-700" data-node-id={isActive ? "1:78" : undefined}>
                            {review.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 pt-6 sm:pt-8" data-node-id="1:79">
            {CONTENT.reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReview(idx)}
                aria-label={`Přejít na recenzi ${idx + 1}`}
                className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full cursor-pointer ${
                  activeReview === idx
                    ? "w-6 h-6 bg-brand-ac scale-110 shadow-sm"
                    : "w-6 h-6 border-2 border-brand-ac hover:bg-brand-ac/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        id="about"
        ref={aboutRef}
        className="w-full relative flex flex-col items-center pt-16 sm:pt-24 pb-28 sm:pb-40 px-6 overflow-hidden"
        data-node-id="1:17"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center relative" data-node-id="1:30">
          {/* Nadpis ABOUT */}
          <div className="w-full max-w-[1000px] flex justify-center select-none" data-node-id="1:31">
            <img
              src={svgHeadlineAbout}
              alt="ABOUT"
              className="w-full h-auto max-h-[140px] sm:max-h-[180px] lg:max-h-[220px] object-contain pointer-events-none"
              style={{ borderStyle: 'none', borderColor: 'rgba(0, 0, 0, 0)' }}
            />
          </div>

          <div className="flex flex-col items-center text-center mt-6 mb-12 text-brand-fg">
            <p className="font-caslon-regular text-base sm:text-xl mb-6">
              {CONTENT.about.headlinePrefix}
            </p>

            <div className="flex flex-col gap-1 pt-8 pb-16 items-start">
              {CONTENT.about.team.map((member, i) => (
                <div key={i} className="flex items-center text-base sm:text-xl tracking-wide">
                  <span className="w-[140px] sm:w-[160px] text-right uppercase font-roboto-condensed font-normal pr-4">
                    {member.role}
                  </span>

                  <span className="text-left uppercase font-roboto-condensed font-extrabold">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              transform: `translateY(${aboutOffset}px)`,
              transition: 'transform 0.01s linear',
            }}
            className="bg-brand-bg border border-brand-fg drop-shadow-[0px_10px_25px_rgba(7,4,42,0.20)] rounded-[24px] p-6 sm:p-10 md:p-16 relative z-10 max-w-[640px] w-full text-left will-change-transform"
            data-node-id="1:32"
          >
            <p
              className="font-caslon-regular text-base sm:text-[18px] md:text-[20px] text-brand-fg leading-[1.5]"
              data-node-id="1:33"
            >
              {CONTENT.about.paragraph}

              <span className="relative inline-block group cursor-pointer border-b border-brand-fg pb-[1px]">
                {CONTENT.about.interactiveText}.

                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#07042a] text-white text-xs sm:text-sm rounded whitespace-nowrap shadow-lg z-20">
                  {CONTENT.about.tooltipText}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#07042a]" />
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter banner */}
      <section
        className="w-full py-16 sm:py-24 px-6 flex items-center justify-center bg-brand-fg/2 border-y border-brand-fg/15"
        data-node-id="1:34"
      >
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6 sm:gap-10 xl:gap-14 items-center justify-center text-center" data-node-id="1:35">
          <p
            className="font-caslon-regular text-[16px] sm:text-[16px] md:text-[24px] text-brand-fg brand-bgspace-nowrap shrink-0"
            data-node-id="1:36"
            style={{ fontFeatureSettings: '"liga" 0' }}
          >
            {CONTENT.newsletter.title}
          </p>

          <form onSubmit={handleNewsletterSubmit} className="w-full max-w-[560px]">
            <div className="relative flex items-center w-full bg-brand-bg border border-brand-fg rounded-[90px] p-1.5 sm:p-2 shadow-[0px_4px_16px_rgba(7,4,42,0.06)] focus-within:border-brand-ac transition-colors">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={CONTENT.newsletter.placeholder}
                className="flex-1 bg-transparent px-5 sm:px-7 py-2.5 sm:py-3 font-caslon-regular text-[17px] sm:text-[20px] text-brand-fg placeholder-brand-fg/45 focus:outline-none min-w-0"
                required
              />
              <button
                type="submit"
                className="bg-brand-ac hover:bg-brand-fg/90 active:scale-95 transition-all text-brand-bg font-caslon-bold text-[16px] sm:text-[20px] uppercase px-6 sm:px-10 py-3 sm:py-3.5 rounded-[90px] cursor-pointer brand-bgspace-nowrap shadow-md shrink-0"
                data-node-id="1:37"
              >
                {newsletterStatus === "success" ? CONTENT.newsletter.successButton : CONTENT.newsletter.button}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ section */}
      <section
        id="faq"
        ref={faqRef}
        className="w-full relative flex flex-col items-center pt-16 sm:pt-24 pb-24 sm:pb-36 px-6 overflow-hidden"
        data-node-id="1:98"
      >
        <div className="w-full max-w-[1000px] flex flex-col items-center">
          <div className="w-full max-w-[440px] flex justify-center mb-8 sm:mb-12 select-none" data-node-id="1:99">
            <img
              src={svgHeadlineFaq}
              alt="F.A.Q."
              className="w-full h-auto max-h-[140px] sm:max-h-[180px] lg:max-h-[220px] object-contain pointer-events-none"
            />
          </div>

          {/* Accordion list */}
          <div
            style={{
              transform: `translateY(${faqOffset}px)`,
              transition: 'transform 0.01s linear',
            }}
            className="w-full flex flex-col divide-y divide-brand-fg will-change-transform"
            data-node-id="1:100"
          >
            {CONTENT.faq.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className="py-6 sm:py-8 flex flex-col gap-4 transition duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    className="w-full flex items-start justify-between text-left group cursor-pointer"
                  >
                    <span
                      className="font-caslon-regular text-[22px] sm:text-[28px] lg:text-[32px] text-brand-fg leading-[1.2] pr-6 group-hover:text-brand-ac transition"
                    >
                      {item.question}
                    </span>
                    <span className="font-caslon-bold text-[28px] text-brand-ac shrink-0 leading-none select-none transition transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-0 sm:pl-12 md:pl-24 pt-2 text-brand-fg animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="font-caslon-regular text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.5] max-w-[800px] text-gray-800">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full border-t border-brand-ac flex flex-col gap-8 sm:gap-10 items-center justify-center px-6 py-12 sm:py-16 bg-brand-bg"
        data-node-id="1:126"
      >
        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8" data-node-id="1:127">
          <button
            onClick={() => alert("Obchodní podmínky budou k dispozici při zahájení prodeje.")}
            className="bg-brand-ac hover:bg-brand-fg/90 active:scale-95 transition text-brand-bg font-caslon-bold text-[16px] sm:text-[19px] uppercase px-8 sm:px-12 py-3 rounded-[90px] cursor-pointer"
            data-node-id="1:128"
          >
            {CONTENT.footer.buttons.terms}
          </button>
          <button
            onClick={() => alert("Ochrana osobních údajů je zajištěna v souladu s GDPR.")}
            className="bg-brand-ac hover:bg-brand-fg/90 active:scale-95 transition text-brand-bg font-caslon-bold text-[16px] sm:text-[19px] uppercase px-8 sm:px-12 py-3 rounded-[90px] cursor-pointer"
            data-node-id="1:130"
          >
            {CONTENT.footer.buttons.privacy}
          </button>
          <button
            onClick={() => alert("Návody k použití jsou součástí herní krabice.")}
            className="bg-brand-ac hover:bg-brand-fg/90 active:scale-95 transition text-brand-bg font-caslon-bold text-[16px] sm:text-[19px] uppercase px-8 sm:px-12 py-3 rounded-[90px] cursor-pointer"
            data-node-id="1:132"
          >
            {CONTENT.footer.buttons.guides}
          </button>
        </div>

        {/* Links */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-caslon-regular text-[18px] sm:text-[20px] text-brand-fg"
          data-node-id="1:134"
        >
          <p className="flex items-center gap-2">
            <a
              href={`tel:${CONTENT.footer.contact.phone.replace(/\s+/g, '')}`}
              className="text-brand-ac underline hover:text-brand-fg/90 transition"
              data-node-id="1:135"
            >
              {CONTENT.footer.contact.phone}
            </a>
            <span className="text-gray-600">{CONTENT.footer.contact.phoneHours}</span>
          </p>

          <a
            href={`mailto:${CONTENT.footer.contact.email}`}
            className="text-brand-ac underline hover:text-brand-fg/90 transition"
            data-node-id="1:136"
          >
            {CONTENT.footer.contact.email}
          </a>
        </div>
      </footer>

      {/* Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-brand-bg rounded-[24px] border border-brand-fg shadow-2xl p-6 sm:p-10 max-w-lg w-full relative">
            <button
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-5 right-5 text-2xl font-caslon-bold text-gray-500 hover:text-black cursor-pointer"
            >
              ✕
            </button>
            <h3 className="font-caslon-bold text-[28px] uppercase text-brand-fg mb-2">
              {CONTENT.modal.title}
            </h3>
            <p className="font-caslon-regular text-[16px] text-gray-600 mb-6">
              {CONTENT.modal.subtitle}
            </p>

            {orderSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center font-caslon-regular">
                <p className="font-caslon-bold text-xl mb-1">{CONTENT.modal.successTitle}</p>
                <p className="text-sm">{CONTENT.modal.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-caslon-bold text-sm uppercase text-brand-fg mb-1">
                    {CONTENT.modal.labels.name}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={CONTENT.modal.labels.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-ac focus:outline-none font-caslon-regular"
                  />
                </div>
                <div>
                  <label className="block font-caslon-bold text-sm uppercase text-brand-fg mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={CONTENT.modal.labels.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-ac focus:outline-none font-caslon-regular"
                  />
                </div>
                <div>
                  <label className="block font-caslon-bold text-sm uppercase text-brand-fg mb-1">
                    {CONTENT.modal.labels.address}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={CONTENT.modal.labels.addressPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-ac focus:outline-none font-caslon-regular"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-brand-ac hover:bg-brand-fg/90 active:scale-95 transition text-brand-bg font-caslon-bold text-[20px] uppercase py-4 rounded-[90px] shadow-lg cursor-pointer"
                >
                  {CONTENT.modal.labels.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
