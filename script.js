const filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  exposure: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  saturation: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 100,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 100,
    unit: "px",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};
function createFilterElement(name, unit = "%", value, min, max) {
    const div = document.createElement("div");
    div.classList.add("filter");

    const input = document.createElement("input");
    input.type = "range";
    input.name = name;
    input.value = value;
    input.min = min;
    input.max = max;
    input.id = name;

    const p = document.createElement("p");
    p.innerText = name
    div.appendChild(p)
    div.appendChild(input)

    return div;
}
 Object.keys(filters);//.forEach(filterName =>{

// })