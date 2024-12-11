function createXmasTree(height: number, ornament: string): string {
  /* Code here */
  const underscore: string = "_";
  const root: string = "#";
  const rootHeight: number = 2;
  const result: string[] = [];
  let count: number = 0;
  for (let i = 1; i <= height; i++) {
    result.push(
      underscore.repeat(height - i) +
        ornament.repeat(i > 1 ? i + count : i) +
        underscore.repeat(height - i)
    );
    count++;
  }
  for (let i = 0; i < rootHeight; i++) {
    result.push(
      underscore.repeat(height - 1) + root + underscore.repeat(height - 1)
    );
  }

  return result.join("\n").trim();
}
