"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Method from "@/components/Method";
import Stats from "@/components/Stats";
import Progression from "@/components/Progression";
import Pledge from "@/components/Pledge";
import TrustManifest from "@/components/TrustManifest";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => {
      if (el.closest(".hero")) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Method />
      <Stats />
      <Progression />
      <Pledge />
      <TrustManifest />
      <Download />
      <Footer />
    </>
  );
}
