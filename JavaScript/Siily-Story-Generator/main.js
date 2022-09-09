const randomize = document.querySelector(".randomize");
const customName = document.getElementById("customname");
const story = document.querySelector(".story");

const storyTemplate = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const names = ["Willy the Goblin", "Big Daddy", "Father Christma"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const surprisings = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function nextInt(num) {
    return Math.floor(Math.random() * num);
}

function randomSelect(array) {
    return array[nextInt(array.length)];
}

function generateStory() {
    let name = customName.textContent;
    let text = storyTemplate;

    text = text.replaceAll(":insertx:", randomSelect(names));
    text = text.replaceAll(":inserty:", randomSelect(places));
    text = text.replaceAll(":insertz:", randomSelect(surprisings));
    if(name !== "") text = text.replace("Bob", name)

    story.textContent = text;
    story.style.visibility = 'visible';
}

randomize.addEventListener("click", generateStory);