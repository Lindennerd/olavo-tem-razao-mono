import path from "path";

export const serverPath = (staticFilePath: string) => {
  return path.join(__dirname, staticFilePath);
};
