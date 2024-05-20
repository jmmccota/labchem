/**
 * Try to match css property to check dark mode
 * @returns boolean for dark mode
 */
export function isDarkMode(): boolean {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
}
