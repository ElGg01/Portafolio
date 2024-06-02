import TagCloud from "TagCloud";

const container = '.tagcloud';
const texts = [
    'Python', 'HTML', 'JavaScript',
    'CSS', '3D', 'Flutter',
    'Edición', 'C#', 'Unity',
    'SQL', 'Linux',
];
const options = {
    radius: 180,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true

};

TagCloud(container, texts, options);