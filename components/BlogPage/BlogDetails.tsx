"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import IMAGE from "../../public/images/homehero.jpg";
import { Clock, Facebook, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";

const BlogDetails = () => {
  // On the client side, get the current URL.
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    // Ensure this runs only in the browser
    setBlogUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(blogUrl);

  // Share URLs
  const shareToWhatsApp = `https://wa.me/text=Check out this URL:${encodedUrl}`;
  const shareToLinkedIn = `https://www.linkedin.com/shareArticle?url=${encodedUrl}`;
  const shareToFacebook = `https://www.facebook.com/sharer.php?u=${encodedUrl}`;
  const shareToTwitter = `https://twitter.com/intent/tweet?url=${encodedUrl}`;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      {/* Main Section */}
      <section className="max-w-[100rem] mx-auto my-24">
        {/* Wrapper with gradient background */}
        <div className="w-full h-auto lg:p-8 rounded-[2rem] bg-gradient-to-b from-[#DF1862]/20 from-20% to-30% to-[#66666600]">
          {/* Container */}
          <div className="flex flex-col gap-12">
            {/* Top Section */}
            <div className="w-full flex flex-col gap-4 mt-12 px-8">
              {/* Reading time indicator */}
              <div className="w-max border border-pink-500 px-5 py-2 flex items-center gap-6 rounded-[2rem]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <p className="text-sm text-black/60">5 min read</p>
                </div>
                <div className="block w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-black/60">March 15, 2024</p>
                </div>
              </div>

              {/* Title and Image Section */}
              <div className="w-full flex justify-between items-start">
                {/* Left - Title */}
                <div className="w-full max-w-[679px] h-auto">
                  <h2 className="text-4xl lg:text-6xl font-medium leading-tight">
                    The Future of Web Development: Trends and Technologies Shaping Tomorrow's Digital Landscape
                  </h2>
                </div>

                {/* Right - Featured Image */}
                <div className="w-[30%] aspect-square relative rounded-3xl overflow-hidden">
                  <Image
                    src="/images/report.jpg"
                    width={350}
                    height={650}
                    alt="Web development workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-start px-8 pb-12">
              {/* Left - Main Content */}
              <div className="w-[62.5%] h-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">Découvrez la liste :</p>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Bourse L'Oreal UNESCO</h3>

                  <p className="text-gray-700 leading-relaxed mb-2">
                    16ème édition du programme Jeunes Talents Afrique subsaharienne L'Oréal-UNESCO Pour les Femmes et la
                    Science.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>Doctorat :</strong> 10 000 €
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>Post-doctorat :</strong> 15 000 €
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Pour plus d'info{" "}
                    <a href="https://www.forwomeninscience.com/" className="text-pink-500 hover:underline">
                      https://www.forwomeninscience.com/
                    </a>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    <strong>Date limite :</strong> 04 Avril 2025
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="text-gray-700 leading-relaxed">
                      <strong>Acceptance Letter from a DU:</strong> Your chosen institution must be a Designated
                      Learning Institution (DLI). You can apply before you get your acceptance letter, but you must
                      submit it before moving forward.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <strong>Valid Passport and Study Permit:</strong> Make sure your passport is up-to-date and covers
                      your full study duration. Then apply for your study permit—the key to entering Canada legally as a
                      student.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <strong>Proof of Financial Support:</strong> You must show that you can afford tuition fees,
                      living expenses, and return travel. It's not just a formality—Canada wants to know you're
                      prepared.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <strong>English or French Proficiency:</strong> Universities typically require IELTS, TOEFL, or
                      TEF scores. Strong communication skills equal better academic performance and smoother adaptation.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <strong>Medical and Police Clearance:</strong> Depending on your home country, you may need a
                      medical exam and a police certificate. It's about keeping Canada safe for all.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <strong>Biometrics Submission:</strong> Biometric data (fingerprints and photo) are now standard
                      for most applicants—another step toward secure and streamlined processing.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <strong>Statement of Purpose (SOP):</strong> This is your story. Why Canada? Why now? What are
                      your goals? A compelling SOP can make all the difference in a competitive pool of applicants.
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-6">Découvrez la liste :</p>

                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Bourse L'Oreal-UNESCO</h3>

                  <p className="text-gray-700 leading-relaxed mb-2">
                    16ème édition du programme Jeunes Talents Afrique subsaharienne L'Oréal-UNESCO Pour les Femmes et la
                    Science.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>Doctorat :</strong> 10 000 €
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>Post-doctorat :</strong> 15 000 €
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Pour plus d'info future{" "}
                    <a href="https://www.forwomeninscience.com/" className="text-pink-500 hover:underline">
                      https://www.forwomeninscience.com/
                    </a>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Date limite :</strong> 04 Avril 2025
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    16ème édition du programme Jeunes Talents Afrique subsaharienne L'Oréal-UNESCO Pour les Femmes et la
                    Science.
                    <br />
                    <strong>Doctorat :</strong> 10 000 €
                  </p>
                </div>
              </div>

              {/* Right - Sidebar */}
              <div className="w-[30%] h-auto flex flex-col gap-8">
                {/* Table of Contents */}
                <div className="w-full p-6 bg-[#F8F8F8] flex flex-col gap-3 rounded-3xl">
                  <h3 className="text-lg font-light ">Table of Contents</h3>

                  <div className="flex flex-col gap-3">
                    <div className="w-full py-4 px-3 border border-black/20 rounded-[2.5rem] text-center text-sm text-gray-600">
                      Introduction to Modern Web Dev
                    </div>
                    <div className="w-full py-4 px-3 border border-black/20 rounded-[2.5rem] text-center text-sm text-gray-600">
                      AI-Powered Development Tools
                    </div>
                    <div className="w-full py-4 px-3 border border-black/20 rounded-[2.5rem] text-center text-sm text-gray-600">
                      Performance Optimization
                    </div>
                    <div className="w-full py-4 px-3 border border-black/20 rounded-[2.5rem] text-center text-sm text-gray-600">
                      Future Frameworks
                    </div>
                    <div className="w-full py-4 px-3 border border-black/20 rounded-[2.5rem] text-center text-sm text-gray-600">
                      Conclusion & Next Steps
                    </div>
                  </div>
                </div>

                {/* Social Share */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-light font-medium">Share this article</h3>

                  <div className="flex gap-2 items-center">
                    <a
                      href={shareToFacebook}
                      className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] block relative border border-black/20 rounded-full transition-transform duration-600 hover:scale-90"
                    >
                      <Facebook className="text-xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </a>
                    <a
                      href={shareToTwitter}
                      className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] block relative border border-black/20 rounded-full transition-transform duration-600 hover:scale-90"
                    >
                      <Twitter className="text-lg text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </a>
                    <a
                      href={shareToWhatsApp}
                      className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] block relative border border-black/20 rounded-full transition-transform duration-600 hover:scale-90"
                    >
                      <MessageCircle className="text-xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </a>
                    <a
                      href={shareToLinkedIn}
                      className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] block relative border border-black/20 rounded-full transition-transform duration-600 hover:scale-90"
                    >
                      <Linkedin className="text-lg text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </a>
                  </div>
                </div>

                {/* Author */}
                <div className="relative flex items-center gap-3">
                  <div className="w-[60px] aspect-square rounded-full overflow-hidden relative">
                    <Image src="/a1.png" width={65} height={65} alt="Author" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-gray-600 text-sm">
                      Written by <span className="font-semibold text-black/50">Sarah Johnson</span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Senior Developer at{" "}
                      <a href="#" className="font-semibold text-black/50">
                        TechCorp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
