export function setupAutomate(model) {
  document.getElementById("automate").addEventListener('click', automate);
  let modelProps = {
    rotate: {
      element: document.getElementById("rotate"), 
      change: model.changeRotate,
      min: 0,
      max: 682,
      scale: 100,
    },
    tilt: {
      element: document.getElementById("tilt"),
      change: model.changeTilt,
      min: 90,
      max: 200,
      scale: 100,
    },
    chip: {
      element: document.getElementById("chip"), 
      change: model.changeChip,
      min: 0,
      max: 100,
      scale: 100,
    },
    roughness: {
      element: document.getElementById("roughness"), 
      change: model.changeRoughness,
      min: 0,
      max: 20,
      scale: 10000,
    },
    gloss: {
      element: document.getElementById("gloss"),
      change: model.changeGloss,
      min: 0,
      max: 55,
      scale: 100,
    },
  }

  function automate() {
      
    let itter = 0;
    let sp = 0;
    let intervalID = setInterval(
      function () {
        itter += 1;
        if (itter == 50)  {
          window.clearInterval(intervalID);
        }
        for (const p in modelProps) {
          sp = Math.random() * (modelProps[p]['max'] - modelProps[p]['min']) 
            + modelProps[p]['min'];
          console.log(p, sp);
          modelProps[p]['element'].value = sp;
          modelProps[p]['change'](sp / modelProps[p]['scale']);
        }
      }
      ,500
    );
  }
}
