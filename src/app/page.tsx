"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, ChangeEvent } from "react";
import { motion } from "framer-motion";

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section/section";
import { Button } from "@/components/ui/button";

// Type definitions
interface BaseService {
  id: number;
  title: string;
  description: string;
  children?: React.ReactNode;
}

// MobileAppService type is not needed as it is identical to BaseService

interface StaffingService extends BaseService {
  image: string;
}

interface Slide {
  image: string;
  heading: string;
  subheading: string;
  children?: React.ReactNode;
}

interface Job {
  id: number;
  title: string;
  jobType: string;
  location: string;
  slug: string;
  children?: React.ReactNode;
}

// Cloud Services data


// Mobile App Development Services data
const mobileAppServices: BaseService[] = [
  {
    id: 1,
    title: "Custom Mobile App Development",
    description:
      "Build tailored mobile applications that perfectly match your business needs and requirements.",
  },
  {
    id: 2,
    title: "App Technology Consulting",
    description:
      "Expert guidance on choosing the right technology stack and architecture for your mobile app.",
  },
  {
    id: 3,
    title: "Wearable Apps Development",
    description:
      "Create innovative applications for smartwatches and other wearable devices.",
  },
  {
    id: 4,
    title: "Native App Development",
    description:
      "Develop high-performance native applications for iOS and Android platforms.",
  },
  {
    id: 5,
    title: "Hybrid App Development",
    description:
      "Build cross-platform applications that work seamlessly across multiple devices.",
  },
];

// IT Staffing Services data
const staffingServices: StaffingService[] = [
  {
    id: 1,
    title: "Permanent Staffing",
    image: "/images/Permanent.png",
    description:
      "Find the perfect long-term fit for your organization with our permanent staffing solutions.",
  },
  {
    id: 2,
    title: "Temporary Staffing",
    image: "/images/Temporarystaff.png",
    description:
      "Flexible staffing solutions for your short-term and project-based needs.",
  },
  {
    id: 3,
    title: "Recruitment Process Out Sourcing (RPO)",
    image: "/images/recruimentprocess.png",
    description:
      "Streamline your recruitment process with our comprehensive RPO services.",
  },
];

// Slide data
const slides: Slide[] = [
  {
    image: "/images/Home_1.webp",
    heading: "You Are In Good Hands",
    subheading: "Find The Right Career You Deserve",
  },
];

// Job data based on the screenshot
const jobListings: Job[] = [
  {
    id: 1,
    title: "Senior Slack Infrastructure Engineer",
    jobType: "W2",
    location: "AZ, PHOENIX",
    slug: "senior-slack-infrastructure-engineer",
  },
  {
    id: 2,
    title: "IB Field Data Engineer",
    jobType: "C2C",
    location: "Milwaukee, WI",
    slug: "ib-field-data-engineer",
  },
  {
    id: 3,
    title: "IB-Regulatory Engineer",
    jobType: "C2C",
    location: "Milwaukee, WI",
    slug: "ib-regulatory-engineer",
  },
  {
    id: 4,
    title: "IT Analyst",
    jobType: "Full Time",
    location: "AZ, PHOENIX",
    slug: "it-analyst",
  },
  {
    id: 5,
    title: "IT Engineer",
    jobType: "Full Time",
    location: "AZ, PHOENIX",
    slug: "it-engineer",
  },
  {
    id: 6,
    title: "AWS EKS & Datadog",
    jobType: "W2",
    location: "AZ, PHOENIX",
    slug: "aws-eks-datadog",
  },
  {
    id: 7,
    title: "SAP Developer",
    jobType: "W2",
    location: "CA, Milpitas",
    slug: "sap-developer",
  },
  {
    id: 8,
    title: "PowerBuilder Developer",
    jobType: "C2C",
    location: "Lansing, MI",
    slug: "powerbuilder-developer",
  },
  {
    id: 9,
    title: ".Net Cloud Architect",
    jobType: "C2C",
    location: "Lansing, MI",
    slug: "net-cloud-architect",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedJobs, setDisplayedJobs] = useState(jobListings.slice(0, 6));
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("All Job Type");
  const [jobLocation, setJobLocation] = useState("All Job Location");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleJobTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setJobType(e.target.value);
    setCurrentPage(1);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setJobLocation(e.target.value);
    setCurrentPage(1);
  };

  const loadMoreJobs = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Filter jobs based on search term, job type, and location
    let filteredJobs = jobListings;

    if (searchTerm) {
      filteredJobs = filteredJobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (jobType !== "All Job Type") {
      filteredJobs = filteredJobs.filter((job) => job.jobType === jobType);
    }

    if (jobLocation !== "All Job Location") {
      filteredJobs = filteredJobs.filter((job) => job.location === jobLocation);
    }

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setDisplayedJobs(filteredJobs.slice(startIndex, endIndex));
  }, [searchTerm, jobType, jobLocation, currentPage]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-[#30D5C8] flex items-center justify-center text-black">
        {/* Background Image */}
        <HeroImage src={slides[currentSlide].image} alt="Hero Background" />

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 h-full flex">
          <div className="flex flex-col justify-center h-full px-4 md:px-8 w-full">
            <div className="max-w-3xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.heading}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subheading}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          {slides.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-[#30D5C8]" : "bg-[#30D5C8]/50"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Announcement Banner */}
        <div className="bg-white py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                {/* Add your announcement content here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and filter section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search jobs..."
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="border border-gray-300 rounded-md py-2 px-4"
                value={jobType}
                onChange={handleJobTypeChange}
              >
                <option>All Job Type</option>
                <option>W2</option>
                <option>C2C</option>
                <option>Full Time</option>
              </select>
              <select
                className="border border-gray-300 rounded-md py-2 px-4"
                value={jobLocation}
                onChange={handleLocationChange}
              >
                <option>All Job Location</option>
                <option>AZ, PHOENIX</option>
                <option>Milwaukee, WI</option>
                <option>CA, Milpitas</option>
                <option>Lansing, MI</option>
              </select>
            </div>
          </div>

          {/* Job listings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedJobs.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{job.title}</h3>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                      <path
                        fillRule="evenodd"
                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                      />
                    </svg>
                    <span>{job.jobType}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/jobs/${job.slug}`}>
                    More Details →
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {displayedJobs.length < jobListings.length && (
            <div className="mt-8 text-center">
              <Button onClick={loadMoreJobs}>
                Load More Jobs
              </Button>
            </div>
          )}

          {/* Job Count */}
          <div className="mt-6 text-center text-gray-600">
            Showing {displayedJobs.length} of {jobListings.length} job
            opportunities
          </div>
        </div>
      </section>

      {/* Cloud Computing Section */}
      <section className="py-16 bg-[#30D5C8] text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Cloud Computing</h2>
              <p className="text-black mb-8">
                With lots of unique blocks, you can easily build pages them
                without build your next landing page so quickly with us.
              </p>
              <Button>
                Enquire Now
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/cloud2.png"
                alt="Cloud Computing"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Cloud Computing Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 opacity-30 rounded-full blur-2xl z-0"></div>
                <Image
                  src="/images/cloud.png"
                  alt="About Cloud Computing"
                  width={500}
                  height={500}
                  className="w-full h-auto relative z-10 rounded-2xl shadow-blue-500 border-4 border-blue-100"
                />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 rounded-2xl p-8 shadow-blue-100 border border-blue-100"
              >
                <h2 className="text-4xl font-extrabold mb-6 text-blue-500 drop-shadow-sm">About Cloud Computing</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Choosing a cloud type or service is an important decision. Cloud services are provided over the Internet by third-party providers. The three main types are:
                </p>
                <ul className="text-lg text-gray-700 mb-4 list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold text-blue-500">IaaS (Infrastructure as a Service):</span>
                    &nbsp;Offers virtual servers and storage (e.g., AWS, Azure).
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">PaaS (Platform as a Service):</span>
                    &nbsp;Provides tools for app development (e.g., Heroku, Google App Engine).
                  </li>
                  <li>
                    <span className="font-semibold text-blue-500">SaaS (Software as a Service):</span>
                    &nbsp;Delivers software via the web (e.g., Microsoft 365, Google Workspace).
                  </li>
                </ul>
                <p className="text-lg text-gray-700 mb-8">
                  Each type offers different levels of control and convenience.                </p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Decorative floating shape */}
        <div className="hidden md:block absolute bottom-0 right-0 w-72 h-72 bg-blue-100 opacity-20 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Mobile App Development Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Mobile App Development Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            As a top website development business, we ensure our programmers
            know the most recent trends and industry standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileAppServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Staffing Services Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4">
          <Section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {staffingServices.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-32 h-32 mx-auto mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}
