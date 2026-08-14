const gearData = {
    "legs": [
        { id: "l1", name: "Grips of the Dead", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/boots.png", stats: { combat: { rng_atk: 35, cav_atk: 35, army_hp: 15 }, economy: {} } },
        { id: "l2", name: "Frostwing Greaves", level: 55, rarity: "Legendary", image: "https://img.icons8.com/color/96/winter-boots.png", stats: { combat: { inf_atk: 30, rng_def: 25 }, economy: { gathering_speed: 20 } } },
        { id: "l3", name: "Tasset of the Deep", level: 50, rarity: "Epic", image: "https://img.icons8.com/color/96/knight-boots.png", stats: { combat: { cav_atk: 25, army_def: 20 }, economy: {} } },
        { id: "l4", name: "Mega Larva Boots", level: 45, rarity: "Legendary", image: "https://img.icons8.com/color/96/running-shoe.png", stats: { combat: { inf_atk: 28, army_hp: 12 }, economy: { travel_speed: 30 } } }
    ],
    "armor": [
        { id: "a1", name: "Burning Scroll Plate", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/chest-armor.png", stats: { combat: { rng_atk: 35, inf_atk: 35, army_hp: 20 }, economy: {} } },
        { id: "a2", name: "Tesla Coils Armor", level: 60, rarity: "Legendary", image: "https://img.icons8.com/color/96/superhero-armor.png", stats: { combat: { cav_atk: 40, army_def: 30 }, economy: { gold_prod: 50 } } },
        { id: "a3", name: "Cavalry Chainmail", level: 50, rarity: "Epic", image: "https://img.icons8.com/color/96/leather-armor.png", stats: { combat: { cav_atk: 28, rng_def: 25 }, economy: {} } },
        { id: "a4", name: "Brutal Plate", level: 55, rarity: "Legendary", image: "https://img.icons8.com/color/96/breastplate.png", stats: { combat: { inf_atk: 32, army_hp: 18 }, economy: {} } }
    ],
    "helmet": [
        { id: "h1", name: "Corinthian Helmet", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/helmet.png", stats: { combat: { inf_atk: 30, cav_atk: 30, army_hp: 15 }, economy: { training_speed: 10 } } },
        { id: "h2", name: "Terror Shield Mask", level: 60, rarity: "Legendary", image: "https://img.icons8.com/color/96/knight-helmet.png", stats: { combat: { rng_atk: 35, army_def: 20, wall_def: 50 }, economy: {} } },
        { id: "h3", name: "Bumblebee Helm", level: 55, rarity: "Epic", image: "https://img.icons8.com/color/96/viking-helmet.png", stats: { combat: { inf_atk: 25, cav_atk: 25 }, economy: { energy_cap: 30, monster_hunt_atk: 20 } } },
        { id: "h4", name: "Noceros Mask", level: 50, rarity: "Legendary", image: "https://img.icons8.com/color/96/spartan-helmet.png", stats: { combat: { cav_atk: 30, army_hp: 15 }, economy: { travel_speed: 25 } } }
    ],
    "main_hand": [
        { id: "m1", name: "Fire Wall Greatsword", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/sword.png", stats: { combat: { inf_atk: 45, rng_atk: 30, army_hp: 20 }, economy: {} } },
        { id: "m2", name: "Atrocious Mace", level: 60, rarity: "Legendary", image: "https://img.icons8.com/color/96/mace.png", stats: { combat: { cav_atk: 45, inf_def: 30 }, economy: {} } },
        { id: "m3", name: "Saberfang Scimitar", level: 50, rarity: "Epic", image: "https://img.icons8.com/color/96/dagger.png", stats: { combat: { rng_atk: 30, cav_atk: 25 }, economy: { gathering_speed: 15 } } },
        { id: "m4", name: "Lunar Scourge", level: 55, rarity: "Legendary", image: "https://img.icons8.com/color/96/spear.png", stats: { combat: { inf_atk: 38, rng_atk: 38 }, economy: {} } }
    ],
    "off_hand": [
        { id: "o1", name: "Rumbling Shield", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/shield.png", stats: { combat: { army_def: 40, army_hp: 25, inf_atk: 20 }, economy: {} } },
        { id: "o2", name: "Terror Shield", level: 60, rarity: "Legendary", image: "https://img.icons8.com/color/96/round-shield.png", stats: { combat: { cav_atk: 35, army_def: 30 }, economy: {} } },
        { id: "o3", name: "Book of the Dead", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/book.png", stats: { combat: { rng_atk: 40, inf_atk: 40 }, economy: { research_speed: 25 } } },
        { id: "o4", name: "Frostwing Shield", level: 55, rarity: "Epic", image: "https://img.icons8.com/color/96/viking-shield.png", stats: { combat: { inf_def: 30, cav_def: 30 }, economy: {} } }
    ],
    "accessory": [
        { id: "ac1", name: "Blight Ring", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/ring.png", stats: { combat: { rng_atk: 35, cav_atk: 35, army_hp: 15 }, economy: {} } },
        { id: "ac2", name: "Champ Brooch", level: 60, rarity: "Legendary", image: "https://img.icons8.com/color/96/diamond-ring.png", stats: { combat: { inf_atk: 40, rng_atk: 40, army_atk: 10 }, economy: {} } },
        { id: "ac3", name: "Will of the Five", level: 60, rarity: "Mythic", image: "https://img.icons8.com/color/96/crown.png", stats: { combat: { army_atk: 30, army_def: 30, army_hp: 30 }, economy: { construction_speed: 20, research_speed: 20 } } },
        { id: "ac4", name: "Earring of Recovery", level: 50, rarity: "Epic", image: "https://img.icons8.com/color/96/earrings.png", stats: { combat: { inf_atk: 25 }, economy: { training_speed: 15 } } },
        { id: "ac5", name: "Lunar Orb", level: 55, rarity: "Legendary", image: "https://img.icons8.com/color/96/crystal-ball.png", stats: { combat: { rng_atk: 30, cav_atk: 30 }, economy: { max_energy: 25 } } }
    ]
};
