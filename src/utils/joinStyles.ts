export const joinStyles = (originalStyles: string, newStyles: string) => {
  //既存のスタイルと新しいスタイルを結合する
  return `${originalStyles}; ${newStyles};`.trim();
};
