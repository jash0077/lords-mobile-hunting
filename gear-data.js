const gearData = {
    "legs": [
        { id: "l1", name: "Grips of the Dead", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/e/e4/Grips_of_the_Dead.png", stats: { combat: { rng_atk: 35, cav_atk: 35, army_hp: 15 }, economy: {} } },
        { id: "l2", name: "Frostwing Greaves", level: 55, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/22/Frostwing_Greaves.png", stats: { combat: { inf_atk: 30, rng_def: 25 }, economy: { gathering_speed: 20 } } },
        { id: "l3", name: "Tasset of the Deep", level: 50, rarity: "Epic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/91/Tasset_of_the_Deep.png", stats: { combat: { cav_atk: 25, army_def: 20 }, economy: {} } },
        { id: "l4", name: "Mega Larva Boots", level: 45, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/8f/Mega_Larva_Boots.png", stats: { combat: { inf_atk: 28, army_hp: 12 }, economy: { travel_speed: 30 } } }
    ],
    "armor": [
        { id: "a1", name: "Burning Scroll Plate", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/7/77/Burning_Scroll.png", stats: { combat: { rng_atk: 35, inf_atk: 35, army_hp: 20 }, economy: {} } },
        { id: "a2", name: "Tesla Coils Armor", level: 60, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/36/Tesla_Coils.png", stats: { combat: { cav_atk: 40, army_def: 30 }, economy: { gold_prod: 50 } } },
        { id: "a3", name: "Cavalry Chainmail", level: 50, rarity: "Epic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a2/Cavalry_Chainmail.png", stats: { combat: { cav_atk: 28, rng_def: 25 }, economy: {} } },
        { id: "a4", name: "Brutal Plate", level: 55, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/50/Brutal_Plate.png", stats: { combat: { inf_atk: 32, army_hp: 18 }, economy: {} } }
    ],
    "helmet": [
        { id: "h1", name: "Corinthian Helmet", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/4/4b/Corinthian_Helmet.png", stats: { combat: { inf_atk: 30, cav_atk: 30, army_hp: 15 }, economy: { training_speed: 10 } } },
        { id: "h2", name: "Terror Shield Mask", level: 60, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/e/e1/Terror_Shield_Mask.png", stats: { combat: { rng_atk: 35, army_def: 20, wall_def: 50 }, economy: {} } },
        { id: "h3", name: "Bumblebee Helm", level: 55, rarity: "Epic", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/62/Bumblebee_Helm.png", stats: { combat: { inf_atk: 25, cav_atk: 25 }, economy: { energy_cap: 30, monster_hunt_atk: 20 } } },
        { id: "h4", name: "Noceros Mask", level: 50, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/b/b8/Noceros_Mask.png", stats: { combat: { cav_atk: 30, army_hp: 15 }, economy: { travel_speed: 25 } } }
    ],
    "main_hand": [
        { id: "m1", name: "Fire Wall Greatsword", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/d/d4/Fire_Wall_Greatsword.png", stats: { combat: { inf_atk: 45, rng_atk: 30, army_hp: 20 }, economy: {} } },
        { id: "m2", name: "Atrocious Mace", level: 60, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/33/Atrocious_Mace.png", stats: { combat: { cav_atk: 45, inf_def: 30 }, economy: {} } },
        { id: "m3", name: "Saberfang Scimitar", level: 50, rarity: "Epic", image: "https://static.wikia.nocookie.net/lordsmobile/images/1/1f/Saberfang_Scimitar.png", stats: { combat: { rng_atk: 30, cav_atk: 25 }, economy: { gathering_speed: 15 } } },
        { id: "m4", name: "Lunar Scourge", level: 55, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/6c/Lunar_Scourge.png", stats: { combat: { inf_atk: 38, rng_atk: 38 }, economy: {} } }
    ],
    "off_hand": [
        { id: "o1", name: "Rumbling Shield", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/e/ef/Rumbling_Shield.png", stats: { combat: { army_def: 40, army_hp: 25, inf_atk: 20 }, economy: {} } },
        { id: "o2", name: "Terror Shield", level: 60, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/37/Terror_Shield.png", stats: { combat: { cav_atk: 35, army_def: 30 }, economy: {} } },
        { id: "o3", name: "Book of the Dead", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/8c/Book_of_the_Dead.png", stats: { combat: { rng_atk: 40, inf_atk: 40 }, economy: { research_speed: 25 } } },
        { id: "o4", name: "Frostwing Shield", level: 55, rarity: "Epic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/85/Frostwing_Shield.png", stats: { combat: { inf_def: 30, cav_def: 30 }, economy: {} } }
    ],
    "accessory": [
        { id: "ac1", name: "Blight Ring", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/7/79/Blight_Ring.png", stats: { combat: { rng_atk: 35, cav_atk: 35, army_hp: 15 }, economy: {} } },
        { id: "ac2", name: "Champ Brooch", level: 60, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/90/Champions_Brooch.png", stats: { combat: { inf_atk: 40, rng_atk: 40, army_atk: 10 }, economy: {} } },
        { id: "ac3", name: "Will of the Five", level: 60, rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/2f/Will_of_the_Five.png", stats: { combat: { army_atk: 30, army_def: 30, army_hp: 30 }, economy: { construction_speed: 20, research_speed: 20 } } },
        { id: "ac4", name: "Earring of Recovery", level: 50, rarity: "Epic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/ad/Earring_of_Recovery.png", stats: { combat: { inf_atk: 25 }, economy: { training_speed: 15 } } },
        { id: "ac5", name: "Lunar Orb", level: 55, rarity: "Legendary", image: "https://static.wikia.nocookie.net/lordsmobile/images/c/c5/Lunar_Orb.png", stats: { combat: { rng_atk: 30, cav_atk: 30 }, economy: { max_energy: 25 } } }
    ]
};
