let temps = [];

function insert(temp) {
  temps.push(temp);
}

function getMax(temps) {
  let maxTemp = 0;
  for (let i = 0; i < temps.length; i++) {
    maxTemp = Math.max.apply(Math, temps);
  }
  return maxTemp;
}

function getMin(temps) {
  let minTemp = 0;
  for (let i = 0; i < temps.length; i++) {
    minTemp = Math.min.apply(Math, temps);
  }
  return minTemp;
}

function getMean(temps) {
  let meanTemp = 0;
  let sum = 0;

  for (let i = 0; i < temps.length; i++) {
    sum += temps[i];
  }

  meanTemp = sum / temps.length;

  return meanTemp.toPrecision(4);
}

insert(20);
insert(30);
insert(40);
insert(50);
insert(60);
insert(100);
insert(101);
insert(87);
insert(55);

let maxTemp = getMax(temps);
let minTemp = getMin(temps);
let meanTemp = getMean(temps);
console.log(maxTemp + ' highest temp');
console.log(minTemp + ' lowest temp');
console.log(meanTemp + ' average temp');
