import React from "react";

export async function GetData(productLink : string) {
  const res = await fetch(productLink);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
