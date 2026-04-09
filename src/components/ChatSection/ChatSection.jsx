import React from 'react';
import Logo from '../Ui/Logo';
import { Search, Send, Phone, Video, MoreVertical, User, MessageSquare } from 'lucide-react';

const ChatSection = () => {
    return (
        // Main Background with soft gradient
        <div className='bg-slate-50 h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden p-4 md:p-10'>
            
            {/* Main Container: Glassmorphism effect */}
            <div className='max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xl h-full rounded-2xl md:rounded-3xl w-full flex overflow-hidden'>
                
                {/* --- LEFT DIV (Sidebar) --- */}
                <div className='w-80 border-r border-slate-200 h-full bg-slate-50/50 flex flex-col'>
                    
                    {/* Header: Logo area */}
                    <div className='p-5 border-b border-slate-200 bg-white'>
                        <Logo />
                    </div>

                    {/* User Info Section */}
                    <div className='p-5 flex items-center gap-3 bg-white/40'>
                        <div className='h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
                            <User size={20} />
                        </div>
                        <div>
                           <p className='font-bold text-slate-800 text-sm'>Mahialam Rahat</p>
                           <p className='text-xs text-slate-500'>email@gmail.com</p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className='p-4'>
                        <form className='relative'>
                            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' size={18} />
                            <input 
                                type="search" 
                                placeholder='Search messages...' 
                                className='w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm'
                            />
                        </form>
                    </div>

                    {/* Contact List (Scrollable area) */}
                    <div className='flex-1 overflow-y-auto p-2'>
                        <div className='flex items-center gap-3 p-3 hover:bg-white rounded-xl cursor-pointer transition-all border border-transparent hover:border-slate-100 shadow-sm bg-white'>
                            <img src="https://ui-avatars.com/api/?name=Friend+Name&background=random" alt="friend" className='h-12 w-12 rounded-full border-2 border-white shadow-sm' />
                            <div className='flex-1'>
                               <p className='font-semibold text-slate-800 text-sm'>Friend Name</p>
                               <p className='text-xs text-green-500 font-medium'>Online</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- RIGHT DIV (Chat Area) --- */}
                <div className='flex flex-col flex-1 bg-white'>

                    {/* Message Box Header */}
                    <div className='p-4 border-b border-slate-200 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10'>
                        <div className='flex items-center gap-3'>
                            <div className='h-10 w-10 rounded-full bg-slate-200 animate-pulse'></div>
                            <div>
                                <h4 className='font-bold text-slate-800'>Friend Name</h4>
                                <p className='text-xs text-slate-400'>last seen 2 mins ago</p>
                            </div>
                        </div>
                        <div className='flex gap-4 text-slate-500'>
                            <button className='hover:text-blue-600 transition-colors'><Phone size={20} /></button>
                            <button className='hover:text-blue-600 transition-colors'><Video size={20} /></button>
                            <button className='hover:text-blue-600 transition-colors'><MoreVertical size={20} /></button>
                        </div>
                    </div>

                    {/* Chat Messages Container */}
                    <div className='flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-[url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")] bg-opacity-5'>
                        
                        {/* Friend's Message */}
                        <div className='self-start max-w-[70%]'>
                            <div className='bg-slate-100 text-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm'>
                                <p className='text-sm'>Hi from friend! How is the project going?</p>
                            </div>
                            <span className='text-[10px] text-slate-400 ml-1'>10:30 AM</span>
                        </div>

                        {/* My Message */}
                        <div className='self-end max-w-[70%] text-right'>
                            <div className='bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-md'>
                                <p className='text-sm'>Hello from me! Working on the UI right now.</p>
                            </div>
                            <span className='text-[10px] text-slate-400 mr-1'>10:32 AM</span>
                        </div>
                    </div>

                    {/* Message Submit Footer */}
                    <div className='p-4 bg-white border-t border-slate-100'>
                        <form className='flex items-center gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200 focus-within:border-blue-400 transition-all'>
                            <input 
                                type="text" 
                                placeholder='Write a message...' 
                                className='flex-1 bg-transparent border-none outline-none px-3 text-sm text-slate-700'
                            />
                            <button className='bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95'>
                                <Send size={18} />
                            </button> 
                       </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ChatSection;