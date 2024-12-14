function fixPackages(packages: string): string {
  // Code here
  const startParentIndex = packages.lastIndexOf("(");
  const endParentIndex = packages.indexOf(")", startParentIndex);

  if (startParentIndex === -1 || endParentIndex === -1) {
    return packages;
  }

  const before = packages.slice(0, startParentIndex);
  const inside = packages.slice(startParentIndex + 1, endParentIndex);
  const after = packages.slice(endParentIndex + 1);

  return fixPackages(
    before + inside.split("").reverse().join("") + after
  ).trim();
}
