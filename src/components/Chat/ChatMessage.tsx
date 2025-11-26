
import ReactMarkdown from "react-markdown";
import { cn } from "../../utils/cn";
import { FaUser, FaRobot } from "react-icons/fa";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
    const isUser = role === "user";

    return (
        <div
            className={cn(
                "flex w-full mb-4",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "flex max-w-[80%] gap-2",
                    isUser ? "flex-row-reverse" : "flex-row"
                )}
            >
                <div
                    className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        isUser ? "bg-purple-500" : "bg-neutral-700"
                    )}
                >
                    {isUser ? <FaUser className="text-white text-xs" /> : <FaRobot className="text-white text-xs" />}
                </div>

                <div
                    className={cn(
                        "p-3 rounded-2xl text-sm prose prose-invert prose-sm max-w-none",
                        isUser
                            ? "bg-purple-500 text-white rounded-tr-none"
                            : "bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-700"
                    )}
                >
                    <ReactMarkdown
                        components={{
                            a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline" />
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
