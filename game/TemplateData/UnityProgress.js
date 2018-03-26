counter = 0;
var timer;

var items = [
  "Although 69 percent of children are enrolled in primary school (1st through 6th grade) in Mali, only 34 percent are enrolled in secondary school. Why? There are many reasons but the most fundamental is that many kids just live too far from a middle school. On average, before Mali Rising builds a school in a village, kids faced a 3-to 5-mile walk one way to school…and sometimes it was a 10-mile trip! As a practical matter, this means kids are forced to drop out.",
  "Rural villagers in Mali do not have the luxury of running water. Every drop of water must be gathered from a local well and carried back to the home. A hand pumped well like this is considered a very good well – in many villages water is still drawn up by hand with buckets. Women and children are almost always responsible for gathering and carrying water. ",
  "A village is lucky if they have their own community health center or clinic – many villages have no healthcare at all. Community health centers provide front line care in emergencies, vaccinations, and other basic health support. In a village like Beneko the hospital is several hours’ drive down a rough road that may be impassable during the rainy season. This makes having a community health center very important.",
  "Teachers, especially in remote schools like Mali Rising’s schools, have a hard job – they have as many as 100 students in a class, often teach without textbooks, teach many subjects, and receive almost no training or support. In most of our rural schools, teachers live in very modest houses provided by the village, with no running water or electricity. The teachers are almost always living far from family and friends, and they can find village life hard.",
  "Imagine a middle school classroom with 100 teenage students! That is not at all rare in Mali. Kids share desks – often sitting three to a bench. If there are no seats left, students will sit on the floor for a chance to learn.",
  "Imagine learning algebra or a foreign language without a textbook! This is a common occurrence in Mali classrooms. Many schools have no textbooks at all – zero. In other schools, three or four students might share one book. We’re working to make sure our schools are full of the books kids need to learn!",
  "With a population of more than 17 million, Mali is a melting pot of languages, ethnic groups, and traditions. Yet Mali is one of the poorest countries in the world, and it faces many challenges, including the fact that Mali’s adult literacy rate is only 33.4 percent. This means Mali faces an enormous challenge when it comes to developing the teachers, farmers, doctors, politicians, and other leaders necessary to build a stable and prosperous future.",
  "Mali’s economy is largely based on agriculture, including cotton, millet, rice, corn, vegetables, peanuts, cattle, sheep, and goats."
];

function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.progress) {
    gameInstance.didYouKnow = document.createElement("div");
    gameInstance.didYouKnow.className = "didYouKnow";
    gameInstance.didYouKnow.dyktext = document.createElement("p");
    gameInstance.didYouKnow.appendChild(gameInstance.didYouKnow.dyktext);
    gameInstance.container.appendChild(gameInstance.didYouKnow);

    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.container.appendChild(gameInstance.progress);
    timer = window.setInterval(updateText, 1000);
  }
  gameInstance.didYouKnow.dyktext.innerHTML = items[counter];
  gameInstance.progress.full.style.width = (100 * progress) + "%";
  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
  if (progress == 1) {
    window.clearInterval(timer);
    gameInstance.didYouKnow.style.display = gameInstance.progress.style.display = "none";
  }
}

function updateText() {
  console.log('update' + counter);
  counter++;
  gameInstance.didYouKnow.dyktext.innerHTML = items[counter];
}