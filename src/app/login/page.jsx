'use client'

import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, LogIn } from 'lucide-react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const Login = () => {

 const searchParams = useSearchParams();
const callbackUrl = searchParams.get("callbackUrl") || "/";


    const handleLogin = async(e) => {
        e.preventDefault();
        alert("clicked login")
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await signIn('credentials', { email, password, redirect: true, callbackUrl });
        console.log(res)
    }

   


    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-fixed">
            
            {/* Background decorative blobs */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

            {/* Login Card */}
            <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-10">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className='bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200'>
                        <LogIn className='text-white' size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Welcome Back</h2>
                    <p className="text-slate-500 mt-2 text-sm font-medium">Log in to your account to continue</p>
                </div>

                {/* Single Google Login Area */}
                <div className="mb-8">
                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 text-sm shadow-sm active:scale-[0.98]">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Continue with Google
                    </button>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or login with email</span></div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                            <input 
                                type="email" 
                                name='email'
                                placeholder="mahi@example.com"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                            <Link href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700">Forgot Password?</Link>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                            <input 
                                type="password" 
                                name='password'
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm font-medium"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-6">
                        Login to Dashboard
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center mt-10">
                    <p className="text-sm text-slate-500 font-medium">
                        New here? 
                        <Link href="/register" className="text-blue-600 font-bold ml-1 hover:underline underline-offset-4 decoration-2">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;