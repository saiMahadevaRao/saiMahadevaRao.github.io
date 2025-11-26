import ragBanner from "../assets/images/rag_system_banner.png";
import rlBanner from "../assets/images/rl_locomotion_banner.png";
import aiDetectionBanner from "../assets/images/ai_image_detection_banner.png";
import gnnBanner from "../assets/images/gnn_citation_banner.png";
import emotionBanner from "../assets/images/emotion_detection_banner.png";
import translationBanner from "../assets/images/transformer_translation_banner.png";

export const projects = [
    {
        id: 1,
        title: "RAG System for LLM Factual Grounding",
        des: "Developed RAG system improving LLM factual accuracy using vector stores. Integrated Llama-13b-chat, implemented Pinecone for document retrieval.",
        img: ragBanner,
        iconLists: ["Python", "LangChain", "Pinecone", "HuggingFace"],
        link: "#",
        keywords: ["LLM", "RAG", "LangChain", "Vector DB"],
    },
    {
        id: 2,
        title: "PPO vs SAC Locomotion Analysis",
        des: "Comparative study of RL algorithms for continuous control tasks. 100% success rate with SAC vs 20% with PPO.",
        img: rlBanner,
        iconLists: ["PyTorch", "OpenAIGym", "MuJoCo", "RL"],
        link: "https://github.com/saiMahadevaRao/Comparative-Analysis-of-PPO-and-SAC",
        keywords: ["Reinforcement Learning", "PyTorch", "Robotics", "MuJoCo"],
    },
    {
        id: 3,
        title: "VisAIble: AI-Generated Image Detection",
        des: "Explainable AI system for detecting AI-generated images. 63% accuracy on 140K face dataset, implemented XAI visualization.",
        img: aiDetectionBanner,
        iconLists: ["PyTorch", "EfficientNet", "GradCAM", "LIME"],
        link: "https://github.com/saiMahadevaRao/VisAIble",
        keywords: ["Computer Vision", "XAI", "Deep Learning", "Classification"],
    },
    {
        id: 4,
        title: "ResearchLens: GNN Citation Networks",
        des: "Node classification and influence analysis in citation networks. 64.30% accuracy on ogbn-arxiv (169K nodes).",
        img: gnnBanner,
        iconLists: ["PyTorch", "GNN", "tSNE"],
        link: "https://github.com/saiMahadevaRao/ResearchLens",
        keywords: ["GNN", "Graph Learning", "Node Classification", "Citation Analysis"],
    },
    {
        id: 5,
        title: "Emotion Detection System",
        des: "Real-time facial emotion recognition with transfer learning. 63.49% accuracy on FER2013, 30+ FPS real-time inference.",
        img: emotionBanner,
        iconLists: ["PyTorch", "CNN", "ResNet", "OpenCV"],
        link: "https://github.com/saiMahadevaRao/Emotion_Detection",
        keywords: ["Computer Vision", "CNN", "Real-time", "Face Detection"],
    },
    {
        id: 6,
        title: "Transformer Document Translation",
        des: "Multilingual translation and summarization for low-resource languages using custom Transformers and ROUGE evaluation.",
        img: translationBanner,
        iconLists: ["Transformers", "NLP", "Python"],
        link: "https://github.com/saiMahadevaRao/CS6120-Translator",
        keywords: ["NLP", "Transformers", "Machine Translation", "Deep Learning"],
    },
];
