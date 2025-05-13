'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function TemporaryStaffing() {
  const benefits = [
    {
      title: 'Reduced long-term labour cost',
      description: 'Save on long-term employment costs while maintaining productivity'
    },
    {
      title: 'Shorter Hiring process',
      description: 'Quick and efficient recruitment for immediate staffing needs'
    },
    {
      title: 'Instant Impact',
      description: 'Get immediate support for your projects and operations'
    },
    {
      title: 'Fresh perspectives',
      description: 'Gain new insights and approaches from experienced professionals'
    },
    {
      title: 'Highly skilled employees with niche experience',
      description: 'Access to specialized talent for specific project requirements'
    },
    {
      title: 'Flexibility',
      description: 'Scale your workforce up or down based on business needs'
    }
  ];

  const employeeBenefits = [
    {
      icon: '✈️',
      title: 'Visa Sponsorship Immigration',
      description: 'Support for work visa and immigration processes'
    },
    {
      icon: '🏥',
      title: 'Medical Vision & Dental Insurance',
      description: 'Comprehensive healthcare coverage for temporary staff'
    },
    {
      icon: '❤️',
      title: 'Life & AD&D Insurance',
      description: 'Protection and security for peace of mind'
    },
    {
      icon: '🎯',
      title: 'Retirement Path To Citizenship / Sponsorship',
      description: 'Long-term career development opportunities'
    }
  ];

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="bg-[#30D5C8] rounded-lg shadow-lg p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[400px]">
                <Image
                  src="/images/9.webp"
                  alt="Temporary Staffing"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                About Temporary Staffing
              </Heading>
              <Content className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Temporary staffing is the practice of introducing more workers into the prevailing 
                  job market. To make it more transparent, temping is the process of appointing 
                  workers for a limited period on a contract.
                </p>
                <p className="text-gray-600 mb-6">
                  Here are some of the advantages of hiring Contract Base staff:
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Content>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-16">
          <Heading className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Key Benefits For Employees
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employeeBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Need Temporary Staff for Your Project?
          </Heading>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the right temporary staff for your business needs. Our flexible 
            staffing solutions ensure you get the talent you need, when you need it.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-br from-[#0A1B3D] via-[#30D5C8] to-[#1B3B7B] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </main>
  );
}
