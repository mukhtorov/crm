import id from "../hooks/useIdGen";
import { ReactComponent as Analitcs } from "../assets/icons/analytics.svg";
import { ReactComponent as Lid } from "../assets/icons/lid.svg";
import { ReactComponent as Finance } from "../assets/icons/finance.svg";
import { ReactComponent as Student } from "../assets/icons/student.svg";
import { ReactComponent as Group } from "../assets/icons/group.svg";
import { ReactComponent as Course } from "../assets/icons/course.svg";
import { ReactComponent as Hr } from "../assets/icons/hr.svg";
import { ReactComponent as Setting } from "../assets/icons/setting.svg";

const { generate } = id();

export const sidebar = [
  {
    id: generate.next().value,
    title: "Statistika",
    path: "/statistika",
    hidden: false,
    children: [],
    icon: <Analitcs className="icon" />,
  },
  {
    id: generate.next().value,
    title: "Lidlar",
    path: "/lids",
    hidden: false,
    children: [],
    icon: <Lid className="icon" />,
  },
  {
    id: generate.next().value,
    title: "Moliya",
    path: "/moliya",
    hidden: false,
    children: [],
    icon: <Finance className="icon" />,
  },
  {
    id: generate.next().value,
    title: "Talaba",
    path: "/talaba",
    hidden: false,
    children: [],
    icon: <Student className="icon" />,
  },
  {
    id: generate.next().value,
    title: "Guruhlar",
    path: "/guruhlar",
    hidden: false,
    children: [],
    icon: <Group className="icon" />,
  },
  {
    id: generate.next().value,
    title: "Kurslar",
    path: "/kurslar",
    hidden: false,
    children: [],
    icon: <Course className="icon" />,
  },
  {
    id: generate.next().value,
    title: "HR",
    path: "/hr",
    hidden: false,
    children: [],
    icon: <Hr className="icon" />,
  },
  {
    id: generate.next().value,
    title: "Sozlamalar",
    path: "/sozlamalar",
    hidden: false,
    children: [],
    icon: <Setting className="icon" />,
  },
  { id: generate.next().value, title: `Signin`, path: "/signin", hidden: true },
  { id: generate.next().value, title: "Signup", path: "/signup", hidden: true },
];
