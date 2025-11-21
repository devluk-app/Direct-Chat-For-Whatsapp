import React from 'react';
import { Send, History, Settings, Phone } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Notch / Speaker */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col relative">
        {/* Status Bar */}
        <div className="bg-emerald-600 h-8 w-full flex justify-between items-center px-4 pt-2 text-white text-[10px] font-medium z-10">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-sm"></div>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-emerald-600 p-4 text-white shadow-md z-10">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Send size={18} /> Direct Message
          </h3>
        </div>

        {/* App Content */}
        <div className="flex-1 p-4 bg-slate-50 flex flex-col gap-4">
            
          {/* Input Area */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mt-4">
            <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Enter Number</label>
            <div className="flex gap-2 mb-3">
              <div className="bg-slate-100 rounded px-2 py-2 text-slate-600 text-sm font-medium flex items-center">+1</div>
              <div className="bg-slate-100 rounded w-full px-3 py-2 text-slate-800 text-sm">555 012 3456</div>
            </div>
            
            <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Message (Optional)</label>
            <div className="bg-slate-100 rounded w-full h-20 p-2 text-slate-400 text-xs mb-3">
              Hi! I found your listing online...
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2">
               <Send size={16} /> Send Message
            </button>
          </div>

          {/* Recent History Simulation */}
          <div className="mt-2">
            <div className="flex justify-between items-end mb-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase">Recent</h4>
                <span className="text-[10px] text-emerald-600 font-medium">Clear All</span>
            </div>
            <div className="flex flex-col gap-2">
                 <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <Phone size={14} />
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-slate-800">+44 20 7123 4567</div>
                            <div className="text-[10px] text-slate-400">Today, 9:30 AM</div>
                        </div>
                    </div>
                    <Send size={14} className="text-slate-300" />
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Phone size={14} />
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-slate-800">+1 555 987 6543</div>
                            <div className="text-[10px] text-slate-400">Yesterday</div>
                        </div>
                    </div>
                    <Send size={14} className="text-slate-300" />
                 </div>
            </div>
          </div>

        </div>

        {/* Bottom Nav */}
        <div className="bg-white border-t border-slate-100 h-14 flex justify-around items-center px-2">
            <div className="flex flex-col items-center gap-1 text-emerald-600">
                <Send size={20} />
                <span className="text-[10px] font-medium">Chat</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-400">
                <History size={20} />
                <span className="text-[10px] font-medium">History</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-400">
                <Settings size={20} />
                <span className="text-[10px] font-medium">Settings</span>
            </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-slate-900/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
