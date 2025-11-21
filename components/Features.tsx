import React from 'react';
import { FeatureProps } from '../types';
import { Zap, Shield, History, Layout, Globe, MessageSquare } from 'lucide-react';

const features: FeatureProps[] = [
  {
    title: "Direct Chat",
    description: "Initiate a WhatsApp direct chat instantly. Just enter the number and click send—no contacts needed.",
    icon: <Zap className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "Privacy First",
    description: "Use WhatsApp without contact saving to keep your personal address book clean and secure.",
    icon: <Shield className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "History Log",
    description: "Easily access recent numbers you've messaged without searching your call logs.",
    icon: <History className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Clean Interface",
    description: "A clutter-free, modern design that supports Dark Mode for comfortable night usage.",
    icon: <Layout className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "International Support",
    description: "Automatic country code detection and manual selection for global messaging.",
    icon: <Globe className="w-6 h-6 text-cyan-600" />,
  },
  {
    title: "Pre-filled Messages",
    description: "Type your message before opening WhatsApp to save even more time.",
    icon: <MessageSquare className="w-6 h-6 text-rose-600" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why use Direct for WA?
          </h2>
          <p className="text-slate-600 text-lg">
            The ultimate tool for <strong>WhatsApp without contact</strong> saving. Perfect for business professionals and quick messages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;