"use client";

import React from 'react';
import { Emojione } from 'react-emoji-render';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";
import ProfilePic from './ProfilePic';

const CompanyLink = styled(Link)`
  color: #e4228e;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: san-serif;
`;

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-x-10">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1
          className="mb-10 mt-4 px-4 text-5xl font-medium !leading-[1.5] sm:text-5xl"
        >
          <div>
              <Emojione svg text="Hi :wave:, I'm Alex" />
            <div>
              I am a Data Analyst{" "}
              <CompanyLink atLink href="https://sagossgroup.com/">
                @sagoss
              </CompanyLink>
            </div>
          </div>
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="/CV.pdf"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-white/10"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </Link>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </motion.div>

      <div className="flex justify-center sm:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
        <ProfilePic />
        </motion.div>
      </div>
    </section>
  );
}
