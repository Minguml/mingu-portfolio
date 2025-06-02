import TypedName from "./TypedName";

interface AboutSectionProps {
    schoolLink: string;
}

export default function AboutSection({ schoolLink }: AboutSectionProps) {
    return (
        <div>
            <h1 className="text-white text-xl md:text-2xl">About</h1>
            <TypedName />
            <p className="whitespace-pre-line text-white tracking-widest text-xs md:text-sm">
                A senior Software Engineering student at Ho Chi Minh city's
                University of Information Technology{" "}
                <span
                    title="University of Information Technology"
                    onClick={() => window.open(schoolLink, "_blank")}
                    className="text-react font-bold cursor-pointer hover:underline"
                >
                    (UIT)
                </span>
                {""} with a strong passion for web development.
                <br />
                Over the course of my studies, I have gained hands-on experience
                in <span className="text-react font-bold">React</span>,{" "}
                <span className="text-java-script font-bold">JavaScript</span>{" "}
                and I am now seeking an internship opportunity to apply my
                skills in a real-world environment. I am particularly interested
                in web development, and I am eager to contribute and learn from
                a dynamic team.
            </p>
        </div>
    );
}
