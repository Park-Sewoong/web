function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number) {
  if (c) {
    return a + b * c;
  }

  return a + b;
}

export { add };