import Image from "next/image";
import { useMemeStore } from "../store/memeStore";

export function Meme({ img }: { img: string }) {
  return (
    <div className="flex justify-center items-center mt-2 p-4 border rounded-md shadow-lg w-full">
      {img && (
        <Image src={img} alt="Teoria do Olavão" width={700} height={300} />
      )}
    </div>
  );
}
