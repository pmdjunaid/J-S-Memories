"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(' ');
}

interface LoginPasswordProps {
    botName?: string;
    botStatus?: string;
    initialMessage?: string;
    botAvatarColor?: string;
    inputPlaceholder?: string;
    onUnlock?: () => void;
    maxWidth?: string;
    height?: string;
    backgroundColor?: string;
    cardBgColor?: string;
    headerBgColor?: string;
    headerTextColor?: string;
    botAvatarBgColor?: string;
    botAvatarBorderColor?: string;
    messagesBgColor?: string;
    botMessageBgColor?: string;
    botMessageTextColor?: string;
    userMessageBgColor?: string;
    userMessageTextColor?: string;
    inputBgColor?: string;
    inputFocusRingColor?: string;
    inputTextColor?: string;
    buttonBgColor?: string;
    buttonHoverScale?: number;
    buttonIconColor?: string;
    className?: string;
}

export const LoginPassword: React.FC<LoginPasswordProps> = ({
    botName = "J & 〽️",
    botStatus = "Online",
    initialMessage = "Hey 〽️annu! Enter Our Code?",
    inputPlaceholder = "Type here...",
    onUnlock,
    maxWidth = "24rem",
    height = "500px",
    backgroundColor = "#0a0010",
    cardBgColor = "#ffffff",
    headerBgColor = "#bf9fff",
    headerTextColor = "#ffffff",
    botAvatarBgColor = "#c9a96e",
    botAvatarBorderColor = "#ffffff",
    messagesBgColor = "#f9fafb",
    botMessageBgColor = "#ffffff",
    botMessageTextColor = "#1f2937",
    userMessageBgColor = "#bf9fff",
    userMessageTextColor = "#ffffff",
    inputBgColor = "#f3f4f6",
    inputFocusRingColor = "#bf9fff",
    inputTextColor = "#1f2937",
    buttonBgColor = "#bf9fff",
    buttonHoverScale = 1.05,
    buttonIconColor = "#ffffff",
    className = "",
}) => {
    const [messages, setMessages] = useState([{ id: 1, text: initialMessage, sender: 'bot' }]);
    const [input, setInput] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);

    const send = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input || isUnlocked) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' as const };
        setMessages(prev => [...prev, userMsg]);
        
        const password = input.trim().toLowerCase();
        setInput("");

        setTimeout(() => {
            if (password === "jmiss") {
                setIsUnlocked(true);
                setMessages(prev => [...prev, { 
                    id: Date.now() + 1, 
                    text: "Correct! Welcome to our memories. ❤️", 
                    sender: 'bot' 
                }]);
                
                setTimeout(() => {
                    onUnlock?.();
                }, 1500);
            } else {
                setMessages(prev => [...prev, { 
                    id: Date.now() + 1, 
                    text: "That's not my 〽️annu... Try again? 😊", 
                    sender: 'bot' 
                }]);
            }
        }, 1000);
    };

    return (
        <div
            className="fixed inset-0 z-[9999] w-full flex items-center justify-center p-4 text-black"
            style={{ backgroundColor }}
        >
            <div
                className={`w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col ${className}`}
                style={{
                    maxWidth,
                    height,
                    backgroundColor: cardBgColor,
                }}
            >
                <div
                    className="p-4 flex items-center gap-2"
                    style={{
                        backgroundColor: headerBgColor,
                        color: headerTextColor,
                    }}
                >
                    <div
                        className="w-8 h-8 rounded-full border-2"
                        style={{
                            backgroundColor: botAvatarBgColor,
                            borderColor: botAvatarBorderColor,
                        }}
                    />
                    <div>
                        <h3 className="font-bold text-sm">{botName}</h3>
                        <p className="text-[10px] opacity-80">{botStatus}</p>
                    </div>
                </div>

                <div
                    className="flex-1 p-4 overflow-y-auto space-y-4"
                    style={{ backgroundColor: messagesBgColor }}
                >
                    <AnimatePresence>
                        {messages.map((m) => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={cn(
                                    "max-w-[80%] p-3 text-sm rounded-2xl",
                                    m.sender === 'bot'
                                        ? "bg-white rounded-tl-none shadow-sm"
                                        : "ml-auto rounded-tr-none shadow-md"
                                )}
                                style={{
                                    backgroundColor: m.sender === 'bot' ? botMessageBgColor : userMessageBgColor,
                                    color: m.sender === 'bot' ? botMessageTextColor : userMessageTextColor,
                                }}
                            >
                                {m.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <form onSubmit={send} className="p-2 bg-white flex gap-2">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="flex-1 rounded-full px-4 text-sm focus:outline-none focus:ring-2 border border-gray-200"
                        style={{
                            backgroundColor: inputBgColor,
                            borderColor: inputFocusRingColor,
                            color: inputTextColor,
                        }}
                        placeholder={inputPlaceholder}
                        disabled={isUnlocked}
                    />
                    <button
                        type="submit"
                        className="p-3 rounded-full transition-transform"
                        style={{
                            backgroundColor: buttonBgColor,
                            color: buttonIconColor,
                        }}
                        disabled={isUnlocked}
                        onMouseEnter={(e) => {
                            if (!isUnlocked) e.currentTarget.style.transform = `scale(${buttonHoverScale})`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default function LoginPasswordPreview() {
    return <LoginPassword onUnlock={() => alert("Website Unlocked!")} />;
}
