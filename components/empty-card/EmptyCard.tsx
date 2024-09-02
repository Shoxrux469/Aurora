"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const EmptyCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center h-80  justify-center text-center place-content-center">
      <h2 className="mb-2 text-2xl text-zinc-900 font-medium">{title}</h2>

      <p className="mb-4 text-zinc-700 text-balance w-2/3">{description}</p>

      <Button
        variant="purple"
        className="w-fit"
        onClick={() => router.push("/")}
      >
        На главную
      </Button>
    </div>
  );
};

export default EmptyCard;
