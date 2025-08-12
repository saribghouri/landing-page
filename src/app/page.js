"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";
import {
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Gauge,
  Monitor,
  Settings,
  shopping,
  Smartphone,
  UserCog,
  MapPin,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Link,
  Facebook,
} from "lucide-react";
import { Button, Card, Input, Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";

export default function Page() {
  const carouselRef = useRef(null);

  // Define your slider items
  const sliderItems = [
    {
      id: 1,
      image: "/1 organic food copy.jpg",
      alt: "Two men in traditional Indian attire website screenshot",
    },
    {
      id: 2,
      image: "/baab.jpg",
      alt: "Website screenshot of a gift box company 'Packed with Purpose'",
    },
    {
      id: 3,
      image: "/3 tea copy.jpg",
      alt: "Website screenshot of a wine company 'E.J. McDougall' with people in a vineyard",
    },
    {
      id: 4,
      image: "/5 fenty beauty.jpg",
      alt: "Website screenshot of a health product company 'PROLIVE' with tinctures and syrups",
    },
    {
      id: 5,
      image: "/taxis plus logo copy.jpg",
      alt: "Website screenshot of a health product company 'PROLIVE' with tinctures and syrups",
    },
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Store Development",
      description:
        "We do complete research into your industry, audience, and competitors to design a site that's great for users and helps them buy. From payment systems to shipping connections and more, we make sure every feature works perfectly to support your business.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "We specialize in custom app creation to extend what your store can do and meet your unique business needs, whether it's a private app for your internal work or a public app for the app store, our team builds growable, safe, and easy-to-use solutions made just for your goals.",
    },
    {
      icon: ArrowRightLeft,
      title: "Website Migration",
      description:
        "Moving from one online platform to another can cause a lot of time where your site is down. However, our website migration services will help you with very little downtime. Our expert developers move websites from one to another platforms smoothly.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "We optimize your website for speed, responsiveness, and performance across all devices. From code enhancements to image compression, we ensure faster load times and improved user experience.",
    },
    {
      icon: Monitor,
      title: "Website Theme Development",
      description:
        "We build smart and appealing online stores that grab users' attention right away. Our themes are designed for easy Browse and smooth store performance.",
    },
    {
      icon: Settings,
      title: "Third-Party Integration",
      description:
        "We integrate your Shopify store with third-party tools like CRMs, ERPs, payment gateways, and shipping providers. This ensures smoother operations, real-time data sync, and a connected ecommerce ecosystem.",
    },
    {
      icon: UserCog,
      title: "Dedicated Developer",
      description:
        "Engage our expert developers to complement your in-house team or get a solution designed from scratch. Our developers ensure timely project delivery, taking full advantage of skills and capabilities.",
    },
    {
      icon: Settings,
      title: "Update and Support",
      description:
        "Our experienced technical team and dedicated developers offer periodic updates and support solutions for your store and websites.",
    },
    {
      icon: DollarSign,
      title: "Conversion Rate Optimization",
      description:
        "We help our customers by reviewing their existing website and analyzing its setup, performing A/B testing, funnel analysis, checkout flow optimization, making data-driven tweaks using analytics tools, and conducting user behavior analysis.",
    },
  ];
  const testimonials = [
    {
      quote:
        "Our ecommerce migration to Shopify was a great success. Thanks to everyone at 360 Australia.",
      company: "HELM",
      logo: "/clients-logo1.png",
    },
    {
      quote:
        "Their team was very experienced and knew exactly how to drive our project from start to finish.",
      company: "TARUN TAHILIANI",

      logo: "/tarun_tahiliani.png",
    },
    {
      quote:
        "Very impressed with 360 Australia's commitment and their support throughout the development stages.",
      company: "verve",

      logo: "/clients-logo6.png",
    },
  ];

  // Navigation functions for the carousel
  const goToPrev = () => {
    carouselRef.current?.prev();
  };

  const goToNext = () => {
    carouselRef.current?.next();
  };

  const features = [
    {
      title: "Expert Developers with over 10+ years of experience",
      description:
        "With years of experience, our team is well-versed in coding. From design and development to integrations and app tweaks.",
    },
    {
      title: "Speed and Performance Optimization",
      description:
        "We make sure your website loads quickly, runs smoothly, and provides a great user experience on all devices. We help to lower bounce rates and improve your SEO.",
    },
    {
      title: "End-to-End Support",
      description:
        "From creating your website to ongoing maintenance and updates, we provide continuous support to keep your website updated and secure.",
    },
    {
      title: "Conversion-Focused Design",
      description:
        "We don't just create unique websites, we create experiences that drive sales. Every detail is designed to enhance usability and boost conversions.",
    },
    {
      title: "Transparent Pricing and Timelines",
      description:
        "We don't have hidden fees. We always offer clear project scopes, timelines, and pricing so you can plan with confidence.",
    },
  ];

  return (
    <div>
      <section className="w-full  min-h-screen bg-white relative overflow-hidden">
        {/* Top Section */}
        <div className="bg-[#000000] h-screen text-white py-16 md:py-24  relative z-0">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-[30px] mt-[0px]">
             <div className="flex items-center">
            <img
              src="gif/dWQGyW.gif"
              alt="360 Australia Ventures Logo"
              className="h-20 w-54 lg:h-[100px] lg:w-[274px]"
            />
        </div>
            </div>
            <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold leading-tight mb-8 max-w-[90%] mx-auto">
              <span className="text-teal-400 mr-[7px]">

              DESIGN & DEVELOPMENT AND DIGITAL MARKETING AGENCY           
              </span> 
                 <span className=" mt-4 uppercase text-white relative font-extrabold">
                  Starting @ $25 Per Hour 
                
               </span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-[40px]">
              <Button
                variant="outline"
                className=" !text-teal-400 !hover:bg-white !hover:border !border-teal-400  !hover:text-[#1a202c] !px-8 !py-6 !text-lg rounded-md !bg-transparent"
              >
                Discuss with our Specialist
              </Button>

            </div>
          </div>
        </div>

        {/* Bottom Section - Slider */}
        <div className="bg-[#eff5fc] h-[350px] w-[100%] rounded-b-full">

          <div
            className=" relative   sm:px-4 
                          flex flex-col lg:flex-row items-center justify-between w-full
                          mt-[-140px] sm:mt-[-100px] md:mt-[-120px]  
                          gap-4 sm:gap-6 md:gap-8"
          >
            <div className="  text-center lg:text-left mb-16 lg:mb-0 !ml-[0px] lg:ml-[40px] !lg:mt-[-25px] !md:mt-[-25px] mt-[-70px]">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold !text-[#ffffff] leading-tight sm:leading-snug mb-5">
                EMPOWERING BRANDS WITH
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold !mt-[-10px] text-teal-400 leading-tight sm:leading-snug">
                TRANSFORMATIONAL ECOMMERCE STRATEGIES
              </h2>
            </div>
            <div className="lg:w-[70%] relative gap-[50px] mt-[-110px]  w-full">
              <Carousel
                ref={carouselRef}
                autoplay={true}
                autoplaySpeed={2500}
                speed={800}
                infinite={true}
                dots={false}
                arrows={false}
                pauseOnHover={false}
                pauseOnFocus={false}
                slidesToShow={3}
                slidesToScroll={1}
                centerMode={false}
                variableWidth={false}
                responsive={[
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: true,
                      autoplaySpeed: 2500,
                      speed: 800,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      autoplaySpeed: 2500,
                      speed: 800,
                      centerMode: true,
                      centerPadding: "20px",
                    },
                  },
                ]}
                className="portfolio-carousel"
              >
                {sliderItems.map((item, index) => (
                  <div key={item.id} className="gap-[50px] flex">
                    <div className="mx-6 gap-[50px]  shadow-lg rounded-lg flex overflow-hidden bg-white carousel-card-shadow transition-transform duration-300 hover:scale-105">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.alt}
                        width={500}
                        height={400}
                        className="object-contain flex items-center w-full h-[300px] sm:h-[450px] md:h-[280px] lg:h-[320px]"
                        priority={index < 3}
                      />
                    </div>
                  </div>
                ))}
              </Carousel>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="carousel-nav-btn !absolute !left-2 !top-1/2 -translate-y-1/2 
                          !bg-teal-500 hover:bg-white !rounded-full !border-none  !text-white
                          !p-2 !shadow-lg z-20 
                          transition-all duration-200 hover:scale-110
                          !w-10 !h-10 !md:w-12 !md:h-12"
                aria-label="Previous slide"
                onClick={goToPrev}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
              {/* <Button
                variant="ghost"
                size="icon"
                className="carousel-nav-btn !absolute !right-2 !top-1/2 -translate-y-1/2 
                          bg-white/90 hover:bg-white rounded-full 
                          p-2 shadow-lg z-20 
                          transition-all duration-200 hover:scale-110
                          w-10 h-10 md:w-12 md:h-12"
                aria-label="Next slide"
                onClick={goToNext}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </Button> */}
            </div>
          </div>
        </div>

      </section>

      <section className="py-16 px-4  mt-[120px]">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm carousel-card-shadow">
                <div className=" text-center">
                  <img
                    src="/Screenshot_2025-08-01_025354-removebg-preview.png"
                    alt=""


                  />
                  <blockquote className="text-black text-lg   mt-[-50px] leading-relaxed mb-8">

                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-auto">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.company} logo`}
                      className={`mx-auto object-contain  ${index === 1 ? "h-6" : "h-10"
                        }`}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-white">
        <div className="container grid gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-24 items-end">
          {" "}
          {/* Changed items-center to items-end */}
          {/* Left Column: Image, Heading, and Description */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-full max-w-[600px] mx-auto md:mx-0">
              <Image
                src="/jkwkZK (1).png"
                width={350}
                height={350}
                alt="Ecommerce Solution Screenshot"
                className="  w-full"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl text-[#051549] font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-4xl">
                One Stop E-commerce Solution provider. Design, Development, Integration, Support & Digital Marketing
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl mx-auto md:mx-0">
                We offer complete e-commerce services under one roof, from stunning online store design and strong platform building to smooth connections with other tools, ongoing tech help, and marketing that gets results. Our custom solutions help brands launch, grow, and expand their online business effectively.
              </p>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div className="flex flex-col items-center justify-center rounded-lg">
            <div className="w-full max-w-[100%] lg:max-w-[60%] space-y-6 bg-white shadow-lg p-10">
              <div className="text-center md:text-center">
                <h2 className="text-3xl md:text-4xl lg:text-4xl mt-[20px] tracking-tight text-[#05195a]">
                  Get free Quote
                </h2>
                <p className="mt-6 md:text-lg ">
                  Reach out to us to discuss your requirements and get recommendations and get free proposal.
                </p>
              </div>
              <form className="grid gap-8">
                <Input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-2 py-3 h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Input
                  type="tel"
                  placeholder="Phone*"
                  className="w-full px-4 py-3 text-[20px] h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Input
                  type="url"
                  placeholder="Website URL"
                  className="w-full px-4 py-3 h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary resize-y"
                />
                <div className="w-full flex justify-center">
                  <Button
                    type="submit"
                    className="w-50 !bg-teal-500 !text-white !py-5 rounded-md !text-[24px] font-bold !hover:bg-orange-600 transition-colors animate-popup-pulse hover:animate-bounce"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full min-h-[400px] md:h-[500px] bg-[#f0efea] flex flex-col md:flex-row items-center justify-start overflow-hidden">
        <div className="z-10 bg-[#f5fcff] min-h-[400px] md:h-[500px] w-full md:w-[50%] flex justify-center items-center flex-col md:rounded-tr-full px-4 md:px-8 py-8 md:py-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-xl text-gray-800 text-center md:text-left">
            We Are One Of The Development Services
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-[18px] text-gray-700 max-w-xl text-center md:text-left">
            From creating a new store to building a feature-rich website, 360 Australia provides end-to-end development services. Our services provide a recognized e-commerce presence that aligns with your brand identity.
          </p>
        </div>
        <div className="flex md:absolute md:right-0 md:top-0 h-[300px] md:h-full w-full md:w-[50%] items-center justify-center md:justify-end z-20 md:z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/shopify-video.mp4"
          />
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Development Services 
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl items-stretch gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md h-full"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-white carousel-card-shadow   rounded-lg overflow-hidden items-center">
            {/* Left side - Video */}
            <div className="relative order-2 w-[90%] lg:order-1">
              <video
                className="w-full h-[250px] md:h-[350px] demo-card-border lg:h-full object-cover shadow-[8px_0_15px_-3px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
                src="/shopify-video-final.mp4"
              />
            </div>
            <div className="space-y-4 md:space-y-6 p-6 md:p-8 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Why 360 Australia?
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We are offering expert eCommerce solutions, store development, app integration, and marketing services to help businesses grow and succeed in the competitive digital landscape. We're here to provide everything you need to launch and expand through your website.
              </p>

              {/* Optional: Add some feature points */}
            </div>
          </div>
          <section className="py-16 bg ">
            <div className="max-w-7xl">
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                {/* Left Column - First 3 features */}
                <div className="space-y-12">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-8">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Column - Last 2 features */}
                <div className="space-y-12">
                  {features.slice(3).map((feature, index) => (
                    <div key={index + 3} className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-8">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="py-16 px-4  md:h-screen relative overflow-hidden">
        {/* Background image and pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0  "
            style={{
              backgroundImage: `url('/hm1-form-bg-3.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Navy blue backdrop with shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/50 to-slate-900/95"></div>
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
          {/* Additional shadow effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
            {/* Left side - Contact Information */}
            <div className="text-white space-y-8 text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-12">Contact Us</h2>

              {/* Australia Address */}
              <div className="flex items-start gap-4 justify-center lg:justify-start ml-[-40px] lg:ml-0 md:ml-0 ">
                <MapPin className="w-8 h-8 mt-1 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-start">Address</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Sydney, NSW, Australia
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <Mail className="w-8 h-8 mt-1 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-start">Email</h3>
                  <a
                    href="mailto:hello@360australia.com.au"
                    className="text-gray-300 hover:text-white transition-colors underline text-lg"
                  >
                    hello@360australia.com.au
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-2xl border border-gray-100 backdrop-blur-sm mx-auto w-full max-w-lg">
              <div className="mb-6 text-center">
                <p className="text-blue-600 font-medium mb-2 text-lg">
                  Free Consultation
                </p>
                <h3 className="text-3xl font-bold text-gray-900">Contact Us</h3>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-700 font-medium text-lg">
                    Name*
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-lg h-12"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-700 font-medium text-lg">
                    Email*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-lg h-12"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-gray-700 font-medium text-lg">
                    Phone*
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-lg h-12"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium text-lg"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none w-full px-3 py-2 rounded-md text-lg"
                    placeholder="Your message"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="w-auto px-8 !bg-blue-600 !hover:bg-blue-700 !text-white !font-bold !text-xl !py-6 !rounded-md transition-colors animate-popup-pulse-blue hover:animate-bounce"
                  >
                    Submit Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#122763] text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info & Certifications */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                 <img
              src="gif/dWQGyW.gif"
              alt="360 Australia Ventures Logo"
              className="h-20 w-54 lg:h-[90px] lg:w-[204px] filter brightness-0 invert"
            />
                  <div>
                    <h3 className="text-xl font-semibold"></h3>
                    <h3 className="text-xl font-semibold"></h3>
                  </div>
                </div>
                <p className="text-lg text-white leading-relaxed mb-6">
                  Helping Businesses attract, differentiate, optimize, and grow in their crowded niche through scalable, innovative, and stable digital solutions for web and mobile migration, and application modernization.
                </p>
              </div>
              <hr></hr>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4 mt-[20px]">
                  ISO Certificates and Our Partners
                </h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className=" p-4 py-8 rounded flex items-center justify-center">
                    <img src="pic-logo-1.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-2.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-7.png" alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-4.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-6.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-5.png" alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-8.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-9.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                    <img src="pic-logo-3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6 mt-[]">Services</h4>

              <div className="mb-6">
                <h5 className="text-lg font-medium mb-2 ">
                  Product and Solution Development
                </h5>
                <hr></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Web Application Development
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Custom Web Development
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Mobile App Development
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> iPhone / iOS App Development
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Umbraco Implementation Services
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-medium mb-2 ">
                  E-Commerce Solutions
                </h5>
                <hr></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Ecommerce Web & App Development
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Website Development Service
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Website Integration Service
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Website Support and Maintenance Service
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-medium mb-2 ">
                  360 Engineering Services
                </h5>
                <hr></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> 360 Engineering Services
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Infrastructure Management & Monitoring
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> DevOps Consulting & Implementation
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> AWS Consulting Services
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Google Cloud Consulting Services
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> M365 Consulting & Implementation Services
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Microsoft Azure Consulting
                  </li>
                </ul>
              </div>
            </div>

            {/* Products & Company */}
            <div className="lg:col-span-1 mt-[52px]">
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-2 ">
                  Business Intelligence & AI / ML
                </h4>
                <hr></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Business Intelligence Implementation
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> AI / ML Product Development
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> ChatGPT Integration
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-medium mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> MarketPlace App
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> CRM & Project Management Software
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Home
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Portfolio
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> About Us
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Work Culture
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Careers
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Blog
                  </li>
                  <li className="hover:text-white transition-colors flex items-center">
                    <RightOutlined className="mr-2" /> Contact
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>

              <div className="mb-6">
                <h5 className="text-lg font-medium mb-3">Address</h5>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Sydney, NSW, Australia
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">Email : hello@360australia.com.au</span>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-medium mb-4">Follow Us</h5>
                <div className="flex space-x-3">
                  <div
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  <div
                    href=""
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div
                    href=""
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
