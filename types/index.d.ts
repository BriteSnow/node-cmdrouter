type Routable = { route: () => void }

export function router(cmds: { [key: string]: (...args: string[]) => void }): Routable