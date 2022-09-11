import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import ReactLoading from "react-loading";
import client from "../apollo-client";

const QUERY = gql`
  query {
    random {
      text
    }
  }
`;

export default function Home({ conspiracy }: { conspiracy: string }) {
  const { data, loading, error, refetch } = useQuery(QUERY);

  return (
    <>
      <div className="p-4 border rounded-md shadow-lg w-full">
        {/* {isLoading && <ReactLoading />} */}
        {/* <Meme /> */}
        {data && data.random.text}
      </div>
      <button className="btn w-full" onClick={(e) => refetch()}>
        Gerar
      </button>
    </>
  );
}

// export async function getStaticProps() {
//   const { data: conspiracy, error } = await client.query({
//     query: gql`
//       query {
//         random {
//           text
//         }
//       }
//     `,
//   });

//   console.log("result", conspiracy);
//   if (error) console.log("error ========>", error.message);

//   return {
//     props: {
//       conspiracy: conspiracy.random.text,
//     },
//   };
// }
