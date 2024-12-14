type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const left: number[] = [];
  const right: number[] = [];
  const result: number[] = [];

  shoes.forEach((shoe: Shoe) =>
    shoe.type === "I" ? left.push(shoe.size) : right.push(shoe.size)
  );

  for (let i = 0; i <= right.length; i++) {
    left.forEach((l) => {
      if (right[i] === l) {
        result.push(right[i]);
        i++;
      }
    });
  }
  return result;
}

const shoes: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
