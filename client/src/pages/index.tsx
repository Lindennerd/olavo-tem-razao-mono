import { Meme } from "../components/Meme";
import { useConspiracy } from "../hooks/useConspiracy";

export default function Home() {
  const { random } = useConspiracy();
  const { data, loading, error, refetch } = random();

  return (
    <>
      <div className="p-4 border rounded-md shadow-lg w-full">
        {error && <div>{error.message}</div>}
        {data && <Meme img={data.random.image} />}
      </div>
      <button
        className={`btn w-full ${loading && "loading"}`}
        onClick={(e) => refetch()}
      >
        Gerar
      </button>
    </>
  );
}
