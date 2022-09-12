import { gql, useQuery } from "@apollo/client";
import ReactLoading from "react-loading";
import { Meme } from "../components/Meme";
import { useRandomConspiracy } from "../hooks/useRandomConspiracy";
import { useMemeStore } from "../store/memeStore";

const QUERY = gql`
  query {
    random {
      image
    }
  }
`;

export default function Home() {
  const { setMeme } = useMemeStore((state) => state);
  const { data, loading, error, refetch } = useRandomConspiracy();

  if (data) console.log(data);

  return (
    <>
      <div className="p-4 border rounded-md shadow-lg w-full">
        {loading && <ReactLoading />}
        {/* {data && data.data.toString()} */}
        <Meme />
      </div>
      <button className="btn w-full" onClick={(e) => refetch()}>
        Gerar
      </button>
    </>
  );
}
