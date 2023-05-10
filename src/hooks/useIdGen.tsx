import { useId } from "react";

export const useIdGenerator = () => {
  const id = useId();

  return id;
};

export default useIdGenerator;
