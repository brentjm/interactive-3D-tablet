export function setupAutomate(model) {
  document.getElementById("automate").addEventListener('click', automate);

  function automate() {
    let chip = document.getElementById("chip");
    let chipSP = 0;
    let itter = 0;
    chip.value = sp;
    model.changeChip(chipSP);
    let intervalID = setInterval(
      function () {
        if (itter == 10)  {
          window.clearInterval(intervalID);
        }
        chip.value = sp
        model.changeChip(chipSP/100.);
        chipSP += 10;
        itter += 1;
      }
      ,500
    );
  }
}
