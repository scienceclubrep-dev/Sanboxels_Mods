// Sandboxels Mod: Mystic Nature (Fixed UI Injection)
// Save this file as "mystic_nature.js"

elements.magic_pollen = {
    color: "#dfa3ff",
    behavior: behaviors.POWDER, 
    category: "powders", // The game automatically parses this into the toolbar
    state: "solid",
    density: 1200,
    reactions: {
        "water": { elem1: "mystic_vine", elem2: "water", chance: 0.25 },
        "dirty_water": { elem1: "mystic_vine", elem2: "water", chance: 0.40 }
    },
    desc: "A glowing magical powder that sprouts into Mystic Vines upon contact with water."
};

elements.mystic_vine = {
    color: ["#2ba84a", "#248f3f", "#3ebd62"], 
    behavior: [
        "CR:magic_pollen%1 | CR:mystic_vine%2 | CR:magic_pollen%1",
        "XX                   | CH:mystic_vine   | XX",
        "XX                   | XX               | XX"
    ], 
    category: "life", // Properly assigns element to the "life" category tab
    state: "solid",
    tempHigh: 150,
    vType: "fire",
    stateHigh: "fire", 
    burn: 40,
    burnTime: 30,
    desc: "A fast-growing magical plant layer that thrives on moisture."
};

elements.wither_acid = {
    color: "#1a1c1a",
    behavior: behaviors.LIQUID, 
    category: "liquids", // Properly assigns element to the "liquids" category tab
    state: "liquid",
    density: 1100,
    viscosity: 10,
    reactions: {
        "mystic_vine": { elem1: "wither_acid", elem2: "ash", chance: 0.6 },
        "plant": { elem1: "wither_acid", elem2: "ash", chance: 0.5 },
        "grass": { elem1: "wither_acid", elem2: "ash", chance: 0.5 },
        "wood": { elem1: "wither_acid", elem2: "charcoal", chance: 0.1 }
    },
    desc: "A dark, caustic fluid that instantly decomposes plants, vines, and organic material into ash."
};

// Explicitly force registration into Sandboxels' structural menu system safely
runAfterLoad(function() {
    if (window.elementGrid) {
        if (!elementGrid["powders"].includes("magic_pollen")) elementGrid["powders"].push("magic_pollen");
        if (!elementGrid["life"].includes("mystic_vine")) elementGrid["life"].push("mystic_vine");
        if (!elementGrid["liquids"].includes("wither_acid")) elementGrid["liquids"].push("wither_acid");
    }
});
