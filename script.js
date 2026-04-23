//filters object to store filter values and properties
let filters = {
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
const resetButton = document.querySelector("#reset-btn")
const downloadButton = document.querySelector("#download-btn")
const presetContainer = document.querySelector(".presets")
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

function createFilters(){
  //filter object into array and loop through it to create filter elements
  Object.keys(filters).forEach(key => {
  const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
  filtersContainer.appendChild(filterElement)                      
})
}

createFilters()



imgInput.addEventListener("change", (event) => {
  const file = event.target.files[0] 
  const imagePlaceHolder = document.querySelector(".placeholder")

  imageCanvas.style.display = "block" //show the canvas when an image is selected 
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
  if (!image) return

  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height) //clear the canvas before applying filters
  canvasCtx.filter = `
  brightness(${filters.brightness.value}${filters.brightness.unit})
  contrast(${filters.contrast.value}${filters.contrast.unit})
  saturate(${filters.saturation.value}${filters.saturation.unit})
  hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
  blur(${filters.blur.value}${filters.blur.unit})
  grayscale(${filters.grayscale.value}${filters.grayscale.unit})
  sepia(${filters.sepia.value}${filters.sepia.unit})
  opacity(${filters.opacity.value}${filters.opacity.unit})
  invert(${filters.invert.value}${filters.invert.unit})
  `
  canvasCtx.drawImage(image, 0, 0)
}

if (resetButton) {
  resetButton.addEventListener("click", () => {
    //reset filter values to default
    filters = {
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
    applyFilters()
    //apply filters to reset the image
    filtersContainer.innerHTML = "" //clear the filters container
    createFilters() //recreate the filter elements with default values
  })
}

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a")
  link.download = "edited-image.png" //set the download file name
  link.href = imageCanvas.toDataURL() //set the link href to the canvas data URL
  link.click() //simulate a click on the link to trigger the download
})

const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  drama: {
    brightness: 90,
    contrast: 160,
    saturation: 130,
    hueRotation: 0,
    blur: 0,
    grayscale: 10,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  vintage: {
    brightness: 110,
    contrast: 85,
    saturation: 75,
    hueRotation: 15,
    blur: 1,
    grayscale: 20,
    sepia: 45,
    opacity: 95,
    invert: 0,
  },

  cinematic: {
    brightness: 95,
    contrast: 140,
    saturation: 120,
    hueRotation: 8,
    blur: 0,
    grayscale: 5,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  coolBlue: {
    brightness: 105,
    contrast: 120,
    saturation: 115,
    hueRotation: 190,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  warmSunset: {
    brightness: 115,
    contrast: 110,
    saturation: 140,
    hueRotation: 25,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0,
  },

  noir: {
    brightness: 95,
    contrast: 170,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 15,
    opacity: 100,
    invert: 0,
  }
};

Object.keys(presets).forEach(presetName => {
  const presetButton = document.createElement("button")
  presetButton.classList.add("btn")
  presetButton.innerText = presetName
  presetContainer.appendChild(presetButton)

  presetButton.addEventListener("click", () => {
    const preset = presets[presetName]
    console.log(preset)
    Object.keys(preset).forEach(filterName => {
      filters[filterName].value = preset[filterName]
    })
    applyFilters()
    filtersContainer.innerHTML = "" //clear the filters container
    createFilters() //recreate the filter elements with preset values

  })
})