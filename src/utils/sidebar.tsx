import id from "../hooks/useIdGen";

// icons
import { ReactComponent as AnalitcsIcon } from "../assets/icons/analytics.svg";
import { ReactComponent as Lid } from "../assets/icons/lid.svg";
import { ReactComponent as Finance } from "../assets/icons/finance.svg";
import { ReactComponent as Student } from "../assets/icons/student.svg";
import { ReactComponent as Group } from "../assets/icons/group.svg";
import { ReactComponent as Course } from "../assets/icons/course.svg";
import { ReactComponent as Hr } from "../assets/icons/hr.svg";
import { ReactComponent as Setting } from "../assets/icons/setting.svg";

// components
import Generics from "../components/Generics";
import Analitics from "../pages/Analitcs";

const { generate } = id();

export const sidebar = [
  {
    id: generate.next().value,
    title: "Statistika",
    path: "/statistika",
    hidden: false,
    icon: <AnalitcsIcon className="icon" />,
    element: <Analitics />,
  },
  {
    id: generate.next().value,
    title: "Lidlar",
    path: "/lids",
    hidden: false,
    children: [],
    icon: <Lid className="icon" />,
    element: <Generics />,
  },
  {
    id: generate.next().value,
    title: "Moliya",
    path: "/moliya",
    hidden: false,
    children: [],
    icon: <Finance className="icon" />,
    element: <Generics />,
  },
  {
    id: generate.next().value,
    title: "Talaba",
    path: "/talaba",
    hidden: false,
    children: [],
    icon: <Student className="icon" />,
    element: <Generics />,
  },
  {
    id: generate.next().value,
    title: "Guruhlar",
    path: "/guruhlar",
    hidden: false,
    children: [],
    icon: <Group className="icon" />,
    element: <Generics />,
  },
  {
    id: generate.next().value,
    title: "Kurslar",
    path: "/kurslar",
    hidden: false,
    children: [
      {
        id: generate.next().value,
        title: "Kurslar ro'yhati",
        path: "/kurslar-royhati",
        hidden: false,
        element: <Generics />,
      },
      {
        id: generate.next().value,
        title: "Kurslar yo'nalishi",
        path: "/kurslar-yonalishi",
        hidden: false,
        element: <Generics />,
      },
    ],
    icon: <Course className="icon" />,
    element: <Generics />,
  },
  {
    id: generate.next().value,
    title: "HR",
    path: "/hr",
    hidden: false,
    children: [],
    icon: <Hr className="icon" />,
    element: <Generics />,
  },
  {
    id: generate.next().value,
    title: "Sozlamalar",
    path: "/sozlamalar",
    hidden: false,
    children: [
      {
        id: generate.next().value,
        title: "Umumiy sozlamalar",
        path: "/umumiy-sozlamalar",
        hidden: false,
        element: <Generics />,
      },
      {
        id: generate.next().value,
        title: "Manager",
        path: "/manager",
        hidden: false,
        element: <Generics />,
      },
      {
        id: generate.next().value,
        title: "O'qituvchi",
        path: "/oqtuvchi",
        hidden: false,
        element: <Generics />,
      },
      {
        id: generate.next().value,
        title: "Talaba",
        path: "/talaba",
        hidden: false,
        element: <Generics />,
      },
    ],
    icon: <Setting className="icon" />,
    element: <Generics />,
  },
  { id: generate.next().value, title: `Signin`, path: "/signin", hidden: true },
  { id: generate.next().value, title: "Signup", path: "/signup", hidden: true },
];
