import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) return null;

    const invalidWords = words
      .map((word: string) => (control.value.includes(word) ? word : null))
      .filter((word: string) => word !== null);

    return invalidWords && invalidWords.length
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
