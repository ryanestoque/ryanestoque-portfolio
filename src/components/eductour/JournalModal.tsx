"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion"; // or "motion/react" depending on your version

interface JournalModalProps {
  triggerText: string;
  imageSrc: string; // The main image of the company
  title: string;
}

export function JournalModal({ triggerText, imageSrc, title }: JournalModalProps) {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn px-4 py-2 rounded-md">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            {triggerText}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            👁️ {/* Eye icon for "View" */}
          </div>
        </ModalTrigger>

        {/* THE MODAL CONTENT */}
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Journal Entry:{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                {title}
              </span>
            </h4>
            
            {/* SINGLE IMAGE DISPLAY */}
            <div className="flex justify-center items-center">
              <motion.div
                style={{ rotate: Math.random() * 10 - 5 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="rounded-xl p-1 bg-white dark:bg-neutral-800 border border-neutral-100 shrink-0 overflow-hidden"
              >
                <img
                  src={imageSrc}
                  alt={title}
                  className="rounded-lg h-64 w-full md:h-80 md:w-96 object-cover"
                />
              </motion.div>
            </div>

            {/* DUMMY TEXT CONTENT - Customize this if you have real journal text */}
            <div className="py-6 text-center text-neutral-500 dark:text-neutral-400">
                <p>Captured moments during our visit at {title}.</p>
                <p className="text-xs mt-2 italic">Tap outside to close.</p>
            </div>

          </ModalContent>
          
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Close
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}