import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BOOKING_URL } from '../constants';

export const FloatingCTA = () => {
    return (
        <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-accent/90 transition-all active:scale-95 cursor-pointer group"
        >
            <MessageCircle className="w-5 h-5" />
            <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Free Diagnosis</span>
                <span className="text-sm font-bold">30分無料診断</span>
            </div>
        </motion.a>
    );
};
