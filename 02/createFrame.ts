function createFrame(names: string[]): string {
  // Code here
  const asterisk = "*";
  const width = [...names].sort((a, b) => b.length - a.length)[0].length;

  const frame = names.reduce((acc, cur) => {
    const spaces = " ".repeat(width - cur.length);
    acc += `${asterisk} ${cur}${spaces} ${asterisk}\n`;
    return acc;
  }, "");

  const line = asterisk.repeat(width + 4);

  return `${line}\n${frame}${line}`;
}
