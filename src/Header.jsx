import React from "react";
import HeaderLinks from "./HeaderLinks";

export default function Header({ fullName, jobProfile }) {
  return (
    <header>
      <h1 className="font-Oswald text-6xl tracking-wider">{fullName}</h1>
      <h2 className="font-Oswald text-4xl mt-2">{jobProfile}</h2>
      <HeaderLinks email="abduddaimarshaque007@gmail.com" phoneNumber="+91 8669842950" />
    </header>
  );
}