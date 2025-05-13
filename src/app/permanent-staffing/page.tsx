"use client";

import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Content } from "@/components/ui/content";
import { Card } from "@/components/Card";

export default function PermanentStaffing() {
  const sections = [
    {
      title: "Expert Recruitment Process",
      items: [
        "Thorough candidate screening",
        "Skills assessment",
        "Cultural fit evaluation",
        "Background verification",
        "Reference checks",
      ],
    },
    {
      title: "Industry Expertise",
      items: [
        "IT & Technology",
        "Software Development",
        "Data Science & Analytics",
        "Cloud Computing",
        "Cybersecurity",
      ],
    },
    {
      title: "Client Benefits",
      items: [
        "Reduced time-to-hire",
        "Quality candidates",
        "Cost-effective solutions",
        "Long-term retention",
        "Dedicated support",
      ],
    },
  
  ];

  // Filter: Only show sections with at least 5 items
  const filteredSections = sections.filter(
    (section) => section.items.length >= 5
  );

  // Reduce: Count total items in all filtered sections
  const totalItems = filteredSections.reduce(
    (acc, section) => acc + section.items.length,
    0
  );

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-16 bg-[#30D5C8] rounded-lg shadow-lg p-8">
          <div className="flex-1">
            <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Permanent Staffing Solutions
            </Heading>
            <Content className="prose max-w-none">
              <span className="text-lg text-gray-600 mb-6 block">
                Build your dream team with our permanent staffing solutions. We
                help you find and hire top talent who will become integral
                members of your organization, contributing to your long-term
                success.
              </span>
            </Content>
          </div>
          <div className="flex-1">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/8.png"
                alt="Permanent Staffing"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredSections.map((section, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3 text-gray-600">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mb-8 text-right text-gray-500 text-sm pr-2">
          Total Features: {totalItems}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Our Permanent Staffing Process
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Requirements Analysis",
                description:
                  "We work closely with you to understand your staffing needs, company culture, and specific requirements.",
              },
              {
                step: "2",
                title: "Candidate Sourcing",
                description:
                  "Our recruiters use advanced tools and networks to identify and attract top talent.",
              },
              {
                step: "3",
                title: "Screening & Selection",
                description:
                  "Rigorous screening process including technical assessments and cultural fit evaluation.",
              },
              {
                step: "4",
                title: "Placement & Support",
                description:
                  "Complete support through interview process, offer negotiation, and onboarding.",
              },
            ]
              .filter((step) => step.description.length > 60)
              .map((item) => (
                <Card
                  key={item.step}
                  className="p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>

              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Ready to Build Your Dream Team?
          </Heading>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect candidates for your organization.
            Our permanent staffing solutions are designed to meet your specific
            needs and requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-br from-[#30D5C8] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </main>
  );
}
