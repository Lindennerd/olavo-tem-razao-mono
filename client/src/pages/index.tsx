import { Meme } from "../components/Meme";
import { useRandomMeme } from "../hooks/useRandomMeme";

export default function Home() {
  const { data, loading, error, refetch } = useRandomMeme();

  return (
    <>
      <div>
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
