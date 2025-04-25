let clr1 = document.getElementById("clr1");
var clr2 = document.getElementById("clr2");
let img = document.getElementById("img")
var row = document.getElementById("row");

let col1 = document.createElement("div")
col1.classList.add("col-12")
col1.classList.add("cols")

let col2 = document.createElement("div")
col2.classList.add("col-12")
col2.classList.add("cols")
let retry;
let upImg;
let choose;

img.name = 'img'
img.addEventListener("change", function (event) {
    upImg = event.target.files[0];

    choose = document.createElement("button")
    choose.type = "submit"
    choose.id = "choose"
    choose.textContent = "Choose"
    choose.name = "choose"

    retry = document.createElement("button")
    retry.id = "retry"
    retry.textContent = "start over"
    retry.type = "reset"

    row.children[0].remove()
    row.children[0].remove()

    if (upImg) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let disImg = document.createElement("img")
            disImg.id = 'preview'
            let foodpic = e.target.result
            disImg.src = e.target.result;
            disImg.style.display = "block"; // Show image
            row.appendChild(col1)
            row.appendChild(col2)
            col1.appendChild(disImg)
            col2.appendChild(choose)
            col2.appendChild(retry)
            choose.addEventListener("click", async function (e) {

                const { jsPDF } = window.jspdf; // from CDN


    if (!upImg) return alert("Select an image first.");

    const reader = new FileReader();
    reader.onload = function (e) {
      const imgData = e.target.result;
      const pdf = new jsPDF();

      const image = new Image();
      image.onload = function () {
        const width = pdf.internal.pageSize.getWidth();
        const height = (image.height * width) / image.width;

        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save(`${upImg.name}.pdf`);
      };
      image.src = imgData;
    };
    reader.readAsDataURL(upImg);
            });

        };
        reader.readAsDataURL(upImg);
    } else {
        console.log("No file selected.");
    }

    retry.addEventListener("click",function(){
        location.reload()
    })
});
