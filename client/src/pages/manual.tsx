import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { ManualStep } from "../components/ManualStep";
import { Meme } from "../components/Meme";
import { Stepper, Step } from "../components/Stepper";
import { useMemeStore } from "../store/memeStore";
import selectedOptionsStore from "../store/optionsStore";

const QUERY_CONSPIRACIES = gql`
  query {
    conspiracies {
      who {
        text
      }
      are {
        text
      }
      WorkingWith {
        text
      }
      todo {
        text
      }
    }
  }
`;

const QUERY_MANUAL = gql`
  query {
    manual(who: 3, are: 2, workingWith: 2, todo: 2) {
      text
      image
    }
  }
`;

export default function ManualPage() {
  const [steps, setSteps] = useState<Step[]>();
  const { setMeme } = useMemeStore((state) => state);
  const { selectedOptions, isStepDone } = selectedOptionsStore(
    (state) => state
  );
  const { data: conspiracies, loading, error } = useQuery(QUERY_CONSPIRACIES);
  const [getManual, { loading: loadingManual, data }] =
    useLazyQuery(QUERY_MANUAL);

  function stepNameFactory(step: string) {
    switch (step) {
      case "who":
        return "Quem";
      case "are":
        return "Esta";
      case "workingWith":
        return "Com";
      case "todo":
        return "Para quê?";
      default:
        return "";
    }
  }

  // useEffect(() => {
  //   setSteps((curr) => {
  //     console.log(conspiracies);
  //     if (conspiracies.conspiracies)
  //       return Object.keys(conspiracies.conspiracies!).map((c, index) => {
  //         const stepName = stepNameFactory(c);
  //         return {
  //           label: stepName,
  //           index: index,
  //           isActive: index === 0,
  //           isDone: false,
  //           content: (
  //             <ManualStep
  //               step={{
  //                 label: stepName,
  //                 items: getStepItems(index),
  //               }}
  //             />
  //           ),
  //         };
  //       });
  //   });
  // }, [conspiracies]);

  function getStepItems(index: number): string[] {
    if (conspiracies.conspiracies) {
      const conspiracyValue = Object.values(conspiracies.conspiracies);
      const activeConspiracies = conspiracyValue[index]!;
      return activeConspiracies?.map((w) =>
        typeof w === "string" ? w : w.text
      );
    } else return [];
  }

  const resultStep: Step = {
    isActive: false,
    isDone: false,
    label: "Resultado",
    content: <Meme />,
  };

  function getMeme() {
    getManual({
      onCompleted(data) {
        setMeme(data.random.image);
      },
      variables: {
        who: selectedOptions.find((op) => op.label === "Quem")!.value,
        are: selectedOptions.find((op) => op.label === "Esta")!.value,
        workingWith: selectedOptions.find((op) => op.label === "Esta")!.value,
        todo: selectedOptions.find((op) => op.label === "Para quê?")!.value,
      },
    });
  }

  return (
    <>
      {loading && <ReactLoading />}
      {steps && <Stepper steps={[...steps, resultStep]} />}
      {isStepDone() && (
        <button className="btn btn-success w-full" onClick={(e) => getMeme()}>
          Gerar
        </button>
      )}
    </>
  );
}
