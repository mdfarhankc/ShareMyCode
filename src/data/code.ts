export const SAMPLE_CODE = `function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 10 fibonacci numbers
const results = Array.from({ length: 10 }, (_, i) =>
  fibonacci(i)
);

console.log(results);`;
export const SAMPLE_TITLE = "fibonacci.ts";