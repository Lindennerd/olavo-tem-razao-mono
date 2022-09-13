import { BiCheck } from "react-icons/bi";
import selectedOptionsStore from "../store/optionsStore";

interface ManualStep {
  label: string;
  items: string[];
}

export function ManualStep(props: ManualStep) {
  const { addSelected, getSelected, isStepDone } = selectedOptionsStore(
    (state) => state
  );

  return (
    <>
      <div>
        {props.items.map((item, index) => (
          <div
            key={index}
            onClick={(e) => addSelected({ label: props.label, value: index })}
            className={`p-1 border rounded-md mb-1 hover:bg-base-200 cursor-pointer ${
              getSelected(props.label) === index && "bg-base-200"
            }`}
          >
            <span className="flex gap-3 items-center">
              {getSelected(props.label) === index && (
                <BiCheck className="text-xl p-0 rounded-full bg-blue-500 text-white" />
              )}
              {item}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
