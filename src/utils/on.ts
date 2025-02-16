export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["addEventListener"]>
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    | [string, (args: any) => any | null, ...any[]]
): void {
  if (obj?.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>),
    );
  }
}
