let temps = [];

function insert(temp) {
  temps.push(temp);
}

function getMax(temps) {
  let maxTemp = 0;
  for (let i = 0; i < temps.length; i++) {
    maxTemp = Math.max.apply(Math, temps);
  }
  console.log(maxTemp);
}

insert(20);
insert(30);
insert(40);
insert(50);
insert(60);
insert(100);
getMax(temps);
