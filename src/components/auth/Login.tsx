"use client"

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Zap, Shield, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex w-full font-sans bg-white">
            {/* Left Section - Form */}
            <div className="w-full lg:w-1/2 flex flex-col relative">

                {/* Main Content Container */}
                <div className="flex-1 flex flex-col justify-center items-center px-8 sm:px-12">
                    <div className="w-full max-w-[400px]">
                        {/* Logo */}
                        <div className="flex justify-center mb-12">
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">StyleGen</span>
                        </div>

                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
                            <p className="text-gray-500 text-sm">Enter your credentials to access your artisan portal.</p>
                        </div>

                        {/* Demo Credentials */}
                        <div className="bg-[#f9fafb] border border-gray-100 rounded-lg p-4 mb-8">
                            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Demo Credentials</h2>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 bg-white border border-gray-200 rounded p-2.5 text-center cursor-pointer hover:border-[#ea6619] transition-colors shadow-sm">
                                    <div className="font-bold text-xs text-gray-800 mb-0.5">Admin</div>
                                    <div className="text-[11px] text-gray-500">admin@stylegen.com</div>
                                </div>
                                <div className="flex-1 bg-white border border-gray-200 rounded p-2.5 text-center cursor-pointer hover:border-[#ea6619] transition-colors shadow-sm">
                                    <div className="font-bold text-xs text-gray-800 mb-0.5">Customer</div>
                                    <div className="text-[11px] text-gray-500">jane@example.com</div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                            {/* Email */}
                            <div className="mb-5">
                                <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-[#ea6619] focus:border-[#ea6619] text-sm transition-colors outline-none text-gray-700 placeholder-gray-400"
                                        placeholder="name@company.com"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="mb-5">
                                <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-[#ea6619] focus:border-[#ea6619] text-sm transition-colors outline-none text-gray-700 font-mono tracking-widest placeholder:tracking-normal placeholder:font-sans placeholder-gray-400"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-3.5 w-3.5 text-[#ea6619] focus:ring-[#ea6619] border-gray-300 rounded-sm cursor-pointer"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-600 cursor-pointer">
                                        Keep me signed in for 30 days
                                    </label>
                                </div>

                                <div className="text-xs">
                                    <Link href="#" className="font-medium text-[#ea6619] hover:text-[#d45a11]">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ea6619] hover:bg-[#d45a11] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ea6619] transition-colors"
                            >
                                Sign in <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        {/* Secure Access Badge */}
                        <div className="mt-5 flex items-center justify-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Secure Access</span>
                        </div>

                        {/* Sign Up Link */}
                        <div className="mt-8 text-center text-xs text-gray-600">
                            New to StyleGen?{" "}
                            <Link href="#" className="font-semibold text-[#ea6619] hover:underline">
                                Create an account
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Left Footer */}
                <div className="absolute bottom-6 left-0 w-full flex justify-center lg:justify-start lg:pl-12 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" />
                        <span>English (US)</span>
                    </div>
                </div>
            </div>

            {/* Right Section - Illustration/Features */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#f26a17] to-[#d6530a] relative flex-col justify-center items-center p-12 overflow-hidden">
                <div className="max-w-[420px] text-center z-10">
                    <h2 className="text-4xl font-serif text-white mb-6 tracking-wide">Premium Leather Goods</h2>
                    <p className="text-white/90 text-[15px] leading-relaxed mb-16">
                        Access your artisan portal to manage orders, track shipments, and discover our latest handcrafted collections.
                    </p>

                    <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/10 shadow-sm backdrop-blur-sm">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-white text-sm font-semibold mb-1">Secure</h3>
                            <p className="text-white/70 text-[11px]">256-bit encryption</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/10 shadow-sm backdrop-blur-sm">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-white text-sm font-semibold mb-1">Fast</h3>
                            <p className="text-white/70 text-[11px]">Instant access</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/10 shadow-sm backdrop-blur-sm">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-white text-sm font-semibold mb-1">Protected</h3>
                            <p className="text-white/70 text-[11px]">Your data is safe</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/10 shadow-sm backdrop-blur-sm">
                                <Lock className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-white text-sm font-semibold mb-1">Private</h3>
                            <p className="text-white/70 text-[11px]">Your privacy matters</p>
                        </div>
                    </div>
                </div>

                {/* Right Footer */}
                <div className="absolute bottom-6 flex gap-6 text-xs text-white/70 font-medium z-10 w-full justify-center lg:justify-end lg:pr-12">
                    <Link href="#" className="hover:text-white transition-colors">Support</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <span>© 2026 StyleGen</span>
                </div>
            </div>
        </div>
    );
}