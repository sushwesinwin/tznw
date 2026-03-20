"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />

            <div className="mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-32">
                <div className="mb-12">
                    <h1 className="mb-4 font-serif text-4xl text-white md:text-5xl">Terms and Conditions</h1>
                    <p className="text-gold text-sm">
                        Last Updated:{" "}
                        {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                </div>

                <div className="space-y-8 leading-relaxed text-white/80">
                    {/* Booking Policy */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">1. Booking Policy</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                All bookings are subject to availability and must be confirmed in writing via email or
                                through official social media channels.
                            </p>
                            <p>
                                A non-refundable deposit of 30% is required to secure your booking date. The remaining
                                balance is due 7 days before the event date.
                            </p>
                            <p>
                                Booking requests should be made at least 2 weeks in advance for local events and 4 weeks
                                in advance for international engagements.
                            </p>
                        </div>
                    </section>

                    {/* Cancellation Policy */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">2. Cancellation Policy</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                Cancellations made more than 30 days before the event date will receive a 70% refund of
                                the total payment.
                            </p>
                            <p>Cancellations made 15-30 days before the event date will receive a 50% refund.</p>
                            <p>Cancellations made less than 15 days before the event date are non-refundable.</p>
                            <p>
                                If Thazin Nwe Win needs to cancel due to unforeseen circumstances, a full refund will be
                                provided or the event can be rescheduled at no additional cost.
                            </p>
                        </div>
                    </section>

                    {/* Services Provided */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">3. Services Provided</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                Services include but are not limited to: event hosting, MC services, television
                                presenting, brand ambassador appearances, and promotional events.
                            </p>
                            <p>
                                The scope of work will be clearly defined in the booking agreement. Any additional
                                requests beyond the agreed scope may incur additional charges.
                            </p>
                            <p>
                                Standard appearance duration is 2-4 hours. Extended hours can be arranged for an
                                additional fee.
                            </p>
                        </div>
                    </section>

                    {/* Client Responsibilities */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">4. Client Responsibilities</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                The client is responsible for providing accurate event details including date, time,
                                location, dress code, and event schedule.
                            </p>
                            <p>
                                The client must provide safe and appropriate working conditions, including secure
                                transportation, accommodation (for out-of-town events), and adequate security if
                                required.
                            </p>
                            <p>
                                The client is responsible for obtaining all necessary permits and licenses for the
                                event.
                            </p>
                        </div>
                    </section>

                    {/* Travel and Accommodation */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">5. Travel and Accommodation</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                For events outside Yangon, the client is responsible for all travel expenses including
                                flights, ground transportation, and accommodation.
                            </p>
                            <p>
                                Business class travel is required for international flights and flights over 2 hours
                                duration.
                            </p>
                            <p>Accommodation must be in a 4-star or higher hotel with appropriate security measures.</p>
                        </div>
                    </section>

                    {/* Media and Intellectual Property */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">6. Media and Intellectual Property</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                The client may use photographs and videos from the event for promotional purposes with
                                proper credit to Thazin Nwe Win.
                            </p>
                            <p>
                                Thazin Nwe Win reserves the right to use photographs and videos from the event for her
                                own promotional materials and social media.
                            </p>
                            <p>
                                Any commercial use of likeness or recorded material beyond the agreed scope requires
                                separate written permission.
                            </p>
                        </div>
                    </section>

                    {/* Liability */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">7. Liability</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                While every effort will be made to provide professional services, Thazin Nwe Win is not
                                liable for circumstances beyond reasonable control, including but not limited to natural
                                disasters, political unrest, illness, or travel disruptions.
                            </p>
                            <p>
                                The client agrees to indemnify and hold harmless Thazin Nwe Win from any claims,
                                damages, or liabilities arising from the event.
                            </p>
                        </div>
                    </section>

                    {/* Privacy and Confidentiality */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">8. Privacy and Confidentiality</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                All personal information provided during the booking process will be kept confidential
                                and used solely for the purpose of fulfilling the engagement.
                            </p>
                            <p>
                                Information will not be shared with third parties without explicit consent, except as
                                required by law.
                            </p>
                            <p>Private events require a signed non-disclosure agreement if requested by the client.</p>
                        </div>
                    </section>

                    {/* Dispute Resolution */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">9. Dispute Resolution</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                Any disputes arising from this agreement will be resolved through good faith negotiation
                                between both parties.
                            </p>
                            <p>
                                If a resolution cannot be reached, disputes will be handled according to the laws of
                                Myanmar.
                            </p>
                        </div>
                    </section>

                    {/* Amendments */}
                    <section>
                        <h2 className="mb-4 font-serif text-2xl text-white">10. Amendments</h2>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                These terms and conditions may be updated from time to time. Clients will be notified of
                                any significant changes.
                            </p>
                            <p>
                                By booking an appearance, you acknowledge that you have read, understood, and agree to
                                these terms and conditions.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="border-t border-white/10 pt-8">
                        <h2 className="mb-4 font-serif text-2xl text-white">Contact Information</h2>
                        <div className="space-y-2 text-sm md:text-base">
                            <p>
                                For questions about these terms or to discuss your booking requirements, please contact:
                            </p>
                            <p className="text-gold">
                                Facebook:{" "}
                                <a
                                    href="https://www.facebook.com/thazinnwewinofficial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold-dark transition-colors"
                                >
                                    @thazinnwewinofficial
                                </a>
                            </p>
                            <p className="text-gold">
                                Instagram:{" "}
                                <a
                                    href="https://www.instagram.com/thazin_nwe_win"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold-dark transition-colors"
                                >
                                    @thazin_nwe_win
                                </a>
                            </p>
                        </div>
                    </section>
                </div>

                {/* Print Button */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <button
                        onClick={() => window.print()}
                        className="bg-gold hover:bg-gold-dark inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 6 2 18 2 18 9" />
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                            <rect x="6" y="14" width="12" height="8" />
                        </svg>
                        <span>Print or Save as PDF</span>
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
