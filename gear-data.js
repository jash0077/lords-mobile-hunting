const gearData = {
    "Main Hand": [
        { name: "Champion Blade", rarity: "Mythic", image: "assets/gear/champion_blade.svg", stats: { "Infantry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Skullcrusher", rarity: "Mythic", image: "assets/gear/skullcrusher.svg", stats: { "Ranged ATK": 35, "Army ATK": 14, "Army HP": 14, "Construction Speed": 10 } },
        { name: "Frostwing Greatsword", rarity: "Mythic", image: "assets/gear/frostwing_greatsword.svg", stats: { "Infantry ATK": 28, "Cavalry ATK": 28, "Ranged ATK": 17.5, "Army HP": 14, "Monster Hunt DMG Boost": 30 } },
        { name: "Venomous Stinger", rarity: "Mythic", image: "assets/gear/venomous_stinger.svg", stats: { "Ranged ATK": 28, "Infantry ATK": 28, "Army HP": 14, "Monster Hunt DMG Boost": 25, "Travel Speed": 15 } },
        { name: "Dragon's Fist", rarity: "Mythic", image: "assets/gear/dragon_s_fist.svg", stats: { "Cavalry ATK": 28, "Army HP": 21, "Army DEF": 21, "Research Speed": 10 } },
        { name: "Fiery Tomahawk", rarity: "Mythic", image: "assets/gear/fiery_tomahawk.svg", stats: { "Infantry ATK": 35, "Cavalry ATK": 14, "Army HP": 14, "Construction Speed": 10 } },
        { name: "Lightning Rod", rarity: "Mythic", image: "assets/gear/lightning_rod.svg", stats: { "Ranged ATK": 35, "Cavalry ATK": 14, "Army HP": 14, "Training Speed": 8 } },
        { name: "Apprentice Wand", rarity: "Mythic", image: "assets/gear/apprentice_wand.svg", stats: { "Ranged ATK": 21, "Army ATK": 10, "Resource Gathering Speed": 15 } },
        { name: "Saberfang Sword", rarity: "Mythic", image: "assets/gear/saberfang_sword.svg", stats: { "Cavalry ATK": 35, "Infantry ATK": 14, "Army HP": 14, "Monster Hunt DMG Boost": 25 } },
        { name: "Noceros Wand", rarity: "Mythic", image: "assets/gear/noceros_wand.svg", stats: { "Ranged ATK": 35, "Cavalry ATK": 14, "Army HP": 14, "Monster Hunt Travel Speed": 30 } },
        { name: "Gorgon Staff", rarity: "Mythic", image: "assets/gear/gorgon_staff.svg", stats: { "Ranged ATK": 28, "Army HP": 21, "Army DEF": 21, "Research Speed": 10 } },
        { name: "Hardrox Hammer", rarity: "Mythic", image: "assets/gear/hardrox_hammer.svg", stats: { "Infantry ATK": 35, "Army HP": 21, "Army DEF": 21, "Forging Speed": 12 } }
    ],
    "Off-Hand": [
        { name: "Champion Faith", rarity: "Mythic", image: "assets/gear/champion_faith.svg", stats: { "Ranged ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Winter Mittens", rarity: "Mythic", image: "assets/gear/winter_mittens.svg", stats: { "Army HP": 35, "Army DEF": 35, "Ranged ATK": 14, "Monster Hunt DMG Boost": 40 } },
        { name: "Eternal Codex", rarity: "Mythic", image: "assets/gear/eternal_codex.svg", stats: { "Ranged ATK": 49, "Cavalry ATK": 28, "Army HP": 14, "Research Speed": 15 } },
        { name: "Call of the Deep", rarity: "Mythic", image: "assets/gear/call_of_the_deep.svg", stats: { "Infantry ATK": 28, "Cavalry ATK": 28, "Army HP": 14, "Training Speed": 10 } },
        { name: "Shield of the Deep", rarity: "Mythic", image: "assets/gear/shield_of_the_deep.svg", stats: { "Cavalry ATK": 35, "Infantry ATK": 21, "Army HP": 21, "Army DEF": 30 } },
        { name: "Vanguard Shield", rarity: "Mythic", image: "assets/gear/vanguard_shield.svg", stats: { "Infantry ATK": 35, "Army DEF": 35, "Army HP": 14, "Construction Speed": 12 } },
        { name: "Tear of Heaven", rarity: "Mythic", image: "assets/gear/tear_of_heaven.svg", stats: { "Cavalry ATK": 28, "Army HP": 21, "Travel Speed": 20 } },
        { name: "Eerie Lantern", rarity: "Mythic", image: "assets/gear/eerie_lantern.svg", stats: { "Ranged ATK": 28, "Cavalry ATK": 28, "Army HP": 14, "Monster Hunt DMG Boost": 30 } },
        { name: "Cursed Sword", rarity: "Mythic", image: "assets/gear/cursed_sword.svg", stats: { "Infantry ATK": 35, "Army ATK": 14, "Army HP": 14, "Monster Hunt Travel Speed": 25 } },
        { name: "Rumbling Fist", rarity: "Mythic", image: "assets/gear/rumbling_fist.svg", stats: { "Cavalry ATK": 35, "Infantry ATK": 14, "Army HP": 14, "Monster Hunt DMG Boost": 25 } }
    ],
    "Helmet": [
        { name: "Champion Helm", rarity: "Mythic", image: "assets/gear/champion_helm.svg", stats: { "Cavalry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Bumblehelm", rarity: "Mythic", image: "assets/gear/bumblehelm.svg", stats: { "Cavalry ATK": 42, "Ranged ATK": 42, "Army HP": 28, "Monster Hunt Travel Speed": 30 } },
        { name: "Beast Helmet", rarity: "Mythic", image: "assets/gear/beast_helmet.svg", stats: { "Infantry ATK": 35, "Cavalry ATK": 35, "Army HP": 21, "Monster Hunt DMG Boost": 30 } },
        { name: "Shadow Helmet", rarity: "Mythic", image: "assets/gear/shadow_helmet.svg", stats: { "Ranged ATK": 28, "Infantry ATK": 28, "Army HP": 14, "Travel Speed": 15 } },
        { name: "Corrupted Crown", rarity: "Mythic", image: "assets/gear/corrupted_crown.svg", stats: { "Infantry ATK": 49, "Cavalry ATK": 28, "Army HP": 14, "Research Speed": 15 } },
        { name: "Helm of the Deep", rarity: "Mythic", image: "assets/gear/helm_of_the_deep.svg", stats: { "Ranged ATK": 35, "Infantry ATK": 28, "Army HP": 21, "Training Speed": 10 } },
        { name: "Dragon's Talon", rarity: "Mythic", image: "assets/gear/dragon_s_talon.svg", stats: { "Ranged ATK": 35, "Army HP": 28, "Army DEF": 28, "Construction Speed": 10 } },
        { name: "Guardsman Helmet", rarity: "Mythic", image: "assets/gear/guardsman_helmet.svg", stats: { "Infantry ATK": 21, "Army DEF": 21, "Resource Gathering Speed": 15 } },
        { name: "Mask of the Dark", rarity: "Mythic", image: "assets/gear/mask_of_the_dark.svg", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21, "Monster Hunt DMG Boost": 25 } }
    ],
    "Armor": [
        { name: "Champion Plate", rarity: "Mythic", image: "assets/gear/champion_plate.svg", stats: { "Infantry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Firewall Plate", rarity: "Mythic", image: "assets/gear/firewall_plate.svg", stats: { "Infantry ATK": 35, "Cavalry ATK": 35, "Infantry Max HP": 28, "Cavalry Max HP": 28, "Army DEF": 35 } },
        { name: "Terror Shield (Armor)", rarity: "Mythic", image: "assets/gear/terror_shield__armor_.svg", stats: { "Infantry ATK": 28, "Ranged ATK": 28, "Army HP": 21, "Monster Hunt DMG Boost": 35 } },
        { name: "Hedonis Cuirass", rarity: "Mythic", image: "assets/gear/hedonis_cuirass.svg", stats: { "Cavalry ATK": 28, "Ranged ATK": 28, "Army HP": 21, "Training Speed": 10 } },
        { name: "Brutal Plate", rarity: "Mythic", image: "assets/gear/brutal_plate.svg", stats: { "Infantry ATK": 35, "Army HP": 28, "Army DEF": 28, "Construction Speed": 15 } },
        { name: "Bee Jacket", rarity: "Mythic", image: "assets/gear/bee_jacket.svg", stats: { "Ranged ATK": 35, "Army HP": 28, "Army DEF": 28, "Research Speed": 12 } },
        { name: "Regal Plate", rarity: "Mythic", image: "assets/gear/regal_plate.svg", stats: { "Cavalry ATK": 35, "Army HP": 28, "Army DEF": 28, "Army Capacity": 25000 } },
        { name: "Extension Armor", rarity: "Mythic", image: "assets/gear/extension_armor.svg", stats: { "Infantry ATK": 28, "Army ATK": 14, "Army HP": 14, "Monster Hunt Travel Speed": 20 } }
    ],
    "Legs": [
        { name: "Champion Greaves", rarity: "Mythic", image: "assets/gear/champion_greaves.svg", stats: { "Cavalry ATK": 42, "Army HP": 21, "Army DEF": 21, "Forging Speed": 15 } },
        { name: "Storm Tasset", rarity: "Mythic", image: "assets/gear/storm_tasset.svg", stats: { "Infantry ATK": 28, "Cavalry ATK": 21, "Ranged ATK": 21, "Army HP": 21, "Monster Hunt DMG Boost": 25 } },
        { name: "Dragon's Stride", rarity: "Mythic", image: "assets/gear/dragon_s_stride.svg", stats: { "Cavalry ATK": 35, "Ranged ATK": 35, "Army HP": 21, "Travel Speed": 20 } },
        { name: "Indomitable Boots", rarity: "Mythic", image: "assets/gear/indomitable_boots.svg", stats: { "Infantry ATK": 35, "Ranged ATK": 35, "Army HP": 21, "Training Speed": 10 } },
        { name: "Gargantua Belt", rarity: "Mythic", image: "assets/gear/gargantua_belt.svg", stats: { "Infantry ATK": 49, "Cavalry ATK": 28, "Army HP": 14, "Research Speed": 15 } },
        { name: "Tasset of the Deep", rarity: "Mythic", image: "assets/gear/tasset_of_the_deep.svg", stats: { "Cavalry ATK": 35, "Infantry ATK": 28, "Army HP": 21, "Construction Speed": 10 } },
        { name: "Untamed Boots", rarity: "Mythic", image: "assets/gear/untamed_boots.svg", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21, "Monster Hunt Travel Speed": 25 } },
        { name: "SPD Boots", rarity: "Mythic", image: "assets/gear/spd_boots.svg", stats: { "Travel Speed": 30, "Army HP": 14, "Monster Hunt Travel Speed": 20 } }
    ],
    "Accessory": [
        { name: "Ambrosial Cup", rarity: "Mythic", image: "assets/gear/ambrosial_cup.svg", stats: { "Infantry ATK": 35, "Ranged ATK": 35, "Army HP": 28, "Monster Hunt DMG Boost": 30 } },
        { name: "Burning Scroll", rarity: "Mythic", image: "assets/gear/burning_scroll.svg", stats: { "Infantry ATK": 14, "Cavalry ATK": 14, "Ranged ATK": 14, "Army HP": 14, "Monster Hunt DMG Boost": 20 } },
        { name: "Champion Lamp", rarity: "Mythic", image: "assets/gear/champion_lamp.svg", stats: { "Infantry ATK": 14, "Ranged ATK": 14, "Cavalry ATK": 14, "Army HP": 14, "Forging Speed": 10 } },
        { name: "Ring of Ancients", rarity: "Mythic", image: "assets/gear/ring_of_ancients.svg", stats: { "Infantry ATK": 10.5, "Ranged ATK": 10.5, "Army HP": 10.5, "Army DEF": 10.5, "Training Speed": 5 } },
        { name: "Blight Ring", rarity: "Mythic", image: "assets/gear/blight_ring.svg", stats: { "Ranged ATK": 21, "Cavalry ATK": 21, "Army HP": 14, "Research Speed": 8 } },
        { name: "Fear Drum", rarity: "Mythic", image: "assets/gear/fear_drum.svg", stats: { "Infantry ATK": 21, "Cavalry ATK": 21, "Army HP": 14, "Construction Speed": 8 } },
        { name: "Wyrm's Breath", rarity: "Mythic", image: "assets/gear/wyrm_s_breath.svg", stats: { "Ranged ATK": 35, "Cavalry ATK": 28, "Army HP": 21, "Monster Hunt Travel Speed": 20 } },
        { name: "Lunar Harp", rarity: "Mythic", image: "assets/gear/lunar_harp.svg", stats: { "Ranged ATK": 35, "Army HP": 28, "Army ATK": 14, "Training Speed": 10 } },
        { name: "Golden Cup", rarity: "Mythic", image: "assets/gear/ambrosial_cup.svg", stats: { "Infantry ATK": 28, "Ranged ATK": 28, "Army HP": 21, "Monster Hunt DMG Boost": 25 } },
        { name: "Tome of the Dark", rarity: "Mythic", image: "assets/gear/eternal_codex.svg", stats: { "Research Speed": 12, "Army HP": 14, "Army DEF": 14 } }
    ]
};
