const gearData = {
    "Main Hand": [
        { name: "Champion Blade", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/3d/Champion_Blade.png", stats: { "Infantry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Skullcrusher", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/07/Skullcrusher.png", stats: { "Ranged ATK": 35, "Army ATK": 14, "Army HP": 14, "Construction Speed": 10 } },
        { name: "Frostwing Greatsword", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/23/Frostwing_Greatsword.png", stats: { "Infantry ATK": 28, "Cavalry ATK": 28, "Ranged ATK": 17.5, "Army HP": 14, "Monster Hunt DMG Boost": 30 } },
        { name: "Venomous Stinger", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/96/Venomous_Stinger.png", stats: { "Ranged ATK": 28, "Infantry ATK": 28, "Army HP": 14, "Monster Hunt DMG Boost": 25, "Travel Speed": 15 } },
        { name: "Dragon's Fist", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/1/1b/Dragon%27s_Fist.png", stats: { "Cavalry ATK": 28, "Army HP": 21, "Army DEF": 21, "Research Speed": 10 } },
        { name: "Fiery Tomahawk", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/82/Fiery_Tomahawk.png", stats: { "Infantry ATK": 35, "Cavalry ATK": 14, "Army HP": 14, "Construction Speed": 10 } },
        { name: "Lightning Rod", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a2/Lightning_Rod.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 14, "Army HP": 14, "Training Speed": 8 } },
        { name: "Apprentice Wand", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/6c/Apprentice_Wand.png", stats: { "Ranged ATK": 21, "Army ATK": 10, "Resource Gathering Speed": 15 } },
        { name: "Saberfang Sword", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/c/c5/Saberfang_Sword.png", stats: { "Cavalry ATK": 35, "Infantry ATK": 14, "Army HP": 14, "Monster Hunt DMG Boost": 25 } },
        { name: "Noceros Wand", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/b/b2/Noceros_Wand.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 14, "Army HP": 14, "Monster Hunt Travel Speed": 30 } },
        { name: "Gorgon Staff", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/52/Gorgon_Staff.png", stats: { "Ranged ATK": 28, "Army HP": 21, "Army DEF": 21, "Research Speed": 10 } },
        { name: "Hardrox Hammer", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/81/Hardrox_Hammer.png", stats: { "Infantry ATK": 35, "Army HP": 21, "Army DEF": 21, "Forging Speed": 12 } }
    ],
    "Off-Hand": [
        { name: "Champion Faith", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/52/Champion_Faith.png", stats: { "Ranged ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Winter Mittens", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a5/Winter_Mittens.png", stats: { "Army HP": 35, "Army DEF": 35, "Ranged ATK": 14, "Monster Hunt DMG Boost": 40 } },
        { name: "Eternal Codex", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/0d/Eternal_Codex.png", stats: { "Ranged ATK": 49, "Cavalry ATK": 28, "Army HP": 14, "Research Speed": 15 } },
        { name: "Call of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/c/c2/Call_of_the_Deep.png", stats: { "Infantry ATK": 28, "Cavalry ATK": 28, "Army HP": 14, "Training Speed": 10 } },
        { name: "Shield of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/01/Shield_of_the_Deep.png", stats: { "Cavalry ATK": 35, "Infantry ATK": 21, "Army HP": 21, "Army DEF": 30 } },
        { name: "Vanguard Shield", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/37/Vanguard_Shield.png", stats: { "Infantry ATK": 35, "Army DEF": 35, "Army HP": 14, "Construction Speed": 12 } },
        { name: "Tear of Heaven", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/91/Tear_of_Heaven.png", stats: { "Cavalry ATK": 28, "Army HP": 21, "Travel Speed": 20 } },
        { name: "Eerie Lantern", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/f/f0/Eerie_Lantern.png", stats: { "Ranged ATK": 28, "Cavalry ATK": 28, "Army HP": 14, "Monster Hunt DMG Boost": 30 } },
        { name: "Cursed Sword", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/6f/Cursed_Sword.png", stats: { "Infantry ATK": 35, "Army ATK": 14, "Army HP": 14, "Monster Hunt Travel Speed": 25 } },
        { name: "Rumbling Fist", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/e/e0/Rumbling_Fist.png", stats: { "Cavalry ATK": 35, "Infantry ATK": 14, "Army HP": 14, "Monster Hunt DMG Boost": 25 } }
    ],
    "Helmet": [
        { name: "Champion Helm", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/1/1d/Champion_Helm.png", stats: { "Cavalry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Bumblehelm", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/6f/Bumblehelm.png", stats: { "Cavalry ATK": 42, "Ranged ATK": 42, "Army HP": 28, "Monster Hunt Travel Speed": 30 } },
        { name: "Beast Helmet", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a1/Beast_Helmet.png", stats: { "Infantry ATK": 35, "Cavalry ATK": 35, "Army HP": 21, "Monster Hunt DMG Boost": 30 } },
        { name: "Shadow Helmet", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/30/Shadow_Helmet.png", stats: { "Ranged ATK": 28, "Infantry ATK": 28, "Army HP": 14, "Travel Speed": 15 } },
        { name: "Corrupted Crown", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/3a/Corrupted_Crown.png", stats: { "Infantry ATK": 49, "Cavalry ATK": 28, "Army HP": 14, "Research Speed": 15 } },
        { name: "Helm of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/52/Helm_of_the_Deep.png", stats: { "Ranged ATK": 35, "Infantry ATK": 28, "Army HP": 21, "Training Speed": 10 } },
        { name: "Dragon's Talon", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/9f/Dragon%27s_Talon.png", stats: { "Ranged ATK": 35, "Army HP": 28, "Army DEF": 28, "Construction Speed": 10 } },
        { name: "Guardsman Helmet", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/23/Guardsman_Helmet.png", stats: { "Infantry ATK": 21, "Army DEF": 21, "Resource Gathering Speed": 15 } },
        { name: "Mask of the Dark", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/4/41/Mask_of_the_Dark.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21, "Monster Hunt DMG Boost": 25 } }
    ],
    "Armor": [
        { name: "Champion Plate", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/ae/Champion_Plate.png", stats: { "Infantry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Firewall Plate", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/4/42/Firewall_Plate.png", stats: { "Infantry ATK": 35, "Cavalry ATK": 35, "Infantry Max HP": 28, "Cavalry Max HP": 28, "Army DEF": 35 } },
        { name: "Terror Shield (Armor)", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/51/Terror_Shield.png", stats: { "Infantry ATK": 28, "Ranged ATK": 28, "Army HP": 21, "Monster Hunt DMG Boost": 35 } },
        { name: "Hedonis Cuirass", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/01/Hedonis_Cuirass.png", stats: { "Cavalry ATK": 28, "Ranged ATK": 28, "Army HP": 21, "Training Speed": 10 } },
        { name: "Brutal Plate", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/23/Brutal_Plate.png", stats: { "Infantry ATK": 35, "Army HP": 28, "Army DEF": 28, "Construction Speed": 15 } },
        { name: "Bee Jacket", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/4/4b/Bee_Jacket.png", stats: { "Ranged ATK": 35, "Army HP": 28, "Army DEF": 28, "Research Speed": 12 } },
        { name: "Regal Plate", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/6f/Regal_Plate.png", stats: { "Cavalry ATK": 35, "Army HP": 28, "Army DEF": 28, "Army Capacity": 25000 } },
        { name: "Extension Armor", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/82/Extension_Armor.png", stats: { "Infantry ATK": 28, "Army ATK": 14, "Army HP": 14, "Monster Hunt Travel Speed": 20 } }
    ],
    "Legs": [
        { name: "Champion Greaves", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/e/e0/Champion_Greaves.png", stats: { "Cavalry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Storm Tasset", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/7/7b/Storm_Tasset.png", stats: { "Infantry ATK": 28, "Cavalry ATK": 21, "Ranged ATK": 21, "Army HP": 21, "Monster Hunt DMG Boost": 25 } },
        { name: "Dragon's Stride", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a4/Dragon%27s_Stride.png", stats: { "Cavalry ATK": 35, "Ranged ATK": 35, "Army HP": 21, "Travel Speed": 20 } },
        { name: "Indomitable Boots", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/07/Indomitable_Boots.png", stats: { "Infantry ATK": 35, "Ranged ATK": 35, "Army HP": 21, "Training Speed": 10 } },
        { name: "Gargantua Belt", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/91/Gargantua_Belt.png", stats: { "Infantry ATK": 49, "Cavalry ATK": 28, "Army HP": 14, "Research Speed": 15 } },
        { name: "Tasset of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/7/7b/Tasset_of_the_Deep.png", stats: { "Cavalry ATK": 35, "Infantry ATK": 28, "Army HP": 21, "Construction Speed": 10 } },
        { name: "Untamed Boots", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/4/41/Untamed_Boots.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21, "Monster Hunt Travel Speed": 25 } },
        { name: "SPD Boots", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/8c/SPD_Boots.png", stats: { "Travel Speed": 30, "Army HP": 14, "Monster Hunt Travel Speed": 20 } }
    ],
    "Accessory": [
        { name: "Ambrosial Cup", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/3b/Ambrosial_Cup.png", stats: { "Infantry ATK": 35, "Ranged ATK": 35, "Army HP": 28, "Monster Hunt DMG Boost": 30 } },
        { name: "Burning Scroll", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/8c/Burning_Scroll.png", stats: { "Infantry ATK": 14, "Cavalry ATK": 14, "Ranged ATK": 14, "Army HP": 14, "Monster Hunt DMG Boost": 20 } },
        { name: "Champion Lamp", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/b/b2/Champion_Lamp.png", stats: { "Infantry ATK": 14, "Ranged ATK": 14, "Cavalry ATK": 14, "Army HP": 14, "Forging Speed": 10 } },
        { name: "Ring of Ancients", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/52/Ring_of_Ancients.png", stats: { "Infantry ATK": 10.5, "Ranged ATK": 10.5, "Army HP": 10.5, "Army DEF": 10.5, "Training Speed": 5 } },
        { name: "Blight Ring", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/0f/Blight_Ring.png", stats: { "Ranged ATK": 21, "Cavalry ATK": 21, "Army HP": 14, "Research Speed": 8 } },
        { name: "Fear Drum", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/b/b3/Fear_Drum.png", stats: { "Infantry ATK": 21, "Cavalry ATK": 21, "Army HP": 14, "Construction Speed": 8 } },
        { name: "Wyrm's Breath", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/5c/Wyrm%27s_Breath.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21, "Monster Hunt Travel Speed": 20 } },
        { name: "Lunar Harp", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/29/Lunar_Harp.png", stats: { "Ranged ATK": 35, "Army HP": 28, "Army ATK": 14, "Training Speed": 10 } },
        { name: "Golden Cup", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/3b/Ambrosial_Cup.png", stats: { "Infantry ATK": 28, "Ranged ATK": 28, "Army HP": 21, "Monster Hunt DMG Boost": 25 } },
        { name: "Tome of the Dark", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/0d/Eternal_Codex.png", stats: { "Research Speed": 12, "Army HP": 14, "Army DEF": 14 } }
    ]
};

const ALL_ATTRIBUTES = [
    "Energy Saver", "Max Energy", "Monster Hunt DMG Boost", "Monster Hunt Travel Speed", "Monster Hunt Starting MP",
    "Infantry ATK", "Cavalry ATK", "Ranged ATK", "Siege Engine ATK", "Siege Engine Max HP",
    "Trap ATK", "Trap Max HP", "Army ATK", "Army DEF", "Army Max HP", "Army HP",
    "Infantry Max HP", "Cavalry Max HP", "Ranged Max HP", "Infantry DEF", "Cavalry DEF", "Ranged DEF",
    "Trap DEF", "Siege Engine DEF", "Wall DEF Boost", "Research Speed", "Construction Speed",
    "Travel Speed", "Resource Gathering Speed", "Food Production Rate", "Stone Production Rate",
    "Timber Production Rate", "Ore Production Rate", "Gold Production Rate", "Training Speed",
    "Merging Speed Boost (Pacts)", "Merging Speed Boost (Skillstones)", "Familiar Training Lv EXP Boost",
    "Familiar Skill EXP Boost", "Forging Speed", "Reduces Upkeep", "Army Capacity"
];
