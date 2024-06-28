function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateExampleData() {
  return [
    {
      country: "AD",
      "hot dog": getRandomInt(50, 200),
      "hot dogColor": "hsl(138, 70%, 50%)",
      burger: getRandomInt(50, 200),
      burgerColor: "hsl(66, 70%, 50%)",
      sandwich: getRandomInt(50, 200),
      sandwichColor: "hsl(8, 70%, 50%)",
      kebab: getRandomInt(50, 200),
      kebabColor: "hsl(133, 70%, 50%)",
      fries: getRandomInt(50, 200),
      friesColor: "hsl(210, 70%, 50%)",
      donut: getRandomInt(50, 200),
      donutColor: "hsl(32, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": getRandomInt(50, 200),
      "hot dogColor": "hsl(235, 70%, 50%)",
      burger: getRandomInt(50, 200),
      burgerColor: "hsl(87, 70%, 50%)",
      sandwich: getRandomInt(50, 200),
      sandwichColor: "hsl(281, 70%, 50%)",
      kebab: getRandomInt(50, 200),
      kebabColor: "hsl(207, 70%, 50%)",
      fries: getRandomInt(50, 200),
      friesColor: "hsl(127, 70%, 50%)",
      donut: getRandomInt(50, 200),
      donutColor: "hsl(16, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": getRandomInt(50, 200),
      "hot dogColor": "hsl(197, 70%, 50%)",
      burger: getRandomInt(50, 200),
      burgerColor: "hsl(346, 70%, 50%)",
      sandwich: getRandomInt(50, 200),
      sandwichColor: "hsl(210, 70%, 50%)",
      kebab: getRandomInt(50, 200),
      kebabColor: "hsl(18, 70%, 50%)",
      fries: getRandomInt(50, 200),
      friesColor: "hsl(210, 70%, 50%)",
      donut: getRandomInt(50, 200),
      donutColor: "hsl(32, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": getRandomInt(50, 200),
      "hot dogColor": "hsl(172, 70%, 50%)",
      burger: getRandomInt(50, 200),
      burgerColor: "hsl(83, 70%, 50%)",
      sandwich: getRandomInt(50, 200),
      sandwichColor: "hsl(293, 70%, 50%)",
      kebab: getRandomInt(50, 200),
      kebabColor: "hsl(300, 70%, 50%)",
      fries: getRandomInt(50, 200),
      friesColor: "hsl(168, 70%, 50%)",
      donut: getRandomInt(50, 200),
      donutColor: "hsl(155, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": getRandomInt(50, 200),
      "hot dogColor": "hsl(166, 70%, 50%)",
      burger: getRandomInt(50, 200),
      burgerColor: "hsl(126, 70%, 50%)",
      sandwich: getRandomInt(50, 200),
      sandwichColor: "hsl(349, 70%, 50%)",
      kebab: getRandomInt(50, 200),
      kebabColor: "hsl(144, 70%, 50%)",
      fries: getRandomInt(50, 200),
      friesColor: "hsl(168, 70%, 50%)",
      donut: getRandomInt(50, 200),
      donutColor: "hsl(155, 70%, 50%)",
    },
    {
      country: "AL", // Next country code
      "hot dog": getRandomInt(50, 200),
      "hot dogColor": "hsl(197, 70%, 50%)", // Adjust the color values as needed
      burger: getRandomInt(50, 200),
      burgerColor: "hsl(346, 70%, 50%)",
      sandwich: getRandomInt(50, 200),
      sandwichColor: "hsl(210, 70%, 50%)",
      kebab: getRandomInt(50, 200),
      kebabColor: "hsl(18, 70%, 50%)",
      fries: getRandomInt(50, 200),
      friesColor: "hsl(210, 70%, 50%)",
      donut: getRandomInt(50, 200),
      donutColor: "hsl(32, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": getRandomInt(50, 200),
      "hot dogColor": "hsl(155, 70%, 50%)",
      burger: getRandomInt(50, 200),
      burgerColor: "hsl(257, 70%, 50%)",
      sandwich: getRandomInt(50, 200),
      sandwichColor: "hsl(252, 70%, 50%)",
      kebab: getRandomInt(50, 200),
      kebabColor: "hsl(144, 70%, 50%)",
      fries: getRandomInt(50, 200),
      friesColor: "hsl(142, 70%, 50%)",
      donut: getRandomInt(50, 200),
      donutColor: "hsl(304, 70%, 50%)",
    },
  ];
}
