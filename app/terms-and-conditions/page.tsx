"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
    ArrowLeft,
    Printer,
    ShieldCheck,
    CreditCard,
    XCircle,
    Briefcase,
    MapPin,
    Camera,
    AlertCircle,
    Lock,
    Scale,
    Edit3,
    MessageSquare,
} from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

export default function TermsAndConditions() {
    const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    return (
        <main className="bg-onyx selection:bg-gold min-h-screen font-sans selection:text-black">
            <Navbar />

            <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-32">
                {/* Reference Image Style Card */}
                <AnimatedContent direction="vertical" distance={40} duration={0.8}>
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#141414] shadow-[0_0_50px_rgba(0,0,0,0.5)] md:rounded-[4rem]">
                        {/* Hero Section of the Card */}
                        <div className="grid grid-cols-1 items-start gap-12 p-8 md:p-16 lg:grid-cols-2 lg:p-24">
                            <div>
                                <h1 className="mb-8 text-5xl leading-[1.05] font-black tracking-tight text-white md:text-7xl lg:text-8xl">
                                    Terms <br />
                                    That Work <br />
                                    Around You
                                </h1>
                                <p className="max-w-md text-lg leading-relaxed text-zinc-500 md:text-xl">
                                    Our protocols ensure professional excellence and mutual respect for every
                                    engagement, worldwide.
                                </p>
                            </div>

                            <div className="flex h-full flex-col items-start justify-between gap-8 lg:items-end">
                                <ul className="space-y-4 text-right">
                                    {[
                                        "BOOKING POLICY",
                                        "CANCELLATION",
                                        "TRAVEL PROTOCOLS",
                                        "MEDIA RIGHTS",
                                        "LIABILITY",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="hover:text-gold w-full cursor-default text-right text-[10px] font-black tracking-[0.3em] text-zinc-600 transition-colors md:text-xs"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-right">
                                    <p className="mb-1 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
                                        Last Revision
                                    </p>
                                    <p className="text-gold text-sm font-medium">{lastUpdated}</p>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Policy Grid inside the Card */}
                        <div className="border-t border-white/5 bg-black/20 p-8 backdrop-blur-sm md:p-16">
                            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                                {/* 1. Booking */}
                                <div className="space-y-4">
                                    <div className="text-gold flex items-center gap-3">
                                        <CreditCard className="h-5 w-5" />
                                        <span className="text-xs font-black tracking-widest uppercase">
                                            01. Booking
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        A 30% non-refundable deposit is required to secure dates. Balance is due 7 days
                                        prior to engagement.
                                    </p>
                                </div>

                                {/* 2. Cancellation */}
                                <div className="space-y-4">
                                    <div className="text-gold flex items-center gap-3">
                                        <XCircle className="h-5 w-5" />
                                        <span className="text-xs font-black tracking-widest uppercase">
                                            02. Cancellation
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Sliding scale refunds: 70% if &gt;30 days notice, 50% for 15-30 days,
                                        non-refundable if &lt;15 days.
                                    </p>
                                </div>

                                {/* 3. Scope */}
                                <div className="space-y-4">
                                    <div className="text-gold flex items-center gap-3">
                                        <Briefcase className="h-5 w-5" />
                                        <span className="text-xs font-black tracking-widest uppercase">
                                            03. Services
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Standard duration is 2-4 hours. Scope includes hosting, MC, and brand
                                        representation as defined in contract.
                                    </p>
                                </div>

                                {/* 4. Responsibilities */}
                                <div className="space-y-4">
                                    <div className="text-gold flex items-center gap-3">
                                        <AlertCircle className="h-5 w-5" />
                                        <span className="text-xs font-black tracking-widest uppercase">
                                            04. Client Duties
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Client must provide safe working conditions, accurate schedules, and necessary
                                        event permits.
                                    </p>
                                </div>

                                {/* 5. Travel */}
                                <div className="space-y-4">
                                    <div className="text-gold flex items-center gap-3">
                                        <MapPin className="h-5 w-5" />
                                        <span className="text-xs font-black tracking-widest uppercase">
                                            05. Global Travel
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Business class required for international flights. 4-star+ accommodation with
                                        security is mandatory.
                                    </p>
                                </div>

                                {/* 6. Media */}
                                <div className="space-y-4">
                                    <div className="text-gold flex items-center gap-3">
                                        <Camera className="h-5 w-5" />
                                        <span className="text-xs font-black tracking-widest uppercase">
                                            06. Intellectual Property
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        Mutual promotional rights for media captured. Commercial use requires additional
                                        written agreement.
                                    </p>
                                </div>
                            </div>

                            {/* Supplementary Sections Row */}
                            <div className="mt-20 grid grid-cols-1 gap-12 border-t border-white/5 pt-16 md:grid-cols-3">
                                <div className="flex gap-4">
                                    <Lock className="h-6 w-6 shrink-0 text-zinc-600" />
                                    <div>
                                        <h4 className="mb-2 text-sm font-bold tracking-tight text-white uppercase">
                                            Privacy First
                                        </h4>
                                        <p className="text-xs leading-relaxed text-zinc-500">
                                            Confidentiality guaranteed via standard NDAs for all private bookings.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Scale className="h-6 w-6 shrink-0 text-zinc-600" />
                                    <div>
                                        <h4 className="mb-2 text-sm font-bold tracking-tight text-white uppercase">
                                            Dispute Resolution
                                        </h4>
                                        <p className="text-xs leading-relaxed text-zinc-500">
                                            Settled via good-faith negotiation under the legal framework of Myanmar.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Edit3 className="h-6 w-6 shrink-0 text-zinc-600" />
                                    <div>
                                        <h4 className="mb-2 text-sm font-bold tracking-tight text-white uppercase">
                                            Amendments
                                        </h4>
                                        <p className="text-xs leading-relaxed text-zinc-500">
                                            We reserve the right to update these protocols to maintain service quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reference Image Style CTA Bar (Footer of the Card) */}
                        <div className="bg-gold flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:p-8">
                            <div className="text-black">
                                <p className="mb-1 text-[10px] font-black tracking-[0.2em] uppercase opacity-70">
                                    In need of a host?
                                </p>
                                <p className="text-xl leading-none font-black tracking-tighter uppercase md:text-2xl">
                                    Ready to start your engagement?
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => window.print()}
                                    className="hidden items-center gap-2 text-xs font-bold tracking-widest text-black/60 uppercase transition-colors hover:text-black md:flex"
                                >
                                    <Printer className="h-4 w-4" />
                                    Print PDF
                                </button>
                                <Link
                                    href="/#bookings"
                                    className="text-gold rounded-full bg-black px-10 py-5 text-sm font-black tracking-widest uppercase shadow-2xl transition-transform hover:scale-105"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Secondary Navigation */}
                <div className="mt-12 flex items-center justify-center gap-8">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-600 uppercase transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                        Back to Presence
                    </Link>
                    <div className="h-4 w-px bg-white/10" />
                    <Link
                        href="https://www.facebook.com/thazinnwewinofficial"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-600 uppercase transition-colors hover:text-white"
                    >
                        <MessageSquare className="h-3 w-3" />
                        Direct Inquiry
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
