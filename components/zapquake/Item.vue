<!--suppress CssUnknownTarget -->
<script setup lang="ts">

interface Building {
  nameKey: string
  maxLevel: number
  levelImages: string[]
  levelHps: number[]
}

const buildings: Building[] = [
  {
    nameKey: 'buildings.airDefense',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
      '/img/buildings/defense/air_defense/2.png',
      '/img/buildings/defense/air_defense/3.png',
      '/img/buildings/defense/air_defense/4.png',
      '/img/buildings/defense/air_defense/5.png',
      '/img/buildings/defense/air_defense/6.png',
      '/img/buildings/defense/air_defense/7.png',
      '/img/buildings/defense/air_defense/8.png',
      '/img/buildings/defense/air_defense/9.png',
      '/img/buildings/defense/air_defense/10.png',
      '/img/buildings/defense/air_defense/11.png',
      '/img/buildings/defense/air_defense/12.png',
      '/img/buildings/defense/air_defense/13.png',
      '/img/buildings/defense/air_defense/14.png'
    ],
    levelHps: [
      800, 850, 900, 950, 1000, 1050, 1100, 1210, 1300, 1400,
      1500, 1650, 1750, 1850
    ]
  },

  {
    nameKey: 'buildings.airSweeper',
    maxLevel: 7,
    levelImages: [
      '/img/buildings/defense/air_sweeper/1.png',
      '/img/buildings/defense/air_sweeper/2.png',
      '/img/buildings/defense/air_sweeper/3.png',
      '/img/buildings/defense/air_sweeper/4.png',
      '/img/buildings/defense/air_sweeper/5.png',
      '/img/buildings/defense/air_sweeper/6.png',
      '/img/buildings/defense/air_sweeper/7.png'
    ],
    levelHps: [
      750, 800, 850, 900, 950, 1000, 1050
    ]
  },

  {
    nameKey: 'buildings.archerQueen',
    maxLevel: 95,
    levelImages: [
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png'
    ],
    levelHps: [
      580, 592, 604, 617, 630, 643, 657, 670, 685, 699,
      714, 729, 744, 759, 775, 792, 808, 826, 842, 861,
      878, 897, 916, 935, 954, 974, 995, 1016, 1038, 1059,
      1082, 1104, 1128, 1151, 1175, 1200, 1226, 1251, 1278, 1304,
      1331, 1359, 1388, 1417, 1447, 1478, 1508, 1540, 1572, 1606,
      1646, 1688, 1730, 1774, 1819, 1865, 1912, 1960, 2010, 2060,
      2111, 2164, 2218, 2274, 2330, 2384, 2432, 2476, 2516, 2552,
      2584, 2616, 2648, 2680, 2712, 2740, 2768, 2796, 2824, 2852,
      2880, 2904, 2928, 2952, 2976, 3000, 3024, 3048, 3072, 3096,
      3120, 3144, 3168, 3192, 3216
    ]
  },

  {
    nameKey: 'buildings.archerTower',
    maxLevel: 21,
    levelImages: [
      '/img/buildings/defense/archer_tower/1.png',
      '/img/buildings/defense/archer_tower/2.png',
      '/img/buildings/defense/archer_tower/3.png',
      '/img/buildings/defense/archer_tower/4.png',
      '/img/buildings/defense/archer_tower/5.png',
      '/img/buildings/defense/archer_tower/6.png',
      '/img/buildings/defense/archer_tower/7.png',
      '/img/buildings/defense/archer_tower/8.png',
      '/img/buildings/defense/archer_tower/9.png',
      '/img/buildings/defense/archer_tower/10.png',
      '/img/buildings/defense/archer_tower/11.png',
      '/img/buildings/defense/archer_tower/12.png',
      '/img/buildings/defense/archer_tower/13.png',
      '/img/buildings/defense/archer_tower/14.png',
      '/img/buildings/defense/archer_tower/15.png',
      '/img/buildings/defense/archer_tower/16.png',
      '/img/buildings/defense/archer_tower/17.png',
      '/img/buildings/defense/archer_tower/18.png',
      '/img/buildings/defense/archer_tower/19.png',
      '/img/buildings/defense/archer_tower/20.png',
      '/img/buildings/defense/archer_tower/21.png'
    ],
    levelHps: [
      380, 420, 460, 500, 540, 580, 630, 690, 750, 810,
      890, 970, 1050, 1130, 1230, 1310, 1390, 1510, 1600, 1700,
      1800
    ]
  },

  {
    nameKey: 'buildings.barbarianKing',
    maxLevel: 95,
    levelImages: [
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png',
      '/img/heroes/barbarian_king.png'
    ],
    levelHps: [
      1445, 1481, 1518, 1556, 1595, 1635, 1675, 1717, 1760, 1805,
      1850, 1896, 1943, 1992, 2042, 2093, 2145, 2198, 2253, 2309,
      2367, 2427, 2487, 2549, 2613, 2678, 2746, 2814, 2885, 2956,
      3030, 3107, 3184, 3264, 3346, 3429, 3515, 3602, 3692, 3785,
      3879, 3976, 4076, 4178, 4282, 4389, 4499, 4611, 4727, 4845,
      4967, 5092, 5219, 5350, 5484, 5622, 5763, 5908, 6055, 6208,
      6363, 6522, 6685, 6853, 7024, 7200, 7378, 7557, 7735, 7905,
      8075, 8245, 8415, 8585, 8755, 8917, 9078, 9240, 9401, 9563,
      9690, 9818, 9945, 10073, 10200, 10328, 10455, 10583, 10710, 10838,
      10965, 11093, 11220, 11348, 11475
    ]
  },

  {
    nameKey: 'buildings.bombTower',
    maxLevel: 11,
    levelImages: [
      '/img/buildings/defense/bomb_tower/1.png',
      '/img/buildings/defense/bomb_tower/2.png',
      '/img/buildings/defense/bomb_tower/3.png',
      '/img/buildings/defense/bomb_tower/4.png',
      '/img/buildings/defense/bomb_tower/5.png',
      '/img/buildings/defense/bomb_tower/6.png',
      '/img/buildings/defense/bomb_tower/7.png',
      '/img/buildings/defense/bomb_tower/8.png',
      '/img/buildings/defense/bomb_tower/9.png',
      '/img/buildings/defense/bomb_tower/10.png',
      '/img/buildings/defense/bomb_tower/11.png'
    ],
    levelHps: [
      650, 700, 750, 850, 1050, 1300, 1600, 1900, 2300, 2500,
      2700
    ]
  },

  {
    nameKey: 'buildings.cannon',
    maxLevel: 21,
    levelImages: [
      '/img/buildings/defense/cannon/1.png',
      '/img/buildings/defense/cannon/2.png',
      '/img/buildings/defense/cannon/3.png',
      '/img/buildings/defense/cannon/4.png',
      '/img/buildings/defense/cannon/5.png',
      '/img/buildings/defense/cannon/6.png',
      '/img/buildings/defense/cannon/7.png',
      '/img/buildings/defense/cannon/8.png',
      '/img/buildings/defense/cannon/9.png',
      '/img/buildings/defense/cannon/10.png',
      '/img/buildings/defense/cannon/11.png',
      '/img/buildings/defense/cannon/12.png',
      '/img/buildings/defense/cannon/13.png',
      '/img/buildings/defense/cannon/14.png',
      '/img/buildings/defense/cannon/15.png',
      '/img/buildings/defense/cannon/16.png',
      '/img/buildings/defense/cannon/17.png',
      '/img/buildings/defense/cannon/18.png',
      '/img/buildings/defense/cannon/19.png',
      '/img/buildings/defense/cannon/20.png',
      '/img/buildings/defense/cannon/21.png'
    ],
    levelHps: [
      420, 470, 520, 570, 620, 670, 730, 800, 880, 960,
      1060, 1160, 1260, 1380, 1500, 1620, 1740, 1870, 2000, 2150,
      2250
    ]
  },

  {
    nameKey: 'buildings.eagleArtillery',
    maxLevel: 6,
    levelImages: [
      '/img/buildings/defense/eagle_artillery/1.png',
      '/img/buildings/defense/eagle_artillery/2.png',
      '/img/buildings/defense/eagle_artillery/3.png',
      '/img/buildings/defense/eagle_artillery/4.png',
      '/img/buildings/defense/eagle_artillery/5.png',
      '/img/buildings/defense/eagle_artillery/6.png'
    ],
    levelHps: [
      4000, 4400, 4800, 5200, 5600, 5900
    ]
  },

  {
    nameKey: 'buildings.grandWarden',
    maxLevel: 70,
    levelImages: [
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png',
      '/img/heroes/grand_warden.png'
    ],
    levelHps: [
      850, 868, 886, 904, 923, 942, 961, 982, 1003, 1025,
      1048, 1072, 1097, 1122, 1148, 1173, 1199, 1224, 1250, 1275,
      1301, 1327, 1354, 1381, 1409, 1438, 1467, 1497, 1527, 1558,
      1590, 1622, 1655, 1688, 1722, 1757, 1793, 1829, 1867, 1904,
      1921, 1938, 1955, 1972, 1989, 2006, 2023, 2040, 2057, 2074,
      2091, 2108, 2125, 2142, 2159, 2176, 2193, 2210, 2227, 2244,
      2261, 2278, 2295, 2312, 2329, 2346, 2363, 2380, 2397, 2414
    ]
  },

  {
    nameKey: 'buildings.healingHut',
    maxLevel: 5,
    levelImages: [
      '/img/buildings/defense/healing_hut/1.png',
      '/img/buildings/defense/healing_hut/2.png',
      '/img/buildings/defense/healing_hut/3.png',
      '/img/buildings/defense/healing_hut/4.png',
      '/img/buildings/defense/healing_hut/5.png'
    ],
    levelHps: [250, 1000, 1300, 1600, 1800]
  },

  {
    nameKey: 'buildings.hiddenTesla',
    maxLevel: 15,
    levelImages: [
      '/img/buildings/defense/hidden_tesla/1.png',
      '/img/buildings/defense/hidden_tesla/2.png',
      '/img/buildings/defense/hidden_tesla/3.png',
      '/img/buildings/defense/hidden_tesla/4.png',
      '/img/buildings/defense/hidden_tesla/5.png',
      '/img/buildings/defense/hidden_tesla/6.png',
      '/img/buildings/defense/hidden_tesla/7.png',
      '/img/buildings/defense/hidden_tesla/8.png',
      '/img/buildings/defense/hidden_tesla/9.png',
      '/img/buildings/defense/hidden_tesla/10.png',
      '/img/buildings/defense/hidden_tesla/11.png',
      '/img/buildings/defense/hidden_tesla/12.png',
      '/img/buildings/defense/hidden_tesla/13.png',
      '/img/buildings/defense/hidden_tesla/14.png',
      '/img/buildings/defense/hidden_tesla/15.png'
    ],
    levelHps: [
      600, 630, 660, 690, 730, 770, 810, 850, 900, 980,
      1100, 1200, 1350, 1450, 1550
    ]
  },

  {
    nameKey: 'buildings.infernoTower',
    maxLevel: 10,
    levelImages: [
      '/img/buildings/defense/inferno_tower/1.png',
      '/img/buildings/defense/inferno_tower/2.png',
      '/img/buildings/defense/inferno_tower/3.png',
      '/img/buildings/defense/inferno_tower/4.png',
      '/img/buildings/defense/inferno_tower/5.png',
      '/img/buildings/defense/inferno_tower/6.png',
      '/img/buildings/defense/inferno_tower/7.png',
      '/img/buildings/defense/inferno_tower/8.png',
      '/img/buildings/defense/inferno_tower/9.png',
      '/img/buildings/defense/inferno_tower/10.png'

    ],
    levelHps: [
      1500, 1800, 2100, 2400, 2700, 3000, 3300, 3700, 4000, 4400
    ]
  },

  {
    nameKey: 'buildings.monolith',
    maxLevel: 3,
    levelImages: [
      '/img/buildings/defense/monolith/1.png',
      '/img/buildings/defense/monolith/2.png',
      '/img/buildings/defense/monolith/3.png'
    ],
    levelHps: [
      4747, 5050, 5353
    ]
  },

  {
    nameKey: 'buildings.mortar',
    maxLevel: 16,
    levelImages: [
      '/img/buildings/defense/mortar/1.png',
      '/img/buildings/defense/mortar/2.png',
      '/img/buildings/defense/mortar/3.png',
      '/img/buildings/defense/mortar/4.png',
      '/img/buildings/defense/mortar/5.png',
      '/img/buildings/defense/mortar/6.png',
      '/img/buildings/defense/mortar/7.png',
      '/img/buildings/defense/mortar/8.png',
      '/img/buildings/defense/mortar/9.png',
      '/img/buildings/defense/mortar/10.png',
      '/img/buildings/defense/mortar/11.png',
      '/img/buildings/defense/mortar/12.png',
      '/img/buildings/defense/mortar/13.png',
      '/img/buildings/defense/mortar/14.png',
      '/img/buildings/defense/mortar/15.png',
      '/img/buildings/defense/mortar/16.png'
    ],
    levelHps: [
      400, 450, 500, 550, 600, 650, 700, 800, 950, 1100,
      1300, 1500, 1700, 1950, 2150, 2300
    ]
  },

  {
    nameKey: 'buildings.multiArcherTower',
    maxLevel: 2,
    levelImages: [
      '/img/buildings/defense/multi_archer_tower/1.png',
      '/img/buildings/defense/multi_archer_tower/2.png'
    ],
    levelHps: [
      5000, 5200
    ]
  },

  {
    nameKey: 'buildings.ricochetCannon',
    maxLevel: 2,
    levelImages: [
      '/img/buildings/defense/ricochet_cannon/1.png',
      '/img/buildings/defense/ricochet_cannon/2.png'
    ],
    levelHps: [
      5400, 5700
    ]
  },

  {
    nameKey: 'buildings.royalChampion',
    maxLevel: 45,
    levelImages: [
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png',
      '/img/heroes/royal_champion.png'
    ],
    levelHps: [
      2508, 2550, 2593, 2635, 2678, 2720, 2763, 2805, 2848, 2890,
      2933, 2975, 3018, 3060, 3103, 3145, 3188, 3230, 3273, 3315,
      3349, 3383, 3417, 3451, 3485, 3519, 3553, 3587, 3621, 3655,
      3681, 3706, 3732, 3757, 3783, 3808, 3834, 3859, 3885, 3910,
      3936, 3961, 3987, 4012, 4038
    ]
  },

  {
    nameKey: 'buildings.scattershot',
    maxLevel: 5,
    levelImages: [
      '/img/buildings/defense/scattershot/1.png',
      '/img/buildings/defense/scattershot/2.png',
      '/img/buildings/defense/scattershot/3.png',
      '/img/buildings/defense/scattershot/4.png',
      '/img/buildings/defense/scattershot/5.png'
    ],
    levelHps: [
      3600, 4200, 4800, 5100, 5410
    ]
  },

  {
    nameKey: 'buildings.spellTower',
    maxLevel: 3,
    levelImages: [
      '/img/buildings/defense/spell_tower/1.png',
      '/img/buildings/defense/spell_tower/2.png',
      '/img/buildings/defense/spell_tower/3.png'
    ],
    levelHps: [
      2500, 2800, 3100
    ]
  },

  {
    nameKey: 'buildings.wizardTower',
    maxLevel: 16,
    levelImages: [
      '/img/buildings/defense/wizard_tower/1.png',
      '/img/buildings/defense/wizard_tower/2.png',
      '/img/buildings/defense/wizard_tower/3.png',
      '/img/buildings/defense/wizard_tower/4.png',
      '/img/buildings/defense/wizard_tower/5.png',
      '/img/buildings/defense/wizard_tower/6.png',
      '/img/buildings/defense/wizard_tower/7.png',
      '/img/buildings/defense/wizard_tower/8.png',
      '/img/buildings/defense/wizard_tower/9.png',
      '/img/buildings/defense/wizard_tower/10.png',
      '/img/buildings/defense/wizard_tower/11.png',
      '/img/buildings/defense/wizard_tower/12.png',
      '/img/buildings/defense/wizard_tower/13.png',
      '/img/buildings/defense/wizard_tower/14.png',
      '/img/buildings/defense/wizard_tower/15.png',
      '/img/buildings/defense/wizard_tower/16.png'
    ],
    levelHps: [
      620, 650, 680, 730, 840, 960, 1200, 1440, 1680, 2000,
      2240, 2480, 2700, 2900, 3000, 3150
    ]
  },

  {
    nameKey: 'buildings.xbow',
    maxLevel: 11,
    levelImages: [
      '/img/buildings/defense/xbow/1.png',
      '/img/buildings/defense/xbow/2.png',
      '/img/buildings/defense/xbow/3.png',
      '/img/buildings/defense/xbow/4.png',
      '/img/buildings/defense/xbow/5.png',
      '/img/buildings/defense/xbow/6.png',
      '/img/buildings/defense/xbow/7.png',
      '/img/buildings/defense/xbow/8.png',
      '/img/buildings/defense/xbow/9.png',
      '/img/buildings/defense/xbow/10.png',
      '/img/buildings/defense/xbow/11.png'
    ],
    levelHps: [
      1500, 1900, 2300, 2700, 3100, 3400, 3700, 4000, 4200, 4400,
      4600
    ]
  },

]

const buildingLevels = ref(buildings.map(() => 1))

const getBuildingImage = (buildingIndex: number, level: number) => {
  const building = buildings[buildingIndex]
  const imageIndex = level - 1
  return building.levelImages[imageIndex] || ''
}

const getBuildingHp = (buildingIndex: number, level: number) => {
  const building = buildings[buildingIndex]
  const hpIndex = level - 1
  return building.levelHps[hpIndex] || 0
}
</script>

<template>
  <div v-for="(building, index) in buildings" :key="index" class="zapquake-item">

    <div class="zapquake-item-title">
      <div class="zapquake-item-title-image">
        <img :src="getBuildingImage(index, buildingLevels[index])" alt="">
      </div>
      <div class="zapquake-item-title-text">
        <h5 class="h5">{{ $t(building.nameKey) }}</h5>
        <div class="zapquake-item-title-details">
          <div class="zapquake-item-title-level">
            <h6 class="h6">Level {{ buildingLevels[index] }}</h6>
          </div>
          <div class="zapquake-item-title-hp">
            <nuxt-icon filled name="utility/heart" class="zapquake-item-title-heart"></nuxt-icon>
            <h6 class="h6">{{ getBuildingHp(index, buildingLevels[index]) }}</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="zapquake-item-input">
      <input class="slider-thin" type="range" :min="1" :max="building.maxLevel" v-model="buildingLevels[index]">
    </div>

    <div class="zapquake-item-combos-container">
      <div class="zapquake-item-combo">
        <div class="zapquake-item-combo-spells">

          <div class="zapquake-item-spells-zap">
            <h5 class="h5 supercell-font-ns">x3</h5>
            <div class="zapquake-item-spells-zap-image-container">
              <NuxtImg src="/img/spells/zap.png"/>
              <div class="zapquake-item-spells-zap-level">
                <h6 class="h6">9</h6>
              </div>
            </div>
          </div>

          <div class="zapquake-item-spells-earthquake">
            <h5 class="h5 supercell-font-ns">x3</h5>
            <div class="zapquake-item-spells-earthquake-image-container">
              <NuxtImg src="/img/spells/earthquake.png"/>
              <div class="zapquake-item-spells-zap-level">
                <h6 class="h6">9</h6>
              </div>
            </div>
          </div>

        </div>

        <div class="zapquake-item-combo-space">
          <nuxt-icon filled name="utility/flask" class="zapquake-item-spell-icon"></nuxt-icon>
        </div>
      </div>
    </div>

    <div class="zapquake-item-more">
      show more
    </div>
  </div>
</template>
<style scoped lang="scss">

@import "~/assets/scss/_scss-dependencies.scss";

.zapquake-item {
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  flex: 1 0 0;

  background: $primary-gradient;
  border-radius: 16px;

  .zapquake-item-title {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 16px;

    .zapquake-item-title-image img{
      width: 64px;
      height: 64px;
    }

    .zapquake-item-title-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;

      .h5 {
        font-weight: $bold;
      }
    }

    .zapquake-item-title-details {
      display: flex;
      align-items: center;
      gap: 4px;

      .zapquake-item-title-level{
        width: 8ch;
      }

      .h6 {
        font-weight: $regular;
      }
    }

    .zapquake-item-title-hp {
      display: flex;
      align-items: center;
      gap: 4px;

      .zapquake-item-title-heart {
        fill: $accent;
        width: 24px;
      }

      .h6 {
        font-weight: $regular;
      }
    }
  }

  .zapquake-item-input {
    width: 100%;
    padding: 10px 0;

    .slider-thin{
      -webkit-appearance: none;
      width: 100%;
      height: 20px;
      border-radius: 16px;
      background: $secondary;
      outline: none;
      -webkit-transition: .2s;
      transition: background .2s;
    }

    .slider-thin::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 40px;
      border-radius: 16px;
      background: $accent;
      cursor: pointer;
    }

    .slider-thin::-moz-range-thumb {
      width: 15px;
      height: 40px;
      border-radius: 16px;
      background: $accent;
      cursor: pointer;
    }
  }
}


</style>