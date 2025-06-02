import React from "react";
import Typed from "typed.js";
import "../utils/cursor.css";

export default function TypedName() {
    const el = React.useRef<HTMLSpanElement | null>(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["VU HOANG NHAT MINH"],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <span className="text-almond text-xl md:text-3xl" ref={el} />
        </div>
    );
}
