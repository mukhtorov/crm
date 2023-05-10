import id from "../hooks/useIdGen";

export const navbar = [
  {
    id: id(),
    title: "Statistika",
    path: "/statistika",
    hidden: false,
    children: [],
  },
  { id: id(), title: "Lidlar", path: "/lids", hidden: false, children: [] },
  { id: id(), title: "Moliya", path: "/moliya", hidden: false, children: [] },
  { id: id(), title: "Talaba", path: "/talaba", hidden: false, children: [] },
  {
    id: id(),
    title: "Guruhlar",
    path: "/guruhlar",
    hidden: false,
    children: [],
  },
  { id: id(), title: "Kurslar", path: "/kurslar", hidden: false, children: [] },
  { id: id(), title: "HR", path: "/hr", hidden: false, children: [] },
  {
    id: id(),
    title: "Sozlamalar",
    path: "/sozlamalar",
    hidden: false,
    children: [],
  },
  { id: id(), title: `Signin`, path: "/signin", hidden: true },
  { id: id(), title: "Signup", path: "/signup", hidden: true },
];
