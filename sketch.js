var start = "X";
var sent = start;
var rules = [];
var len = 100;
var angle = 30;
rules[0] = 
{
  a: "X",
  //b: "F+[[X]-X]-F[-FX]+X"
  b: "F+[-F-XF-X][+FF][--XF[+X]][++F-X]"
}

rules[1] = 
{
  a: "F",
  b: "FF"
}




function generate()
{
  len*= 0.5;
  var nextSent = "";
  for(var i = 0; i < sent.length; i++)
  {
    var found = false;
    var current = sent.charAt(i);
    for(var j = 0; j < rules.length; j++)
    {
      if(current == rules[j].a)
      {
        nextSent += rules[j].b;
        found = true;
        break;
      }
    }
    if(found == false)
    {
      nextSent += current;
    }
  }
  sent = nextSent;
  createP(sent);
  drawL();
}

function drawL()
{
  background(0);
  resetMatrix();
  translate(width / 2, height);
  stroke(10, 100, 100);
  for(var i = 0; i < sent.length; i++)
  {
    var current = sent.charAt(i);
    if(current == "F")
    {
      line(0, 0, 0, -len);
      translate(0, -len);
    }
    else
    if(current == "+")
    {
      rotate(angle);
    }
    else
    if(current == "-")
    {
      rotate(-angle);
    }
    else
    if(current == "[")
    {
      push();
    }
    else
    if(current == "]")
    {
      pop();
    }
  }
}


function setup() 
{
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  createP(start);
  drawL();
  var button = createButton("generate");
  button.mousePressed(generate);
}

