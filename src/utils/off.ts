export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    | [string, (args: any) => any | null, ...any[]]
): void {
  if (obj?.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>),
    );
  }
}
