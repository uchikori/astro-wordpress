export const replaceUrls = (content: string, replacementUrl: string) => {
  //contentの中に含まれるPUBLIC_WP_URL文字列をreplacementUrlに置き換える
  return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl);
};
