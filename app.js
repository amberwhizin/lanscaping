////////// please don't forget to fill out the form!////////
////...whats that mean?//////check when you finish, or ask teach...////////
////////////////////////////////////////////////////////////////////////////

const TEETH = "Teeth";
const RUSTY_SCISSORS = "Rusty Scissors";
const OLD_TIMEY_MOWER = "Old Timey Mower";
const BATTERY_PWRD_MOWER = "Batter Powered Mower";
const STARVING_STUDENTS = "Starving Students";

// starting tools
const landscapingTools = [TEETH];

let money = 0;

const moneyResults = document.querySelector("#money-results");
const showMoneyRes = (currentMoney) => {
  moneyResults.innerText = currentMoney;
};

const buyRustyScissorsNode = document.querySelector("#buy-rusty-scissors");
buyRustyScissorsNode.addEventListener("click", () => {
  // cant use "hidden" because its added again with $5 or more
  // when this button is clicked, the class will be changed to permantly-hidden
  // which doesnt do anything
  buyRustyScissorsNode.classList.add("permantly-hidden");
  buyTools(RUSTY_SCISSORS);
});
const buyOldTimeyNode = document.querySelector("#buy-old-mower");
buyOldTimeyNode.addEventListener("click", () => {
  buyOldTimeyNode.classList.add("permantly-hidden");
  buyTools(OLD_TIMEY_MOWER);
});
const buyBatteryPwrdMower = document.querySelector("#buy-battery-mower");
buyBatteryPwrdMower.addEventListener("click", () => {
  buyBatteryPwrdMower.classList.add("permantly-hidden");
  buyTools(BATTERY_PWRD_MOWER);
});
const buyStarvingStudents = document.querySelector("#buy-starving-students");
buyStarvingStudents.addEventListener("click", () => {
  buyStarvingStudents.classList.add("permantly-hidden");
  buyTools(STARVING_STUDENTS);
});

const changeFunds = (num) => {
  money += num;
  // show scissors when money >= 5
  if (money >= 5) {
    // remove class from rust-scissors
    buyRustyScissorsNode.classList.remove("hidden");
  }
  if (money >= 25) {
    buyOldTimeyNode.classList.remove("hidden");
  }
  if (money >= 250) {
    buyBatteryPwrdMower.classList.remove("hidden");
  }
  if (money >= 500) {
    buyStarvingStudents.classList.remove("hidden");
  }
  if (landscapingTools.includes(STARVING_STUDENTS) && money >= 1000) {
    alert("You won the Game! You are a certified Landscaper, Congratulations!");
  }
  showMoneyRes(money);
  return money;
};

const rustyScissorsNode = document.querySelector("#rusty-scissors");
const oldMowerNode = document.querySelector("#old-mower");
const batteryMowerNode = document.querySelector("#battery-mower");
const starvingStudentsNode = document.querySelector("#starving-students");

const buyTools = (userTool) => {
  if (userTool === RUSTY_SCISSORS) {
    //got a problem here, === doesnt let me buy another tho
    landscapingTools.push(RUSTY_SCISSORS);
    // re-assigning funds
    money = changeFunds(-5);
    // showing rusty scissors by removing class "hidden"(now unhidden)
    rustyScissorsNode.classList.remove("hidden");
  } else if (userTool === OLD_TIMEY_MOWER) {
    landscapingTools.push(OLD_TIMEY_MOWER);
    money = changeFunds(-25);
    oldMowerNode.classList.remove("hidden");
  } else if (userTool === BATTERY_PWRD_MOWER) {
    landscapingTools.push(BATTERY_PWRD_MOWER);
    money = changeFunds(-250);
    batteryMowerNode.classList.remove("hidden");
  } else if (userTool === STARVING_STUDENTS) {
    landscapingTools.push(STARVING_STUDENTS);
    money = changeFunds(-500);
    starvingStudentsNode.classList.remove("hidden");
  }
};

const cuttingGrass = (userTool) => {
  if (userTool === TEETH) {
    // if user clicks teeth
    money = changeFunds(1);
    return `You chose ${userTool}`;
    // cut grass with teeth with button in html
  } else if (userTool === RUSTY_SCISSORS) {
    money = changeFunds(5);
    return `You chose ${userTool}`;
  } else if (userTool === OLD_TIMEY_MOWER) {
    money = changeFunds(50);
    return `You chose ${userTool}`;
  } else if (userTool === BATTERY_PWRD_MOWER) {
    money = changeFunds(100);
    return `You chose ${userTool}`;
  } else if (userTool === STARVING_STUDENTS) {
    money = changeFunds(250);
    return `You chose ${userTool}`;
  }
};

const resultsNode = document.querySelector("#results");

const showResults = (userTool) => {
  resultsNode.innerText = cuttingGrass(userTool);
};

const teethNode = document.querySelector("#teeth");
teethNode.addEventListener("click", () => {
  showResults(TEETH);
});

rustyScissorsNode.addEventListener("click", () => {
  showResults(RUSTY_SCISSORS);
});

oldMowerNode.addEventListener("click", () => {
  showResults(OLD_TIMEY_MOWER);
});

batteryMowerNode.addEventListener("click", () => {
  showResults(BATTERY_PWRD_MOWER);
});

starvingStudentsNode.addEventListener("click", () => {
  showResults(STARVING_STUDENTS);
});

// So, I realized way too far into this that I was definitly supposed to use alert and prompt. When I first read it, I read it as a suggestion, looking at it again I see thats not the case. I'm going to turn this in, I know it's not quit the assignment, and I'm sorry about that. I just went in too deep to turn around and start over. Wish I had read the directions better, feels like I made this a lot harder than it had to be. Anyways, sorry, and I'll pay closer attention next time!
