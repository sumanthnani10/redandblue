const servicesView = (req, res) => {

    appliances = {
        "refrigerator": {
            "heading": "Refrigerator",
            "header_bg": "refrigerator",
            "subheading": "Chill with Confidence: Your Refrigerator, Our Expertise.",
            "issues": [
                "Frequent unit cycling",
                "Food freezing in the refrigerator",
                "Warming fresh food section",
                "Ice maker overflowing",
                "Frost in ice dispenser",
                "Non-functional ice maker",
                "Floor water leakage",
                "Excessive noise and constant operation",
                "Inadequate freezer cooling",
                "Inoperative water dispenser",
                "Ice and frost on food",
                "Ice sheet on freezer floor"
            ],
            "types": [
                "Top-Freezer",
                "French Door",
                "Side-by-Side",
                "Bottom-Freezer",
                "Counter-Depth",
                "Mini/Compact",
                "Built-In",
                "Freezerless",
                "Drawer",
                "Smart",
                "Wine",
                "Commercial",
                "RV/Boat"
            ]
        },
        "hood": {
            "heading": "Hood",
            "header_bg": "hood",
            "subheading": "Breathing Life Back Into Your Kitchen",
            "issues": [
                "Excessive noise",
                "Fan not working",
                "Grease buildup",
                "Filter replacement needed",
                "Ventilation problems",
                "Lights malfunctioning",
                "Control panel issues",
                "Airflow blockage",
                "Strange odors",
                "Inefficient suction",
                "Installation and wiring problems"
            ],
            "types": [
                "Wall-Mounted",
                "Under-Cabinet",
                "Island",
                "Downdraft",
                "Custom",
                "Range Hood",
                "Ducted",
                "Ductless"
            ]
        },
        "dishwasher": {
            "heading": "Dishwasher",
            "header_bg": "dishwasher",
            "subheading": "Reviving Sparkling Cleanliness: Your Dishwasher, Our Expertise!",
            "issues": [
                "Not cleaning dishes properly",
                "Detergent not dispensing",
                "Water not draining",
                "Leaks and puddles",
                "Strange noises",
                "Not turning on",
                "Error codes",
                "Door latch problems",
                "Spray arm issues",
                "Smelly dishwasher",
                "Inadequate drying",
                "Stained or cloudy glassware"
            ],
            "types": [
                "Built-In",
                "Portable",
                "Drawer",
                "Countertop",
                "Smart",
                "Compact",
                "Panel-Ready",
                "Top Control",
                "Front Control",
                "Tall Tub",
                "Standard Tub"
            ]
        },
        "stoves": {
            "heading": "Stoves",
            "header_bg": "stoves",
            "subheading": "Turning Up the Heat on Stove Repairs - We've Got Your Cookin' Covered!",
            "issues": [
                "Burner not lighting",
                "Inconsistent temperature",
                "Oven not heating",
                "Gas odor",
                "Control panel problems",
                "Burner or element malfunction",
                "Self-cleaning issues",
                "Cooktop cracked or damaged",
                "Door seal problems",
                "Sparking or clicking",
                "Indicator lights not working",
                "Knob or dial issues"
            ],
            "types": [
                "Gas Range",
                "Electric Range",
                "Dual Fuel Range",
                "Induction Range",
                "Slide-In Range",
                "Drop-In Range",
                "Freestanding Range",
                "Double Oven Range",
                "Single Oven Range",
                "Pro-Style Range",
                "Smart Range"
            ]
        },
        "microwave": {
            "heading": "Microwave",
            "header_bg": "microwave",
            "subheading": "Precision Repairs for Your Microwave: Reheat Confidence!",
            "issues": [
                "Not heating food",
                "Turntable not rotating",
                "Door not latching",
                "Noisy operation",
                "Error codes",
                "Touchpad or keypad issues",
                "Excessive sparks",
                "Interior light not working",
                "Unresponsive buttons",
                "Burning or smoke",
                "Unusual odors",
                "Control panel problems"
            ],
            "types": [
                "Countertop Microwave",
                "Over-the-Range Microwave",
                "Built-In Microwave",
                "Drawer Microwave",
                "Convection Microwave",
                "Commercial Microwave",
                "Smart Microwave",
                "Compact Microwave",
                "Grill Microwave"
            ]
        },
        "ice_machine": {
            "heading": "Ice Machine",
            "header_bg": "ice-machine",
            "subheading": "Bringing Cool Comfort Back: Expert Ice Machine Repair Services",
            "issues": [
                "No ice production",
                "Ice tastes bad",
                "Ice size issues",
                "Excessive noise",
                "Leaking water",
                "Slow ice production",
                "Ice bin not filling",
                "Low ice output",
                "Control panel problems",
                "Freezing or overheating",
                "Water inlet problems",
                "Error codes"
            ],
            "types": [
                "Undercounter Ice Maker",
                "Built-In Ice Maker",
                "Portable Ice Maker",
                "Commercial Ice Machine",
                "Nugget Ice Machine",
                "Clear Ice Machine",
                "Countertop Ice Maker",
                "Outdoor Ice Maker"
            ]
        },
        "washer_dryer": {
            "heading": "Washer & Dryer",
            "header_bg": "washer-dryer",
            "subheading": "Revive Your Laundry Routine: Washer & Dryer Repair Done Right!",
            "issues": [
                "Washer not draining",
                "Dryer not heating",
                "Unusual noises",
                "Leaking washer",
                "Washer not spinning",
                "Dryer not tumbling",
                "Error codes",
                "Agitator issues",
                "Excessive vibrations",
                "Lint buildup",
                "Washer not filling",
                "Dryer not turning on"
            ],
            "types": [
                "Top-Load Washer",
                "Front-Load Washer",
                "Stackable Washer & Dryer",
                "All-in-One Washer & Dryer",
                "Compact Washer & Dryer",
                "Laundry Center",
                "Gas Dryer",
                "Electric Dryer",
                "Ventless Dryer",
                "Smart Washer & Dryer"
            ]
        },
        "wall_oven": {
            "heading": "Wall Oven",
            "header_bg": "wall-oven",
            "subheading": "Your Wall Oven, Our Expertise.",
            "issues": [
                "Oven not heating",
                "Inconsistent temperature",
                "Control panel problems",
                "Self-cleaning issues",
                "Broil or bake element malfunction",
                "Door latch problems",
                "Timer or clock issues",
                "Cooking time discrepancies",
                "Unusual odors",
                "Noisy operation",
                "Interior light not working",
                "Error codes"
            ],
            "types": [
                "Single Wall Oven",
                "Double Wall Oven",
                "Combination Wall Oven",
                "Convection Wall Oven",
                "Smart Wall Oven",
                "Steam Wall Oven",
                "Speed Oven",
                "Built-In Wall Oven",
                "Electric Wall Oven",
                "Gas Wall Oven",
                "WiFi-Enabled Wall Oven"
            ]
        }
    }
    const list = Object.keys(appliances).map((key) => ([
        key,
        appliances[key].heading,
    ]));
      
      console.log(list);

    appliance = req.params.appliance;
    if(appliance === null || appliance === undefined || appliance === NaN) appliance = res.redirect("/services/refrigerator")
    else res.render("services", appliances[appliance]);
}

module.exports = {
    servicesView
}