import style from "../../../css/Story.module.css";
import { useEffect, useState } from "react";

export default function Story() {
    const stories = [
        {
            head: "Delicious and Healthy",
            text: "Very delicious! Ordered the variety pack with 2 packs of Chocolate Raspberry and 1 pack each of Mango Turmeric and Lemon Matcha. All the flavours are quite exotic and unique. The bites hold you over between meals and definitely provide the energy boost many of us need. Perfect gift for any occasion. Love the packaging and presentation. Strongly recommend you give it a try.",
        },
        {
            head: "Healthy and appetizing!",
            text: "Great, convenient sized packaging, with a delicious snack on the inside. The whole family loves it including our five year old!",
        },
        {
            head: "Checks all the health and nutritional boxes while calorie friendly.",
            text: `I loved all the flavors and the variety these offer. Since my career requires that I be on the run quite often, there are often moments when I cannot eat at regular meal times. These snack bites give me the energy and nutrition to power through while staving off bad "hangry" food decisions. This is a wholesome, well conceived, product which checks all my boxes for health, nutrition, calorie count and variety.`,
        },
        {
            head: "The most delicious healthy snack out there!",
            text: "A plant based snack that stands head and shoulders above its competitors in its taste. I bought the variety pack and the lemon matcha was my favorite! Great snack to munch on during the workday or use as a substitute for dessert. Will be getting more of these!",
        },
    ];

    const [currentStories, setCurrentStories] = useState(stories.slice(0, 3));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentStories((prevStories) => {
                const updatedStories = [
                    ...prevStories.slice(1),
                    stories[
                        (stories.indexOf(prevStories[2]) + 1) % stories.length
                    ],
                ];
                return updatedStories;
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={style.container}>
            <h1>TESTIMONIALS</h1>
            <div className={style.testimonials}>
                {currentStories.map((st, index) => (
                    <div className={style.testimonial} key={index}>
                        <h1>{st.head}</h1>
                        <p>{st.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
