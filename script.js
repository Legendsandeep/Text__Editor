const boldbtn = document.querySelector('#bold-btn')
const underlinebtn = document.querySelector('#underline-btn')
const italicbtn = document.querySelector('#italic-btn')
const colorbtn = document.querySelector('#color-btn')

const newbtn = document.querySelector('#new-btn')
const txtbtn = document.querySelector('#txt-btn')
const pdfbtn = document.querySelector('#pdf-btn')

const content = document.querySelector('#content')
const filename = document.querySelector('#filename-input')

boldbtn.addEventListener('click', () => {
    document.execCommand("bold")

})
underlinebtn.addEventListener('click', () => {
    document.execCommand("underline")
})
italicbtn.addEventListener('click', () => {
    document.execCommand("italic")
})
colorbtn.addEventListener("input", () => {
    document.execCommand("forecolor", false, colorbtn.value)
})

newbtn.addEventListener('click', () => {
   content.innerHTML = ""
})
txtbtn.addEventListener('click', () => {
    let a = document.createElement('a')
    let blob = new Blob([content.innerText])
    let dataurl = URL.createObjectURL(blob)
    a.href = dataurl
    a.download = filename.value + ".txt"
    a.click()
})

pdfbtn.addEventListener('click', () => {
    html2pdf().from(content).save(filename.value)
})