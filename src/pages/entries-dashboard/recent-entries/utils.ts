/**
 * The Entry list in the Entry editor will contain information about the next 5 dispatches.
 *
 * Each successive card (each successive dispatch displayed, corresponding to increasingly distant dates) will
 * have a decreasing opacity (purely for style).
 *
 * Due to some strange behavior involving string interpolation with classNames, each of the 5 slightly distinct styles
 * has been separated and placed here for ease of use in RecentEntryList.tsx
 */
export const ENTRY_ITEM_STYLES = [
  "bg-black text-white bg-gradient-to-br from-sky-600 to-blue-300 w-full h-full p-2 rounded-md",
  "bg-black text-white bg-gradient-to-br from-sky-600/85 to-blue-300/85 w-full h-full p-2 rounded-md",
  "bg-black text-white bg-gradient-to-br from-sky-600/75 to-blue-300/75 w-full h-full p-2 rounded-md",
  "bg-black text-white/50 bg-gradient-to-br from-sky-600/50 to-blue-300/50 w-full h-full p-2 rounded-md",
  "bg-black text-white/85 bg-gradient-to-br from-sky-600/25 to-blue-300/25 w-full h-full p-2 rounded-md",
];
