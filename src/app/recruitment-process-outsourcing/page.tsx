'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function RecruitmentProcessOutsourcing() {
  const rpoProcesses = [
    {
      title: 'Best practice processing',
      description: 'Helps to ensure the attraction and retention of the best talent in the market in the most effective and efficient manner'
    },
    {
      title: 'Greater focus on strategic issues',
      description: 'An outsourced service allows HR professionals and managers to focus on strategic issues, by reducing their administrative burden'
    },
    {
      title: 'Brand building',
      description: 'Enhanced competitiveness by delivering brand awareness across key target recruitment groups.'
    },
    {
      title: 'Cost-effective recruitment',
      description: 'Streamlined processes and economies of scale lead to significant cost savings in the recruitment lifecycle'
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
      description: 'Comprehensive healthcare coverage for employees'
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
                  src="/images/10.webp"
                  alt="Recruitment Process Outsourcing"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                About Recruitment Process Outsourcing (RPO)
              </Heading>
              <Content className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  RPO is when a company transfers all or part of its permanent recruitment to an 
                  external provider.
                </p>
                <p className="text-gray-600 mb-6">
                  If Your Company launches a new product or acquires a new division, it must hire 
                  hundreds of new employees on an impossible timeline. Our RPO services will be 
                  your backbone to the main brand image and consistency
                </p>
                <p className="text-gray-600 mb-6">
                  RPO process helps in:
                </p>
                <div className="space-y-6">
                  {rpoProcesses.map((process, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{process.title}</h3>
                        <p className="text-gray-600">{process.description}</p>
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

        {/* Additional Features */}
        <div className="mb-12">
          <div className="relative h-[300px] mb-8">
            <Image
              src="/images/2.webp"
              alt="RPO Additional Features"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Scalable Solutions
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Flexible recruitment capacity</li>
              <li>• Adaptable to business needs</li>
              <li>• Quick ramp-up capabilities</li>
              <li>• Global talent reach</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Quality Assurance
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Standardized processes</li>
              <li>• Best practice implementation</li>
              <li>• Regular performance metrics</li>
              <li>• Continuous improvement</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Cost Efficiency
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Reduced recruitment costs</li>
              <li>• Optimized processes</li>
              <li>• Better resource utilization</li>
              <li>• Predictable pricing model</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Transform Your Recruitment Process
          </Heading>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you streamline your recruitment process and find the best talent for your 
            organization. Our RPO solutions are tailored to your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-br from-[#0A1B3D] via-[#30D5C8] to-[#1B3B7B] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
