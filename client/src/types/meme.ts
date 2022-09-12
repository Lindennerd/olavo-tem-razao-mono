export interface Meme {
  image: string;
  text?: string;
}

export interface Random {
  meme: Meme;
}
