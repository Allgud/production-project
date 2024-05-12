type Mod = Record<string, boolean | string>

export const classNames = (cls: string, additional: string[] = [], mods: Mod = {} ): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}