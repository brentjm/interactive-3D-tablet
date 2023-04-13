export function automate(scene) {
    // code to save image to file
    //  https://codepen.io/shivasaxena/pen/QEzrrv
    console.log(scene.children.length);
    var saveLink = document.createElement('div');
    saveLink.style.position = 'absolute';
    saveLink.style.top = '10px';
    saveLink.style.width = '100%';
    saveLink.style.color = 'white !important';
    saveLink.style.textAlign = 'center';
    saveLink.innerHTML =
        '<a href="#" id="saveLink">Save Frame</a>';
    document.body.appendChild(saveLink);
    document.getElementById("saveLink").addEventListener('click', saveAsImage);

    function saveAsImage() {
      var imgData, imgNode;
      var strDownloadMime = "image/octet-stream";

      try {
          var strMime = "image/jpeg";
          imgData = renderer.domElement.toDataURL(strMime);

          saveFile(imgData.replace(strMime, strDownloadMime), "test.jpg");

      } catch (e) {
          console.log(e);
          return;
      }

    }

    var saveFile = function (strData, filename) {
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
          document.body.appendChild(link); //Firefox requires the link to be in the body
          link.download = filename;
          link.href = strData;
          link.click();
          document.body.removeChild(link); //remove the link when done
      } else {
          location.replace(uri);
      }
    }

  function change() {
        for (let chip=0; chip<1; chip+=0.1) {
          for (let rough=mesh.material.bumpScale; rough<.01; rough+=0.001) {
            for (let tilt=1.2; tilt<1.7; tilt=+0.05) {
              for (let rot=0; rot<6.2; rot=+0.2) {
                mesh.morphTargetInfluences = chip;
                mesh.material.bumpScale = rough;
                mesh.rotation.x = tilt;
                mesh.rotation.y = rot;
              }
            }
          }
        }

  }

}
