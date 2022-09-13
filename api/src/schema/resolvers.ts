import { image } from "../lib/image";
import {
  TodoList,
  WorkingWithList,
  areList,
  WhoList,
} from "../lib/conspiracies";
import OlavosMind from "../lib/olavosMind";

interface IManual {
  who: number;
  are: number;
  workingWith: number;
  todo: number;
}

export const resolvers = {
  Query: {
    conspiracies: () => {
      return {
        who: WhoList().map((t) => t.text),
        are: areList().map((t) => t.text),
        workingWith: WorkingWithList().map((t) => t.text),
        todo: TodoList().map((t) => t.text),
      };
    },

    random: () => {
      const olavosMind = OlavosMind();
      const text = olavosMind.generateTheory();
      return { image: image(text), text };
    },

    manual: (_: any, { who, are, workingWith, todo }: IManual) => {
      const olavosMind = OlavosMind();
      const text = olavosMind.generateTheory(who, are, workingWith, todo);
      return { image: image(text), text };
    },
  },
};
