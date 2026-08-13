const gearData = {
    "Main Hand": [
        { name: "Champion Blade", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/3d/Champion_Blade.png", stats: { "Infantry ATK": 42, "Army HP": 21, "Army DEF": 21 } },
        { name: "Skullcrusher", rarity: "Mythic", image: "images/gear/skull_crusher.png", stats: { "Ranged ATK": 35, "Army ATK": 14, "Army HP": 14 } },
        { name: "Frostwing Greatsword", rarity: "Mythic", image: "images/gear/frostwing_greatsword.png", stats: { "Infantry ATK": 28, "Cavalry ATK": 28, "Ranged ATK": 17.5, "Army HP": 14 } },
        { name: "Venomous Stinger", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/96/Venomous_Stinger.png", stats: { "Ranged ATK": 28, "Infantry ATK": 28, "Army HP": 14 } },
        { name: "Dragon's Fist", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/1/1b/Dragon%27s_Fist.png", stats: { "Cavalry ATK": 28, "Army HP": 21, "Army DEF": 21 } },
        { name: "Fiery Tomahawk", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/8/82/Fiery_Tomahawk.png", stats: { "Infantry ATK": 35, "Cavalry ATK": 14, "Army HP": 14 } },
        { name: "Lightning Rod", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a2/Lightning_Rod.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 14, "Army HP": 14 } },
        { name: "Apprentice Wand", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/6c/Apprentice_Wand.png", stats: { "Ranged ATK": 21, "Army ATK": 10 } }
    ],
    "Off-Hand": [
        { name: "Champion Faith", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/52/Champion_Faith.png", stats: { "Ranged ATK": 42, "Army HP": 21, "Army DEF": 21 } },
        { name: "Winter Mittens", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a5/Winter_Mittens.png", stats: { "Army HP": 35, "Army DEF": 35, "Ranged ATK": 14 } },
        { name: "Eternal Codex", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/0d/Eternal_Codex.png", stats: { "Ranged ATK": 49, "Cavalry ATK": 28, "Army HP": 14 } },
        { name: "Call of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/c/c2/Call_of_the_Deep.png", stats: { "Infantry ATK": 28, "Cavalry ATK": 28, "Army HP": 14 } },
        { name: "Shield of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/01/Shield_of_the_Deep.png", stats: { "Cavalry ATK": 35, "Infantry ATK": 21, "Army HP": 21 } },
        { name: "Vanguard Shield", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/37/Vanguard_Shield.png", stats: { "Infantry ATK": 35, "Army DEF": 35, "Army HP": 14 } },
        { name: "Tear of Heaven", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/91/Tear_of_Heaven.png", stats: { "Cavalry ATK": 28, "Army HP": 21 } }
    ],
    "Helmet": [
        { name: "Champion Helm", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/1/1d/Champion_Helm.png", stats: { "Cavalry ATK": 42, "Army HP": 21, "Army DEF": 21 } },
        { name: "Bumblehelm", rarity: "Mythic", image: "images/gear/bumblehelm.png", stats: { "Cavalry ATK": 42, "Ranged ATK": 42, "Army HP": 28 } },
        { name: "Beast Helmet", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a1/Beast_Helmet.png", stats: { "Infantry ATK": 35, "Cavalry ATK": 35, "Army HP": 21 } },
        { name: "Shadow Helmet", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/30/Shadow_Helmet.png", stats: { "Ranged ATK": 28, "Infantry ATK": 28, "Army HP": 14 } },
        { name: "Corrupted Crown", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/3/3a/Corrupted_Crown.png", stats: { "Infantry ATK": 49, "Cavalry ATK": 28, "Army HP": 14 } },
        { name: "Helm of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/52/Helm_of_the_Deep.png", stats: { "Ranged ATK": 35, "Infantry ATK": 28, "Army HP": 21 } },
        { name: "Dragon's Talon", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/9f/Dragon%27s_Talon.png", stats: { "Ranged ATK": 35, "Army HP": 28, "Army DEF": 28 } }
    ],
    "Armor": [
        { name: "Champion Plate", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/ae/Champion_Plate.png", stats: { "Infantry ATK": 42, "Army HP": 21, "Army DEF": 21 } },
        { name: "Firewall Plate", rarity: "Mythic", image: "images/gear/firewall_plate.png", stats: { "Infantry ATK": 35, "Cavalry ATK": 35, "Infantry HP": 28, "Cavalry HP": 28 } },
        { name: "Terror Shield (Armor)", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/51/Terror_Shield.png", stats: { "Infantry ATK": 28, "Ranged ATK": 28, "Army HP": 21 } },
        { name: "Hedonis Cuirass", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/01/Hedonis_Cuirass.png", stats: { "Cavalry ATK": 28, "Ranged ATK": 28, "Army HP": 21 } },
        { name: "Brutal Plate", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/23/Brutal_Plate.png", stats: { "Infantry ATK": 35, "Army HP": 28, "Army DEF": 28 } },
        { name: "Bee Jacket", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/4/4b/Bee_Jacket.png", stats: { "Ranged ATK": 35, "Army HP": 28, "Army DEF": 28 } },
        { name: "Regal Plate", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/6/6f/Regal_Plate.png", stats: { "Cavalry ATK": 35, "Army HP": 28, "Army DEF": 28 } }
    ],
    "Legs": [
        { name: "Champion Greaves", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/e/e0/Champion_Greaves.png", stats: { "Cavalry ATK": 42, "Army HP": 21, "Army DEF": 21 } },
        { name: "Storm Tasset", rarity: "Mythic", image: "images/gear/storm_tasset.png", stats: { "Infantry ATK": 28, "Cavalry ATK": 21, "Ranged ATK": 21, "Army HP": 21 } },
        { name: "Dragon's Stride", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/a/a4/Dragon%27s_Stride.png", stats: { "Cavalry ATK": 35, "Ranged ATK": 35, "Army HP": 21 } },
        { name: "Indomitable Boots", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/07/Indomitable_Boots.png", stats: { "Infantry ATK": 35, "Ranged ATK": 35, "Army HP": 21 } },
        { name: "Gargantua Belt", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/9/91/Gargantua_Belt.png", stats: { "Infantry ATK": 49, "Cavalry ATK": 28, "Army HP": 14 } },
        { name: "Tasset of the Deep", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/7/7b/Tasset_of_the_Deep.png", stats: { "Cavalry ATK": 35, "Infantry ATK": 28, "Army HP": 21 } },
        { name: "Untamed Boots", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/4/41/Untamed_Boots.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21 } }
    ],
    "Accessory": [
        { name: "Ambrosial Cup", rarity: "Mythic", image: "images/gear/ambrosial_cup.png", stats: { "Infantry ATK": 35, "Ranged ATK": 35, "Army HP": 28 } },
        { name: "Burning Scroll", rarity: "Mythic", image: "images/gear/burning_scroll.png", stats: { "Infantry ATK": 14, "Cavalry ATK": 14, "Ranged ATK": 14, "Army HP": 14 } },
        { name: "Champion Lamp", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/b/b2/Champion_Lamp.png", stats: { "Infantry ATK": 14, "Ranged ATK": 14, "Cavalry ATK": 14, "Army HP": 14 } },
        { name: "Ring of Ancients", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/52/Ring_of_Ancients.png", stats: { "Infantry ATK": 10.5, "Ranged ATK": 10.5, "Army HP": 10.5, "Army DEF": 10.5 } },
        { name: "Blight Ring", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/0/0f/Blight_Ring.png", stats: { "Ranged ATK": 21, "Cavalry ATK": 21, "Army HP": 14 } },
        { name: "Fear Drum", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/b/b3/Fear_Drum.png", stats: { "Infantry ATK": 21, "Cavalry ATK": 21, "Army HP": 14 } },
        { name: "Wrym's Breath", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/5/5c/Wyrm%27s_Breath.png", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21 } },
        { name: "Lunar Harp", rarity: "Mythic", image: "https://static.wikia.nocookie.net/lordsmobile/images/2/29/Lunar_Harp.png", stats: { "Ranged ATK": 35, "Army HP": 28, "Army ATK": 14 } }
    ]
};
