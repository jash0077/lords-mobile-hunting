const helmetSvg = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#1e1b4b"/><path d="M50 20 C30 20 25 45 25 60 C25 75 35 85 50 85 C65 85 75 75 75 60 C75 45 70 20 50 20 Z" fill="#3b82f6" stroke="#a855f7" stroke-width="4"/><path d="M40 50 L60 50 L60 70 L40 70 Z" fill="#0f172a"/><text x="50" y="93" font-size="10" fill="#f1f5f9" text-anchor="middle" font-weight="bold">HELMET</text></svg>');
const armorSvg = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#1e1b4b"/><path d="M30 25 L50 15 L70 25 L75 75 C75 80 70 85 65 85 L35 85 C30 85 25 80 25 75 Z" fill="#ec4899" stroke="#3b82f6" stroke-width="4"/><path d="M50 25 L50 75" stroke="#ffffff" stroke-width="3"/><text x="50" y="93" font-size="10" fill="#f1f5f9" text-anchor="middle" font-weight="bold">ARMOR</text></svg>');
const legsSvg = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#1e1b4b"/><path d="M30 20 L70 20 L65 80 L55 80 L50 45 L45 80 L35 80 Z" fill="#22c55e" stroke="#06b6d4" stroke-width="4"/><text x="50" y="93" font-size="10" fill="#f1f5f9" text-anchor="middle" font-weight="bold">LEGS</text></svg>');
const mainHandSvg = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#1e1b4b"/><path d="M20 80 L75 25 L80 30 L25 85 Z" fill="#f5a623" stroke="#ef4444" stroke-width="4"/><rect x="15" y="75" width="15" height="15" rx="3" fill="#a855f7"/><text x="50" y="93" font-size="9" fill="#f1f5f9" text-anchor="middle" font-weight="bold">WEAPON</text></svg>');
const offHandSvg = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#1e1b4b"/><path d="M50 15 C30 20 25 40 25 60 C25 75 40 85 50 88 C60 85 75 75 75 60 C75 40 70 20 50 15 Z" fill="#06b6d4" stroke="#3b82f6" stroke-width="4"/><circle cx="50" cy="50" r="15" fill="#1e1b4b" stroke="#ffffff" stroke-width="2"/><text x="50" y="93" font-size="9" fill="#f1f5f9" text-anchor="middle" font-weight="bold">SHIELD</text></svg>');
const accessorySvg = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#1e1b4b"/><circle cx="50" cy="50" r="25" fill="none" stroke="#f5a623" stroke-width="8"/><circle cx="50" cy="50" r="10" fill="#ec4899"/><text x="50" y="93" font-size="9" fill="#f1f5f9" text-anchor="middle" font-weight="bold">RING</text></svg>');

const gearData = {
    "legs": [
        { id: "l1", name: "Grips of the Dead", level: 60, rarity: "Mythic", image: legsSvg, stats: { combat: { rng_atk: 35, cav_atk: 35, army_hp: 15 }, economy: {} } },
        { id: "l2", name: "Frostwing Greaves", level: 55, rarity: "Legendary", image: legsSvg, stats: { combat: { inf_atk: 30, rng_def: 25 }, economy: { gathering_speed: 20 } } },
        { id: "l3", name: "Tasset of the Deep", level: 50, rarity: "Epic", image: legsSvg, stats: { combat: { cav_atk: 25, army_def: 20 }, economy: {} } },
        { id: "l4", name: "Mega Larva Boots", level: 45, rarity: "Legendary", image: legsSvg, stats: { combat: { inf_atk: 28, army_hp: 12 }, economy: { travel_speed: 30 } } }
    ],
    "armor": [
        { id: "a1", name: "Burning Scroll Plate", level: 60, rarity: "Mythic", image: armorSvg, stats: { combat: { rng_atk: 35, inf_atk: 35, army_hp: 20 }, economy: {} } },
        { id: "a2", name: "Tesla Coils Armor", level: 60, rarity: "Legendary", image: armorSvg, stats: { combat: { cav_atk: 40, army_def: 30 }, economy: { gold_prod: 50 } } },
        { id: "a3", name: "Cavalry Chainmail", level: 50, rarity: "Epic", image: armorSvg, stats: { combat: { cav_atk: 28, rng_def: 25 }, economy: {} } },
        { id: "a4", name: "Brutal Plate", level: 55, rarity: "Legendary", image: armorSvg, stats: { combat: { inf_atk: 32, army_hp: 18 }, economy: {} } }
    ],
    "helmet": [
        { id: "h1", name: "Corinthian Helmet", level: 60, rarity: "Mythic", image: helmetSvg, stats: { combat: { inf_atk: 30, cav_atk: 30, army_hp: 15 }, economy: { training_speed: 10 } } },
        { id: "h2", name: "Terror Shield Mask", level: 60, rarity: "Legendary", image: helmetSvg, stats: { combat: { rng_atk: 35, army_def: 20, wall_def: 50 }, economy: {} } },
        { id: "h3", name: "Bumblebee Helm", level: 55, rarity: "Epic", image: helmetSvg, stats: { combat: { inf_atk: 25, cav_atk: 25 }, economy: { energy_cap: 30, monster_hunt_atk: 20 } } },
        { id: "h4", name: "Noceros Mask", level: 50, rarity: "Legendary", image: helmetSvg, stats: { combat: { cav_atk: 30, army_hp: 15 }, economy: { travel_speed: 25 } } }
    ],
    "main_hand": [
        { id: "m1", name: "Fire Wall Greatsword", level: 60, rarity: "Mythic", image: mainHandSvg, stats: { combat: { inf_atk: 45, rng_atk: 30, army_hp: 20 }, economy: {} } },
        { id: "m2", name: "Atrocious Mace", level: 60, rarity: "Legendary", image: mainHandSvg, stats: { combat: { cav_atk: 45, inf_def: 30 }, economy: {} } },
        { id: "m3", name: "Saberfang Scimitar", level: 50, rarity: "Epic", image: mainHandSvg, stats: { combat: { rng_atk: 30, cav_atk: 25 }, economy: { gathering_speed: 15 } } },
        { id: "m4", name: "Lunar Scourge", level: 55, rarity: "Legendary", image: mainHandSvg, stats: { combat: { inf_atk: 38, rng_atk: 38 }, economy: {} } }
    ],
    "off_hand": [
        { id: "o1", name: "Rumbling Shield", level: 60, rarity: "Mythic", image: offHandSvg, stats: { combat: { army_def: 40, army_hp: 25, inf_atk: 20 }, economy: {} } },
        { id: "o2", name: "Terror Shield", level: 60, rarity: "Legendary", image: offHandSvg, stats: { combat: { cav_atk: 35, army_def: 30 }, economy: {} } },
        { id: "o3", name: "Book of the Dead", level: 60, rarity: "Mythic", image: offHandSvg, stats: { combat: { rng_atk: 40, inf_atk: 40 }, economy: { research_speed: 25 } } },
        { id: "o4", name: "Frostwing Shield", level: 55, rarity: "Epic", image: offHandSvg, stats: { combat: { inf_def: 30, cav_def: 30 }, economy: {} } }
    ],
    "accessory": [
        { id: "ac1", name: "Blight Ring", level: 60, rarity: "Mythic", image: accessorySvg, stats: { combat: { rng_atk: 35, cav_atk: 35, army_hp: 15 }, economy: {} } },
        { id: "ac2", name: "Champ Brooch", level: 60, rarity: "Legendary", image: accessorySvg, stats: { combat: { inf_atk: 40, rng_atk: 40, army_atk: 10 }, economy: {} } },
        { id: "ac3", name: "Will of the Five", level: 60, rarity: "Mythic", image: accessorySvg, stats: { combat: { army_atk: 30, army_def: 30, army_hp: 30 }, economy: { construction_speed: 20, research_speed: 20 } } },
        { id: "ac4", name: "Earring of Recovery", level: 50, rarity: "Epic", image: accessorySvg, stats: { combat: { inf_atk: 25 }, economy: { training_speed: 15 } } },
        { id: "ac5", name: "Lunar Orb", level: 55, rarity: "Legendary", image: accessorySvg, stats: { combat: { rng_atk: 30, cav_atk: 30 }, economy: { max_energy: 25 } } }
    ]
};
