export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T['addEventListener']>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | [string, (args: any) => any | null, ...any[]]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>)
    )
  }
}
