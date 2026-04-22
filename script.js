//filters object to store filter values and properties
const filters = {
  brightness: {
    value: 100,
    unit: "%",
    min: 0,
    max: 200,
  },
  contrast: {
    value: 100,
    unit: "%",
    min: 0,
    max: 200,
  },
  exposure: {
    value: 100,
    unit: "%",
    min: 0,
    max: 200,
  },
  saturation: {
    value: 100,
    unit: "%",
    min: 0,
    max: 200,
  },
  hueRotation:{
    value: 0,
    unit: "deg",
    min: 0,
    max: 360,
  },
  blur: {
    value: 0,
    unit: "px",
    min: 0,
    max: 20,
  },
  grayscale: {
    value: 0,
    unit: "%",
    min: 0,
    max: 100,
  },
  sepia: {
    value: 0,
    unit: "%",
    min: 0,
    max: 100,
  },
  opacity: {
    value: 100,
    unit: "%",
    min: 0,
    max: 100,
  },
  invert:{
    value: 0,
    unit: "%",
    min: 0,
    max: 100,
  },
}
const imageCanvas = document.querySelector("#image-canvas")

const imgInput = document.querySelector("#image-input")

const canvasCtx = imageCanvas.getContext("2d")
let file = null
let image = null

const filtersContainer = document.querySelector(".filters")

//fuction to create filter element
function createFilterElement(name, unit="%", value, min, max) {

  const div = document.createElement("div")
  div.classList.add("filter")

  const input = document.createElement("input")
  input.type = "range"
  input.name = name
  input.value = value
  input.min = min
  input.max = max

  const p = document.createElement("p")
  p.innerText = name
  
  div.appendChild(p)
  div.appendChild(input)

  input.addEventListener("input", (event) => {
    filters[name].value = input.value
    applyFilters()

    
  })

  return div
}
//filter object into array and loop through it to create filter elements
Object.keys(filters).forEach(key => {
  const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
  filtersContainer.appendChild(filterElement)                      
})

imgInput.addEventListener("change", (event) => {
  const file = event.target.files[0] 
  const imagePlaceHolder = document.querySelector(".placeholder")
  imagePlaceHolder.style.display = "none" //hide the placeholder when an image is selected

  const img = new Image() //create new image element
  img.src  = URL.createObjectURL(file) //set image source to the selected file  
  img.onload = () => {
    image = img
    imageCanvas.width = img.width //set canvas width to image width
    imageCanvas.height = img.height //set canvas height to image height
    canvasCtx.drawImage(img, 0, 0, ) //draw the image on the canvas
  }
})

function applyFilters() {
  canvasCtx.filter = `brightness(${filters.brightness.value}${filters.brightness.unit})`
  canvasCtx.drawImage(image, 0, 0)
}