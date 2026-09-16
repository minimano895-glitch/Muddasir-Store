import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Cpu, ShieldCheck, HeartHandshake, Leaf, Award, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setActivePage } = useShop();

  const values = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: 'Acoustic & Electrical Precision',
      description: 'Every driver, semiconductor component, and aluminum chassis undergoes rigorous stress-testing to guarantee peak performance under real-world demands.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-500" />,
      title: 'Customer-First Lifetime Commitment',
      description: 'We believe premium hardware should be matched with human support. No bots, no lengthy ticket queues—just authentic assistance whenever you need it.'
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      title: 'Eco-Conscious Packaging',
      description: '100% plastic-free, recyclable soy-ink paper packaging across our entire product line, minimizing landfill impact without sacrificing luxury feel.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: 'Built to Outlast Trends',
      description: 'Timeless industrial design with durable finishes that resist fingerprints, wear, and obsolescence for years of joyful everyday use.'
    }
  ];

  return (
    <div id="about-page" className="bg-[#F5F5FB] min-h-screen py-12 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner */}
        <div className="rounded-3xl bg-[#071126] text-white p-8 sm:p-14 border border-white/10 relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              About Muddasir Store
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Technology That Fits Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#7C4DFF]">
                Everyday Life
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#B8C2D9] leading-relaxed mb-8">
              Founded on a simple mission: to make premium consumer electronics and modern tech accessories accessible, durable, stylish, and thoroughly dependable.
            </p>
            <button
              onClick={() => setActivePage('shop')}
              className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#2563FF] to-[#7C4DFF] hover:opacity-95 shadow-md shadow-blue-500/25 flex items-center gap-2 text-sm"
            >
              <span>Explore Our Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E4E5EE]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Muddasir Store engineering and design studio"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl border border-[#E4E5EE] shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Zero Compromise</h4>
                  <p className="text-xs text-gray-500">Over 150,000+ satisfied customers globally.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563FF]">
              Our Heritage & Vision
            </span>
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
              Engineering with Purpose, Designed for Longevity
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              In a world crowded with disposable plastic gadgets and exaggerated marketing slogans, Muddasir Store was conceived to restore confidence in everyday electronics. We curate and craft hardware that integrates into modern work and travel seamlessly.
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              From our flagship AeroBeat Pro headphones featuring low-distortion titanium drivers to our ultra-compact GaN chargers, our benchmark is always the same: would we proudly use this device 365 days a year?
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E4E5EE]">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2563FF] block">99.4%</span>
                <span className="text-xs text-gray-500 font-semibold">Positive Feedback</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#6D3DF5] block">48 Hours</span>
                <span className="text-xs text-gray-500 font-semibold">Average Delivery</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] block">30 Days</span>
                <span className="text-xs text-gray-500 font-semibold">No-Risk Trial</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563FF] mb-1 block">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#111827]">
              The Muddasir Store Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E4E5EE] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-[#E4E5EE] flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
