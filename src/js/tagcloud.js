import TagCloud from "TagCloud";

const container = '.tagcloud';
const texts = [
    'Python', 'HTML', 'JavaScript',
    'CSS', 'Blender', 'Flutter',
    'Vegas Pro', 'C#', 'Unity',
    'SQL', 'Linux', 'Photoshop'
];
const options = {
    radius: 160,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
};

TagCloud(container, texts, options);