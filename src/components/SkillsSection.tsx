import { ReactNode } from "react";

interface Skill {
    title: string;
    image: ReactNode;
}

interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-white text-2xl">Skills</h1>
            <div className="flex gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2"
                    >
                        {skill.image}
                        <span className="text-white font-bold text-xs md:text-sm">
                            {skill.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
