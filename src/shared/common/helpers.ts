export const capitalizeWord = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export function stringAvatar(firstName: string, lastName: string): string {
  return `${firstName[0]}${lastName[0]}`;
}
