export function modelCreator<T>(defaultValue: T) {
  return (initializer: Partial<T> = {}): T => {
    return {
      ...defaultValue,
      ...initializer,
    };
  };
}

export function sortedClassNames(element: Element): string[] {
  return element.className.split(' ').sort();
}
