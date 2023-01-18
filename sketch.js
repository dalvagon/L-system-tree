let ruleset = [];
let text = "X";
let len = 70;

function setup() {
  createCanvas(1000, 600);
  background(0);
  angleMode(DEGREES);

  ruleset.push(
    {
      character: "X",
      transform: "F+[[X]-X]-F[-FX]+X",
    },
    {
      character: "F",
      transform: "FF",
    }
  );
}

function draw() {}

function mouseClicked() {
  applyRules();
  tree(text);
}

function applyRules() {
  let newText = "";
  len *= 0.6;

  for (let c of text) {
    let rule = ruleset.find((rule) => rule.character === c);
    if (rule) {
      newText += rule.transform;
    } else {
      newText += c;
    }
  }

  text = newText;
}

function tree(text) {
  let x = width / 2;
  let y = height;
  let angle = 30;
  translate(x, y);
  console.log(text);
  for (let c of text) {
    switch (c) {
      case "F":
        stroke(20, 100, 20, map(len, 0, 70, 50, 255));
        strokeWeight(map(len, 0, 70, 1, 5));
        y = -len + random(-len / 2, len / 2);
        line(0, 0, 0, y);
        translate(0, y);
        break;
      case "+":
        rotate(angle + random(-50, 50));
        break;
      case "-":
        rotate(-angle + random(-50, 50));
        break;
      case "[":
        push();
        break;
      case "]":
        pop();
        break;
    }
  }
}
