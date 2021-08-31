export const Logger = {
  info: (...args: unknown[]): void => {
    args.forEach((arg) => {
      console.info(arg)
    })
  },
  debug: (...args: unknown[]): void => {
    args.forEach((arg) => {
      console.debug(arg)
    })
  },
  error: (error: Error | string = ''): void => {
    console.error(error)
  }
}
