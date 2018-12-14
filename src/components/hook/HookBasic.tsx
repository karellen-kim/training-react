import React from 'react';
import useFormInput from "./useFormInput"
import {getItem} from "./getItem"

export default function HookBasic() {
  const name = useFormInput("name");
  const email = useFormInput("email");
  const [item, isLoading] = getItem(1);

  return <>
    <input {...name} />
    <input {...email} />
    { isLoading ? "Loading..."  : item }
  </>
}
