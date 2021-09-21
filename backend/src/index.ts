const earth = 'world';

export function hello(world: string = earth): string {
  return `Hello ${world}!! `;
}