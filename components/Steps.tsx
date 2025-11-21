import React from 'react';
import { StepProps } from '../types';

const steps: StepProps[] = [
  {
    number: "01",
    title: "Enter Number",
    description: "Copy and paste or type the phone number with the country code."
  },
  {
    number: "02",
    title: "Type Message",
    description: "Optional: Write your message in the text box beforehand."
  },
  {
    number: "03",
    title: "Send & Chat",
    description: "Hit the send button. WhatsApp opens instantly with the chat ready."
  }
];

const Steps: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Bg */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-lg">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple. Fast. <br/>
                <span className="text-emerald-400">Effective.</span>
             </h2>
             <p className="text-slate-400 text-lg mb-8">
                Stop cluttering your phone contacts. Send a WhatsApp message to anyone, anywhere, in just 3 seconds.
             </p>
          </div>
          
          <div className="grid gap-6 w-full md:w-auto">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                    <div className="text-4xl font-black text-slate-700 stroke-emerald-500" style={{WebkitTextStroke: '1px #10b981', color: 'transparent'}}>
                        {step.number}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
