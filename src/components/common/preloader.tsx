"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imagesToPreload = [
  "/hero-profile-img.webp",
  "/about-profile-img.webp",
  "/impression-journal.webp",
  "/gallery-11.jpg",
  "/gallery-12.jpg",
  "/gallery-16.jpg",
  "/gallery-17.jpg",
  "/gallery-18.jpg",
  "/gallery-20.jpg",
  "/gallery-22.jpg",
  "/gallery-23.jpg",
];

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = imagesToPreload.map((src) => {
          return new Promise((resolve, _reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Resolve even on error so the app doesn't hang
          });
        });

        // Wait for all images + a minimum time (e.g., 2s) to prevent flickering
        await Promise.all([
          ...imagePromises, 
          new Promise((resolve) => setTimeout(resolve, 2000)), // Minimum 2s display
          document.fonts.ready, // Wait for fonts
        ]);

        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load assets", error);
        setIsLoading(false); // Fallback
      }
    };

    loadImages();
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }} // Slide up and fade out
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
          >
            {/* --- CUSTOMIZE YOUR SPLASH SCREEN UI HERE --- */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <h1 className="text-2xl font-light tracking-widest">Prepare for his coming...</h1>
              
              {/* Optional Progress Bar */}
              <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden mt-4">
                 <motion.div 
                   className="h-full bg-white"
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                 />
              </div>
            </motion.div>
            {/* ------------------------------------------- */}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* While loading, we can either hide children or show them underneath. 
          Hiding them prevents "Flash of Unstyled Content" */}
      {!isLoading && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </motion.div>
      )}
    </div>
  );
}