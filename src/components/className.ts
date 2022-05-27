export const CN = (baseClassName = '', conditions: [a: string, b: boolean][]) => [baseClassName, ...conditions.filter((c) => c[1]).map((x) => x[0])].join(' ').trim();
