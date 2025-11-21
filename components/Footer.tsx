import React from 'react';
import { APP_NAME, PLAY_STORE_LINK, CONTACT_EMAIL } from '../constants';
import { MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-500 p-1.5 rounded text-white">
                <MessageCircle size={20} fill="currentColor" className="stroke-emerald-700" />
              </div>
              <span className="font-bold text-xl text-slate-900">{APP_NAME}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              The easiest way to send WhatsApp messages without saving contact numbers. Built for productivity and privacy.
            </p>
            <a 
              href={PLAY_STORE_LINK}
              className="inline-block bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Download for Android
            </a>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">Features</a></li>
              <li><a href="#" className="hover:text-emerald-600">Security</a></li>
              <li><a href="#" className="hover:text-emerald-600">Updates</a></li>
              <li><a href={PLAY_STORE_LINK} className="hover:text-emerald-600">Google Play</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-600">Terms of Service</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-emerald-600">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            &copy; {currentYear} {APP_NAME}. All rights reserved. Not affiliated with WhatsApp Inc.
          </p>
          <p className="text-slate-400 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> for better communication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
