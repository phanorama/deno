function plus(
  x: number | string | undefined,
  y: number | string | undefined,
): number | string | undefined {
  return x === undefined || y === undefined
    ? undefined
    : typeof x === typeof y
    ? (x as any) + (y as any)
    : undefined;
}

console.log(plus(2025, 1));
console.log(plus(undefined, 21));
console.log(plus("StackUp", "Learn"));
