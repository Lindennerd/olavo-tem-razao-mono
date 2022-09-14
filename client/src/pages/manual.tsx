import ReactLoading from "react-loading";
import { ManualStep } from "../components/ManualStep";
import { Meme } from "../components/Meme";
import { Stepper } from "../components/Stepper";
import { useManualMeme } from "../hooks/useManualMeme";
import { usePhrases } from "../hooks/usePhrases";
import selectedOptionsStore from "../store/optionsStore";

export default function ManualPage() {
  const { getPhrases } = usePhrases();

  const { selectedOptions, isStepDone } = selectedOptionsStore(
    (state) => state
  );

  const { data, loading, error } = getPhrases();
  const [
    getManual,
    { loading: loadingManual, error: errorManual, data: meme },
  ] = useManualMeme();

  function getMeme() {
    const vars = {
      who: selectedOptions.find((op) => op.label === "who")!.value,
      are: selectedOptions.find((op) => op.label === "are")!.value,
      workingWith: selectedOptions.find((op) => op.label === "workingWith")!
        .value,
      todo: selectedOptions.find((op) => op.label === "todo")!.value,
    };
    getManual({ variables: vars });
  }

  return (
    <>
      <div>
        {loading && <ReactLoading />}
        {data && (
          <Stepper
            steps={[
              {
                label: "Quem",
                isActive: true,
                content: (
                  <ManualStep items={data.conspiracies.who} label="who" />
                ),
                isDone: false,
              },
              {
                label: "Esta",
                isActive: false,
                content: (
                  <ManualStep items={data.conspiracies.are} label="are" />
                ),
                isDone: false,
              },
              {
                label: "Com",
                isActive: false,
                isDone: false,
                content: (
                  <ManualStep
                    items={data.conspiracies.workingWith}
                    label="workingWith"
                  />
                ),
              },
              {
                label: "Para",
                isActive: false,
                content: (
                  <ManualStep items={data.conspiracies.todo} label="todo" />
                ),
                isDone: false,
              },
            ]}
          />
        )}
        {meme && <Meme img={meme.manual.image} />}
      </div>

      {isStepDone() && (
        <button
          className={`btn btn-success w-full ${loadingManual && "loading"}`}
          onClick={(e) => getMeme()}
        >
          Gerar
        </button>
      )}
    </>
  );
}
