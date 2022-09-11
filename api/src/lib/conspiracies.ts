export enum Gender {
  Male = "M",
  Female = "F",
}

export type Who = {
  text: string;
  gender: Gender;
  isPlural: boolean;
};

export type WorkingWith = {
  text: string;
  gender: Gender;
};

export function WhoList(): Who[] {
  return [
    {
      text: "O Lula",
      gender: Gender.Male,
      isPlural: false,
    },
    {
      text: "A esquerda",
      gender: Gender.Female,
      isPlural: false,
    },
    {
      text: "Os Sindicatos",
      gender: Gender.Male,
      isPlural: true,
    },
    {
      text: "O PT",
      gender: Gender.Male,
      isPlural: false,
    },
    {
      text: "O Governo",
      gender: Gender.Male,
      isPlural: false,
    },
    {
      text: "A extrema-esquerda",
      gender: Gender.Female,
      isPlural: false,
    },
    {
      text: "Os movimentos sociais",
      gender: Gender.Male,
      isPlural: true,
    },
    {
      text: "O PSOL",
      gender: Gender.Male,
      isPlural: false,
    },
    {
      text: "Os black-blocs",
      gender: Gender.Male,
      isPlural: true,
    },
    {
      text: "Os imigrantes",
      gender: Gender.Male,
      isPlural: true,
    },
  ];
}

export function areList() {
  return [
    { text: "trabalha(m) com as/os" },
    { text: "é/são financiado(s) pelos(as)" },
    { text: "conspira(m) com as/os" },
    { text: "doa(m) dinheiro às(aos)" },
    { text: "está(ão) aos serviços das(os)" },
    { text: "é/são um complô das(os)" },
    { text: "apoia(m) as/os" },
    { text: "é/são fachada das(os)" },
  ];
}

export function WorkingWithList(): WorkingWith[] {
  return [
    {
      text: "chineses",
      gender: Gender.Male,
    },
    {
      text: "maçons",
      gender: Gender.Male,
    },
    {
      text: "globalistas",
      gender: Gender.Male,
    },
    {
      text: "transexuais",
      gender: Gender.Male,
    },
    {
      text: "muçulmanos",
      gender: Gender.Male,
    },
    {
      text: "comunistas",
      gender: Gender.Male,
    },
    {
      text: "feministas",
      gender: Gender.Female,
    },
    {
      text: "cubanos",
      gender: Gender.Male,
    },
    {
      text: "illuminatis",
      gender: Gender.Male,
    },
    {
      text: "judeus",
      gender: Gender.Male,
    },
  ];
}

export function TodoList() {
  return [
    { text: "para desmaculinizar o Brasil" },
    { text: "para ensinar ideologia de gênero às nossas crianças" },
    { text: "para implantar a ditadura gayzista" },
    { text: "para acabar com os valores judaico-cristãos" },
    { text: "para instaurar a xaria" },
    { text: "para liberar a pedofilia" },
    { text: "para que todas mulheres abortem" },
    { text: "para entregar a soberania do país às elites globais" },
    { text: "para implantar o politicamente correto e nos censurar" },
    { text: "para doutrinar nossas crianças com o marxismo cultural" },
  ];
}
