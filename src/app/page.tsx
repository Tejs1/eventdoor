import React from "react";
import { BackgroundBeams } from "@/components/background-beams";
import { SparklesCore } from "@/components/sparkles";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";
import logo from "@/public/logo.svg";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/event_door.in",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/eventdoor.in",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/eventdoor",
    icon: Facebook,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@EventDoor",
    icon: Youtube,
  },
  {
    name: "Twitter",
    url: "https://x.com/eventdoor_in",
    icon: Twitter,
  },
];

export default function LandingPage() {
  return (
    <div className="bg-grid-white/[0.02] relative flex h-screen w-full items-center justify-center bg-black/[0.96] antialiased">
      {/* Background Effects */}
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <BackgroundBeams />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-2xl p-4">
        {/* Coming Soon */}
        <div className="mb-8 text-center">
          <TextGenerateEffect
            words="Coming Soon..."
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
          />
        </div>

        {/* Brand Name */}
        <h1 className="mb-6 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent text-white md:text-6xl">
          <svg
            className="inline h-12 w-12 text-neutral-200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 4397 4397"
          >
            <g id="_723755520">
              <path
                fill="#fff"
                d="M253 0l3892 0c139,0 253,114 253,253l0 3892c0,139 -114,253 -253,253l-3892 0c-138,0 -253,-114 -253,-253l0 -3892c0,-138 114,-253 253,-253zm1821 1249l1346 -318c-17,-9 -35,-14 -56,-14l-2330 0c-64,0 -116,52 -116,116l0 2330c0,64 52,116 116,116l2330 0c21,0 39,-5 56,-14l-1346 -317 0 -1899zm647 779l0 298 -328 -20 0 411 768 182 0 -1401 -768 181 0 369 328 -20z"
              />
            </g>
          </svg>{" "}
          Event Door
        </h1>

        {/* Tagline */}
        <p className="text-center text-lg text-neutral-200 md:text-xl">
          Premium swags, personalized printing & branding
        </p>
        <p className="mb-8 text-center text-lg text-neutral-200 md:text-xl">
          at affordable prices.
        </p>

        {/* Social Updates Text */}
        <p className="mb-6 text-center text-neutral-200">
          Get updates on social media
        </p>

        {/* Social Links */}
        <div className="mb-8 flex justify-center gap-4">
          {socials.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className="border-neutral-700 bg-transparent hover:bg-neutral-800"
              asChild
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 text-neutral-300" />
              </a>
            </Button>
          ))}
        </div>

        {/* Email Signup */}
        <div className="flex flex-col items-center">
          <Button
            className="bg-white px-8 text-black hover:bg-neutral-200"
            size="lg"
          >
            Notify Me
          </Button>
          <p className="mt-4 text-sm text-neutral-300">
            We&#39;ll notify you when we launch
          </p>
        </div>
      </div>
    </div>
  );
}
