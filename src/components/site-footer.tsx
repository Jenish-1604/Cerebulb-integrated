"use client";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo & Social */}
          <div>
            <Link href="/">
              <Image
                src="/integrated-logo-bg-dark.png"
                alt="Cerebulb Logo"
                width={150}
                height={50}
                className="mb-6"
              />
            </Link>
            <div className="mt-4">
              <p className="font-medium mb-2">Social Media :</p>
              <Link href="https://linkedin.com" className="inline-block">
                <Image
                  src="/images/linkedin-icon.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </Link>
              {/* Add more icons as needed */}
            </div>
          </div>

          {/* IT STAFFING */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 text-yellow-300 tracking-wider">
              IT Staffing
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/it-staffing"
                  className="hover:text-primary transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/permanent-staffing"
                  className="hover:text-primary transition-colors"
                >
                  Permanent Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/temporary-staffing"
                  className="hover:text-primary transition-colors"
                >
                  Temporary Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/recruitment-process-outsourcing"
                  className="hover:text-primary transition-colors"
                >
                  Recruitment Process Outsourcing (RPO)
                </Link>
              </li>
              <li>
                <Link
                  href="/join-our-team"
                  className="hover:text-primary transition-colors"
                >
                  Join Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* TECHNOLOGIES */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 text-yellow-300 tracking-wider">
              Technologies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/technologies/javascript"
                  className="hover:text-primary transition-colors"
                >
                  Java
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/dotnet"
                  className="hover:text-primary transition-colors"
                >
                  .Net
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/nodejs"
                  className="hover:text-primary transition-colors"
                >
                  Node.Js
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/python"
                  className="hover:text-primary transition-colors"
                >
                  Python
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/devops"
                  className="hover:text-primary transition-colors"
                >
                  DevOps
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/bigdata-technologies"
                  className="hover:text-primary transition-colors"
                >
                  Big Data
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/cloud-technologies"
                  className="hover:text-primary transition-colors"
                >
                  Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/crm"
                  className="hover:text-primary transition-colors"
                >
                  CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/machine-learning"
                  className="hover:text-primary transition-colors"
                >
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/project-management"
                  className="hover:text-primary transition-colors"
                >
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 text-yellow-300 tracking-wider">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-primary transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
          <p>Copyright 2025 Cerebulb, All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
