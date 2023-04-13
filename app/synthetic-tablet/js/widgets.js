export function makeWidgets(model) {
  console.log(model);
  let rotate = document.getElementById("rotate");
  rotate.oninput = function() {
    model.changeRotate(this.value/100);
  }

  let tilt = document.getElementById("tilt");
  tilt.oninput = function() {
    model.changeTilt(this.value/100);
  }
  let color = document.getElementById("color");
  color.oninput = function() {
    model.changeColor(this.value/100, 1 - this.value/100);
  }

  let ellipse = document.getElementById("ellipse");
  ellipse.oninput = function() {
    model.changeEllipse(this.value/100);
  }

  let thickness = document.getElementById("thickness");
  thickness.oninput = function() {
    model.changeThickness(this.value/100);
  }

  let roughness = document.getElementById("roughness");
  roughness.oninput = function() {
    model.changeRoughness(this.value/10000);
  }

  let gloss = document.getElementById("gloss");
  gloss.oninput = function() {
    model.changeGloss(this.value/100);
  }

  let chip = document.getElementById("chip");
  chip.oninput = function() {
    model.changeChip(this.value/100);
  }

}
