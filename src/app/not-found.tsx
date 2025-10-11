"use client"
// import { notFound } from 'next/navigation';
import { motion } from "motion/react";
import Link from "next/link";
import "./globals.css";

export default function NotFound() {
    return (
        <div className="pt-30 pb-30">
            <motion.div initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.1, duration: 0.45, ease: [.15,.26,0,1] }} className="items-center flex flex-col gap-1.5">
                <Link href="https://tensor.art/images/918230259374016680?post_id=918230259374016681">
                    <motion.img whileHover={{ scale: 0.98 }} initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.0, duration: 0.38, ease: [.15,.26,0,1] }} className="w-46 h-46 mb-3 rounded-2xl" src="/assets/ai/Ananimegir.png" />
                </Link>
                <motion.div className="items-center flex flex-col gap-1.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.45, ease: [.15,.26,0,1] }}>
                    <h4>페이지가 없었어요</h4>
                    <motion.p className="text-center" initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.21, duration: 0.45, ease: [.15,.26,0,1] }}>경로로 진입해서 찾아봤지만, 나오는 건 먼지 뿐이네요.<br/>(에러 코드: 404)</motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
}