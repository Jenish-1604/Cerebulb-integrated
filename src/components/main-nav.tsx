"use client";


import Link from "next/link";
import { useState } from "react";

const navConfig = [
  {
    href: "/about-us",
    label: "About us",
  },
  {
    href: "/it-staffing",
    label: "IT Staffing",
    dropdown: [
      { href: "/permanent-staffing", label: "Permanent staffing" },
      { href: "/temporary-staffing", label: "Temporary Staffing" },
      {
        href: "/recruitment-process-outsourcing",
        label: "Recruitment Process Outsourcing (RPO)",
      },
    ],
  },
  {
    href: "/technologies",
    label: "Technologies",
    dropdown: [
      { href: "/technologies/Java", label: "Java" },
      { href: "/technologies/Dotnet", label: ".Net" },
      { href: "/technologies/CRM", label: "CRM" },
      { href: "/technologies/api-testing", label: "API Testing" },
      { href: "/technologies/devops", label: "DevOps" },
      { href: "/technologies/cloud-technologies", label: "Cloud Technologies" },
      { href: "/technologies/project-management", label: "Project Management" },
      {
        href: "/technologies/bigdata-technologies",
        label: "BigData Technologies",
      },
      { href: "/technologies/machine-learning", label: "Machine Learning" },
    ],
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/join-our-team",
    label: "Join Our Team",
  },
  {
    href: "#",
    label: "More",
    dropdown: [
      { href: "/benefits", label: "Benefits" },
      { href: "/blog", label: "Blog" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
];

export function MainNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {navConfig.map((item) => {
          const hasDropdown = item.dropdown && item.dropdown.length > 0;

          return (
            <div key={item.label} className="relative group">
              {hasDropdown ? (
                <button
                  type="button"
                  className="flex items-center cursor-pointer text-sm xl:text-base font-medium underline underline-offset-4 text-black hover:text-black focus:text-black active:text-black transition-colors bg-transparent border-none p-0 m-0 focus:outline-none"
                  onClick={() => toggleDropdown(item.label)}
                  style={{ background: 'none' }}
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm xl:text-base font-medium underline underline-offset-4 text-black hover:text-black focus:text-black active:text-black transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {hasDropdown && activeDropdown === item.label && (
                <div
                  className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white z-50 transition-all duration-300
                    ${activeDropdown === item.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                  style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {item.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-black hover:text-black focus:text-black active:text-black hover:bg-primary-container font-medium underline underline-offset-4"
                        onClick={closeDropdown}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
