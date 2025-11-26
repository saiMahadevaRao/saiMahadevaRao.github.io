
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const TypingIndicator = () => {
    return (
        <div className="flex w-full mb-4 justify-start">
            <div className="flex max-w-[80%] gap-2 flex-row">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-neutral-700">
                    <FaRobot className="text-white text-xs" />
                </div>

                <div className="p-4 rounded-2xl rounded-tl-none bg-neutral-800 border border-neutral-700 flex items-center gap-1">
                    <motion.div
                        className="w-2 h-2 bg-neutral-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                        className="w-2 h-2 bg-neutral-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                        className="w-2 h-2 bg-neutral-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TypingIndicator;
