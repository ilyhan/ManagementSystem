
export const clsx = (...args: unknown[]): string => {
    return args.filter((item) => typeof item === 'string').join(' ');
}