import { motion } from "motion/react";
import CssIcon from "../assets/CssIcon";
import JavascriptIcon from "../assets/JavascriptIcon";
import ReactIcon from "../assets/ReactIcon";
import HtmlIcon from "../assets/HtmlIcon";
import { MongoIcon } from "../assets/MongoIcon";
import NodeIcon from "../assets/NodeIcon";
import ExpressIcon from "../assets/ExpressIcon";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";

export default function AboutMe() {
    const skills = [
        { title: "React", image: <ReactIcon fill="#58c4dc" /> },
        {
            title: "JavaScript",
            image: <JavascriptIcon fill="#f8e41c" />,
        },
        { title: "HTML", image: <HtmlIcon fill="#e84c24" /> },
        { title: "CSS", image: <CssIcon fill="#1874b4" /> },
        { title: "MongoDB", image: <MongoIcon fill="#08ac44" /> },
        { title: "Node.js", image: <NodeIcon fill="#90c404" /> },
        { title: "Express", image: <ExpressIcon fill="white" /> },
    ];
    const schoolLink =
        "https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_C%C3%B4ng_ngh%E1%BB%87_Th%C3%B4ng_tin,_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Qu%E1%BB%91c_gia_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-full grid md:grid-cols-2 md:gap-x-8 gap-4 mx-4 md:mx-28 mt-12 md:mt-0 mb-12 md:mb-0"
        >
            <div className="my-auto flex flex-col gap-y-4">
                <AboutSection schoolLink={schoolLink} />
                <SkillsSection skills={skills} />
            </div>
            <EducationSection />
        </motion.div>
    );
}
