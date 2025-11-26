import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useChat } from "../../hooks/useChat";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import { cn } from "../../utils/cn";

const ChatWidget = () => {
    const { messages, isLoading, isOpen, toggleChat, sendMessage } = useChat();
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        sendMessage(inputValue);
        setInputValue("");
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-20 right-4 md:right-8 w-[90vw] md:w-[400px] h-[500px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl z-[60] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-neutral-800 border-b border-neutral-700 flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-bold">Ask AI about Sai</h3>
                                <p className="text-xs text-neutral-400">Powered by RAG + LLM</p>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-neutral-900 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <ChatMessage key={idx} role={msg.role} content={msg.content} />
                            ))}
                            {isLoading && <TypingIndicator />}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form
                            onSubmit={handleSubmit}
                            className="p-4 bg-neutral-800 border-t border-neutral-700 flex gap-2"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask a question..."
                                className="flex-1 bg-neutral-900 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-neutral-700 placeholder-neutral-500"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputValue.trim()}
                                className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <FaPaperPlane className="text-sm" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hint Bubble */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        transition={{ delay: 1, duration: 0.3 }}
                        className="fixed bottom-20 right-4 md:right-8 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 z-[59] max-w-[200px]"
                    >
                        <div className="relative">
                            <p className="text-sm font-medium">
                                Ask about Sai / Get to know Sai
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                                Powered by AI ✨
                            </p>
                            {/* Arrow */}
                            <div className="absolute -bottom-[18px] right-4 w-4 h-4 bg-white dark:bg-zinc-800 border-b border-r border-neutral-200 dark:border-neutral-700 transform rotate-45"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={cn(
                    "fixed bottom-4 right-4 md:bottom-8 md:right-8 w-14 h-14 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center z-[60] transition-all duration-300",
                    isOpen ? "rotate-90 bg-neutral-700 hover:bg-neutral-600" : "animate-pulse"
                )}
            >
                {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-2xl" />}
            </button>
        </>
    );
};

export default ChatWidget;
