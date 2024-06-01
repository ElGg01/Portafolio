import gsap from "gsap";
import SpliteTextJS from "split-text-js";

const titles = gsap.utils.toArray('p');
const tl = gsap.timeline({delay: 1});

titles.forEach((title, index, array) => {
    const splitTitle = new SpliteTextJS(title);

    tl.from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.02,
    }, '<');

    if (!(index === array.length - 1)) {
        tl.from(splitTitle.chars, {
            opacity: 0,
            y: -80,
            rotate: 90,
            stagger: 0.02,
        }, '<1');
    }
});