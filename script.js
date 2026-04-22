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

  return div
}
//filter object into array and loop through it to create filter elements
Object.keys(filters).forEach(key => {
  const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
  filtersContainer.appendChild(filterElement)                      
})