import Image from "next/image";
import { useMemeStore } from "../store/memeStore";

export function Meme({ img }: { img: string }) {
  return (
    <div className="flex justify-center items-center">
      {img && (
        <Image src={img} alt="Teoria do Olavão" width={700} height={300} />
      )}
    </div>
  );
}
