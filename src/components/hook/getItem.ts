import {useEffect, useState} from "react";

export function getItem(id: number) {
  const [item, setItem] = useState(null);

  const getItem = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Received");
      }, 1000) })
      .then((response) => {
        setItem(response)
      });
  };

  useEffect(getItem, []);

  const isLoading = (item == null);
  return [item, isLoading];
}
