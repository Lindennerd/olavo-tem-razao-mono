export interface Random {
  image: string;
  text?: string;
}

export interface Meme {
  random: Random;
}

export interface Conspiracies {
  conspiracies: {
    who: string[];
    are: string[];
    workingWith: string[];
    todo: string[];
  };
}

export interface Manual {
  manual: {
    image: string;
    text: string;
  };
}
