"use client";

import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl mt-8 italic">
        Practice Instant English Composition
      </h1>
      <Button className="mt-8 text-xl">
        <Link href="/">Let's start learning!</Link>
      </Button>
    </div>
  );
}
