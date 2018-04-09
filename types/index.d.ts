type Routable = { route: () => void }

export async function router(cmds: { [key: string]: (...arg: string) => void }): Routable