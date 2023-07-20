const colorCode = document.querySelector(".color_number");
const btnGenerate = document.querySelector(".btn_generate");
const btnCopy = document.querySelector(".btn_copy");


function generateColor() {

    let digits = "0123456789ABCDEF";
    let newColor = "#";
    
    for (let i = 0; i < 6; i++) {
        
        let random = Math.floor(Math.random() * 16);
        newColor += digits[random];
    }

    return newColor;
}

btnGenerate.addEventListener("click", () => {
    
    colorCode.textContent = generateColor();
    document.body.style.backgroundColor = colorCode.textContent
})


btnCopy.addEventListener("click", () => {
    
    console.log(navigator.clipboard.writeText(colorCode.textContent));
    Swal.fire({
        title: "Copy!",
        toast: true,
        position: 'top',
        backdrop: true,
    })
})

