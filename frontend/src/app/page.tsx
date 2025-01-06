"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl mt-8 italic">
        Practice Instant English Composition
      </h1>
      <Button className="mt-8 text-xl" onClick={() => router.push("/quiz")}>
        {"Let's start learning!"}
      </Button>
    </div>
  );
}
