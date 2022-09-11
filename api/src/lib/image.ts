import Jimp from "jimp";
import { serverPath } from "../server-path";

export const image = async (text: string) => {
  const image = await Jimp.read(serverPath("/assets/olavo-post.jpg"));
  const loadedFont = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);
  const imgUrl = await printedImage.getBase64Async("image/jpeg");

  return imgUrl;
};
