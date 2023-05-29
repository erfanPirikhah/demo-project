import { AiOutlineHome } from "react-icons/ai";
import { BiDrink } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Form_One from "../forms/Form_One";
import Form_Two from "../forms/Form_Two";
import Report from "../Report/Report";

export const sideBars = [
  {
    id: 1,
    name: "صفحه اصلی",
    icon: <AiOutlineHome className="text-lg text-gray-500" />,
    sub: [
      {
        id: 1,
        name: "زیر مجموعه یک",
        component: {
          label: "تب شماره یک",
          children: <Form_One />,
          key: "1",
        },
      },
      {
        id: 2,
        name: "زیر مجموعه دو",
        component: {
          label: "تب شماره دو",
          children: <Form_Two />,
          key: "2",
        },
      },
      {
        id: 3,
        name: "زیر مجموعه سه",
        component: {
          label: "تب شماره سه",
          children: <Report />,
          key: "3",
        },
      },
    ],
  },
  {
    id: 2,
    name: "صفحه دوم",
    icon: <BiDrink className="text-lg text-gray-500" />,
    sub: [],
  },
  {
    id: 2,
    name: "صفحه سوم",
    icon: <HiOutlineShoppingBag className="text-lg text-gray-500" />,
    sub: [],
  },
  {
    id: 2,
    name: "صفحه چهارم",
    icon: <FiUser className="text-lg text-gray-500" />,
    sub: [],
  },
  {
    id: 2,
    name: "صفحه پنجم",
    icon: <IoMdNotificationsOutline className="text-lg text-gray-500" />,
    sub: [],
  },
  {
    id: 2,
    name: "صفحه شیشم",
    icon: <IoClose className="text-lg text-gray-500" />,
    sub: [],
  },
  {
    id: 2,
    name: "صفحه هفتم",
    icon: <AiOutlineHome className="text-lg text-gray-500" />,
    sub: [],
  },
  {
    id: 2,
    name: "صفحه هشتم",
    icon: <HiOutlineShoppingBag className="text-lg text-gray-500" />,
    sub: [],
  },
  {
    id: 2,
    name: "صفحه نهم",
    icon: <BiDrink className="text-lg text-gray-500" />,
    sub: [],
  },
];
