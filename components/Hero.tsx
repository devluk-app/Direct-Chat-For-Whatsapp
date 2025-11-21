import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { PLAY_STORE_LINK } from '../constants';
import PhoneMockup from './PhoneMockup';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-[-1]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-40 translate-y-1/2"></div>
        </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide mb-6">
              <Zap size={14} fill="currentColor" />
              <span>No Contacts Required</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Chat on WhatsApp <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Without Saving
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Experience seamless <strong>WhatsApp direct chat</strong>. Keep your phonebook clean and send messages instantly on <strong>WhatsApp without saving numbers</strong> or adding temporary contacts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <a 
                href={PLAY_STORE_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-900 text-white px-7 py-4 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 group"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.185.184-.39.345-.609.481V1.333c.219.136.424.297.609.481zm6.749 7.373l-5.91-5.91c-.209-.209-.278-.512-.181-.788.097-.276.352-.46.645-.46h12.36c.561 0 1.085.314 1.361.808.275.494.265 1.095-.027 1.581l-8.248 4.769zM14.536 12.74l8.248 4.769c.291.486.301 1.087.027 1.581-.275.494-.8.808-1.361.808H4.903c-.293 0-.548-.184-.645-.46-.097-.276-.028-.579.181-.788l5.909-5.91h.001l4.187 2.419 4.186-2.419z"/></svg>
                <div className="text-left">
                  <div className="text-xs font-medium text-slate-300">GET IT ON</div>
                  <div className="text-xl font-bold leading-none">Google Play</div>
                </div>
              </a>
              
              <a href="#features" className="text-slate-600 font-medium hover:text-emerald-600 flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors">
                Learn more <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span>Free to use</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span>No ads</span>
               </div>
               <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span>Secure</span>
               </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 relative w-full max-w-[400px] lg:max-w-none flex justify-center lg:justify-end z-10">
            {/* Decor dots */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 lg:translate-x-1/4">
                <div className="grid grid-cols-6 gap-4 opacity-20">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    ))}
                </div>
            </div>
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;