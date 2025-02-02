"use client";

import { useState } from "react";

export default function RandomImage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>("https://picsum.photos/800");

  const refreshImage = (): void => {
    setImageUrl(`https://picsum.photos/800?t=${Date.now()}`);
  };
}
