import React, {useState} from "react";
import useFormInput from "./useFormInput"

export default function hookExample() {
  const name = useFormInput("name");
  const tel = useFormInput("tel");
  const apiOne =

  return <div>
    <input {...name} />
    <input {...tel} />
  </div>
}