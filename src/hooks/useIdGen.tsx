// import { useId } from "react";

// export const useIdGenerator = () => {
//   const id = useId();

//   return id;
// };

// export default useIdGenerator;

export const generateID = () => {
  function* genID() {
    let i = 0;
    while (1) {
      yield i++;
    }
  }

  const generate = genID();
  return { generate };
};

export default generateID;
