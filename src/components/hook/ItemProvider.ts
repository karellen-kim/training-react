import {useEffect, useState} from "react";

function itemOne(id) {
  const [item, setItem] = useState(null);

  useEffect(() =>

  );

  const isLoading = (item == null);
  return [item, isLoading];
}