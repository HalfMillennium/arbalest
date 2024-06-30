function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomData() {
  return [
    {
      x: "plane",
      y: getRandomInt(20, 250),
    },
    {
      x: "helicopter",
      y: getRandomInt(20, 250),
    },
    {
      x: "boat",
      y: getRandomInt(20, 250),
    },
    {
      x: "train",
      y: getRandomInt(20, 250),
    },
    {
      x: "subway",
      y: getRandomInt(20, 250),
    },
    {
      x: "bus",
      y: getRandomInt(20, 250),
    },
    {
      x: "car",
      y: getRandomInt(20, 250),
    },
    {
      x: "moto",
      y: getRandomInt(20, 250),
    },
    {
      x: "bicycle",
      y: getRandomInt(20, 250),
    },
    {
      x: "horse",
      y: getRandomInt(20, 250),
    },
    {
      x: "skateboard",
      y: getRandomInt(20, 250),
    },
    {
      x: "others",
      y: getRandomInt(20, 250),
    },
  ];
}

export function generateExampleData() {
  return [
    {
      id: "japan",
      color: "hsl(226, 70%, 50%)",
      data: getRandomData(),
    },
    {
      id: "france",
      color: "hsl(358, 70%, 50%)",
      data: getRandomData(),
    },
    {
      id: "us",
      color: "hsl(42, 70%, 50%)",
      data: getRandomData(),
    },
    {
      id: "germany",
      color: "hsl(110, 70%, 50%)",
      data: getRandomData(),
    },
    {
      id: "norway",
      color: "hsl(149, 70%, 50%)",
      data: getRandomData(),
    },
  ];
}
