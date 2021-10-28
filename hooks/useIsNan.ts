import { useState } from "react";

export default function useIsNan(initialValue: string = "0") {
  const [value, setValue] = useState(initialValue);

  async function dispatch(value: string) {
    // console.log("GAGO", value);
    if (value === "NaN" || value === "") setValue("0");
    else if (value.charAt(0) === "0") setValue(value.substring(1));
    else setValue(value);
  }

  return [value, dispatch] as const;
}
