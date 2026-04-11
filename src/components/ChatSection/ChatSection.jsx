'use client'
import React, { useState } from 'react';
import Logo from '../Ui/Logo';
import { Search, Send, Phone, Video, MoreVertical, User, ChevronLeft, Paperclip, Smile } from 'lucide-react';

const friends = [
  { id: '1', name: 'Ali', avatar: 'https://ui-avatars.com/api/?name=Ali', lastActive: '2h ago' },
  { id: '2', name: 'Sara', avatar: 'https://ui-avatars.com/api/?name=Sara', lastActive: '1h ago' },
  { id: '3', name: 'Rahat', avatar: 'https://ui-avatars.com/api/?name=Rahat', lastActive: '5m ago' }
];

const ChatSection = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className='bg-slate-100 h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden p-0 md:p-6 lg:p-10'>
            
            <div className='max-w-7xl mx-auto bg-white shadow-2xl h-full md:h-[90vh] rounded-none md:rounded-3xl w-full flex overflow-hidden border border-slate-200'>
                
                {/* --- LEFT SIDEBAR --- */}
                <div className={`
                    ${isSidebarOpen ? 'flex' : 'hidden'} 
                    md:flex flex-col w-full md:w-[350px] lg:w-[400px] border-r border-slate-100 bg-slate-50/30 transition-all duration-300
                `}>
                    
                    <div className='p-6 space-y-6'>
                        <div className='flex justify-between items-center'>
                            <Logo />
                            <div className='h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100'>
                                <User size={20} />
                            </div>
                        </div>

                        <div className='relative group'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <Search className='text-slate-400 group-focus-within:text-blue-500 transition-colors' size={18} />
                            </div>
                            <input 
                                type="text" 
                                placeholder='Search conversations...' 
                                className='w-full pl-10 pr-4 py-3 bg-slate-100/50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-medium'
                            />
                        </div>
                    </div>

                    <div className='flex-1 overflow-y-auto px-4 pb-4 space-y-2'>
                        <p className='text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2'>Recent Chats</p>
                        
                        {/* Active Contact */}
                        <div 
                            onClick={() => setIsSidebarOpen(false)}
                            className='flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-all'
                        >
                            <div className='relative'>
                                <img src="https://ui-avatars.com/api/?name=Friend+Name&background=0284c7&color=fff" alt="friend" className='h-12 w-12 rounded-2xl' />
                                <div className='absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full'></div>
                            </div>
                            <div className='flex-1 overflow-hidden'>
                                <div className='flex justify-between items-center'>
                                    <h4 className='font-bold text-slate-800 text-sm truncate'>Friend Name</h4>
                                    <span className='text-[10px] text-slate-400'>12:45 PM</span>
                                </div>
                                <p className='text-xs text-slate-500 truncate'>Sent a photo</p>
                            </div>
                        </div>

                        {/* FIXED MAP FUNCTION HERE */}
                        {friends.map(friend => (
  <div 
    key={friend.id} 
    onClick={() => setActiveChat(friend)} 
    className='flex items-center gap-4 p-4 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all border border-gray-500/10'
  >
    <img src={friend.avatar} alt={friend.name} className='h-12 w-12 rounded-2xl' />
    <div className='flex-1'>
      <h4 className='font-semibold text-slate-700 text-sm'>{friend.name}</h4>
      <p className='text-xs text-slate-400'>Active {friend.lastActive}</p>
    </div>
  </div>
))}
                    </div>
                </div>


                {/* --- RIGHT CHAT AREA --- */}
                <div className={`
                    ${!isSidebarOpen ? 'flex' : 'hidden'} 
                    md:flex flex-col flex-1 bg-white relative
                `}>

                    <div className='p-4 md:p-5 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-md z-20'>
                        <div className='flex items-center gap-3'>
                            <button onClick={() => setIsSidebarOpen(true)} className='md:hidden p-2 -ml-2 text-slate-500'>
                                <ChevronLeft size={24} />
                            </button>
                            
                            <div className='relative'>
                                <div className='h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold'>
                                    F
                                </div>
                                <div className='absolute -bottom-1 -right-1 h-3.5 w-3.5 bg-green-500 border-2 border-white rounded-full'></div>
                            </div>
                            <div>
                                <h4 className='font-bold text-slate-800 text-sm md:text-base'>Friend Name</h4>
                                <div className='flex items-center gap-1.5'>
                                    <span className='h-1.5 w-1.5 bg-green-500 rounded-full'></span>
                                    <p className='text-[11px] font-medium text-green-600'>Active Now</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex gap-1 md:gap-3 text-slate-400'>
                            <button className='p-2 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all'><Phone size={20} /></button>
                            <button className='p-2 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all'><Video size={20} /></button>
                            <button className='p-2 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all'><MoreVertical size={20} /></button>
                        </div>
                    </div>

                    <div className='flex-1 overflow-y-auto p-4 md:p-8 space-y-6 bg-slate-50/50'>
                        <div className='flex justify-center'>
                            <span className='px-4 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest'>Today</span>
                        </div>

                        <div className='flex gap-3 max-w-[85%] md:max-w-[70%]'>
                            <div className='h-8 w-8 rounded-lg bg-slate-200 flex-shrink-0 mt-auto'></div>
                            <div className='space-y-1'>
                                <div className='bg-white border border-slate-200 text-slate-700 p-3 md:p-4 rounded-2xl rounded-bl-none shadow-sm'>
                                    <p className='text-sm leading-relaxed'>Assalamu Alaikum! Mahialam, design ta kemon lagse?</p>
                                </div>
                                <p className='text-[10px] text-slate-400 font-medium'>10:30 AM</p>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse gap-3 max-w-[85%] md:max-w-[70%] ml-auto'>
                            <div className='space-y-1 text-right'>
                                <div className='bg-blue-600 text-white p-3 md:p-4 rounded-2xl rounded-br-none shadow-lg shadow-blue-100'>
                                    <p className='text-sm leading-relaxed'>Walaikum Assalam! Onk premium lagse, fixed the bug now! 🚀</p>
                                </div>
                                <p className='text-[10px] text-slate-400 font-medium'>10:32 AM • Read</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 md:p-6 bg-white'>
                        <div className='flex items-end gap-2 md:gap-4'>
                            <div className='flex-1 flex items-center gap-2 bg-slate-100 rounded-2xl px-4 py-2 md:py-3 border border-transparent focus-within:border-blue-300 focus-within:bg-white transition-all'>
                                <button type='button' className='text-slate-400 hover:text-blue-500'><Paperclip size={20} /></button>
                                <input 
                                    type="text" 
                                    placeholder='Type your message...' 
                                    className='flex-1 bg-transparent border-none outline-none text-sm text-slate-700 py-1'
                                />
                                <button type='button' className='text-slate-400 hover:text-orange-500'><Smile size={20} /></button>
                            </div>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white p-3 md:p-4 rounded-2xl shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95'>
                                <Send size={20} />
                            </button> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChatSection;