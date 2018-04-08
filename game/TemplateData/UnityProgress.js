counter = 0;
var timer;

var items = [
  "Mali is a giant, landlocked country in West Africa. It has a rich history and a vibrant culture.",
  "But by nearly every measure, Mali is one of the poorest countries in the world. And Mali is ranked as the third worst country in the world to be a child.",
  "Although 69 percent of children are enrolled in primary school in Mali, only 34 percent are enrolled in secondary school. ",
  "Education is the key to improving life in Mali. For example, with each additional year of secondary schooling a student’s future income increases by 10-20 percent. ",
  "Through Rise: Changing Your Life Through Education, explore some of the challenges that face Mali’s children as they fight for their education…"
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
    timer = window.setInterval(updateText, 12000);
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
  if(counter >= items.length) {
    counter = 0;
  }
  gameInstance.didYouKnow.dyktext.innerHTML = items[counter];
}
