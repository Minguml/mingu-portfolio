import TextWithUnderline from "../components/TextWithUnderline";

export default function Contact() {
    const emailLink = "hnminh.vu.3004@gmail.com";
    const githubLink = "https://github.com/Minguml";
    const phoneNumber = "+84 386 246 184";
    return (
        <div className="flex m-auto w-full h-full font-main ">
            <div className="m-auto flex flex-col gap-y-2 px-8 md:px-0">
                <h1 className="text-almond font-bold text-4xl">
                    You can contact me through:
                </h1>
                <p className="text-almond">
                    <span className="font-bold">Email:</span>{" "}
                    <a href="mailto:hnminh.vu.3004@gmail.com">
                        <TextWithUnderline text={emailLink} />
                    </a>
                </p>
                <p className="text-almond">
                    <span className="font-bold">Github:</span>{" "}
                    <a href={githubLink}>
                        <TextWithUnderline text={githubLink} />
                    </a>
                </p>
                <p className="text-almond">
                    <span className="font-bold">Mobile:</span>{" "}
                    <a
                        onClick={() => {
                            navigator.clipboard.writeText(phoneNumber);
                        }}
                    >
                        <TextWithUnderline text={phoneNumber} />
                    </a>
                </p>
            </div>
        </div>
    );
}
