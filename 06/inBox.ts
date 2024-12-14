function inBox(box: string[]): boolean {
  const insideOfBox = box.slice(1, box.length - 1);
  if (!insideOfBox.join("").includes("*")) {
    return false;
  }
  let result = false;
  insideOfBox.forEach((item) => {
    if (item.slice(1, item.length - 1).includes("*")) {
      result = true;
    }
  });
  return result;
}

console.log(inBox(["###", "#*#", "###"])); // ➞ true

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
