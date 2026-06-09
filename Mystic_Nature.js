// Sandboxels Mod: Mystic Nature
// Save this file exactly as "mystic_nature.js"

// 1. Define custom elements within the 'elements' object
elements.magic_pollen = {
    color: "#dfa3ff",
    behavior: behaviors.POWDER, // Automatically falls like sand
    category: "powders",
    state: "solid",
    density: 1200,
    reactions: {
        "water": { elem1: "mystic_vine", elem2: "water", chance: 0.25 }, // Transforms into vines when touching water
        "dirty_water": { elem1: "mystic_vine", elem2: "water", chance: 0.40 }
    },
    desc: "A glowing magical powder that sprouts into Mystic Vines upon contact with water."
};

elements.mystic_vine = {
    color: ["#2ba84a", "#248f3f", "#3ebd62"], // Randomly picks from these colors for variation
    behavior: [
        "CR:magic_pollen%1 | CR:mystic_vine%2 | CR:magic_pollen%1",
        "XX                   | CH:mystic_vine   | XX",
        "XX                   | XX               | XX"
    ], // Sandboxels grid behavior matrix: Spreads upward and outward occasionally
    category: "life",
    state: "solid",
    tempHigh: 150,
    vType: "fire",
    stateHigh: "fire", // Burns when hot
    burn: 40,
    burnTime: 30,
    desc: "A fast-growing magical plant layer that thrives on moisture."
};

elements.wither_acid = {
    color: "#1a1c1a",
    behavior: behaviors.LIQUID, // Flows downwards and sideways like normal liquids
    category: "liquids",
    state: "liquid",
    density: 1100,
    viscosity: 10,
    reactions: {
        "mystic_vine": { elem1: "wither_acid", elem2: "ash", chance: 0.6 }, // Corrodes mystic vines instantly into ash
        "plant": { elem1: "wither_acid", elem2: "ash", chance: 0.5 },
        "grass": { elem1: "wither_acid", elem2: "ash", chance: 0.5 },
        "wood": { elem1: "wither_acid", elem2: "charcoal", chance: 0.1 }
    },
    desc: "A dark, caustic fluid that instantly decomposes plants, vines, and organic material into ash."
};

// 2. Safely add elements to their chosen categories so they display in the UI toolbar
// (Matches Sandboxels convention for initializing menu categorization dynamically)
if (!elements.magic_pollen.hidden) {
    elementGrid["powders"].push("magic_pollen");
}
if (!elements.mystic_vine.hidden) {
    elementGrid["life"].push("mystic_vine");
}
if (!elements.wither_acid.hidden) {
    elementGrid["liquids"].push("wither_acid");
}