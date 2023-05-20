import React from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { CogIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: (
      <Squares2X2Icon
        className="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },

  {
    title: "Event",
    path: "/event/planning",
    icon: (
      <CalendarIcon
        className="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),

    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdKeyboardArrowDown />,

    subNav: [
      {
        title: "Planning",
        path: "/event/planning",
        icon: <BsIcons.BsDot />,
        cName: "sub-nav",
      },
      {
        title: "Proposal",
        path: "/event/proposal",
        icon: <BsIcons.BsDot />,
        cName: "sub-nav",
      },
      {
        title: "History",
        path: "/event/history",
        icon: <BsIcons.BsDot />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Sponsor",
    path: "/sponsor/matching",
    icon: (
      <BanknotesIcon
        className="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),

    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdKeyboardArrowDown />,

    subNav: [
      // {
      //   title: "Proposal",
      //   path: "/sponsor/proposal",
      //   icon: <BsIcons.BsDot />,
      // },
      {
        title: "Matching",
        path: "/sponsor/matching",
        icon: <BsIcons.BsDot />,
      },
    ],
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: (
      <ChartBarIcon
        className="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },

  {
    title: "Messaging",
    path: "/messaging",
    icon: (
      <ChatBubbleBottomCenterTextIcon
        className="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: (
      <BellIcon className="h-6 h-6 text-gray-500" style={{ width: "20px" }} />
    ),
  },
  {
    title: "Attendees Mgt",
    path: "/attendeesmanagement",
    icon: (
      <UserGroupIcon
        className="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },
  {
    title: "Vendors Mgt",
    path: "/vendorsmanagement",
    icon: (
      <UserPlusIcon
        className="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },

  {
    title: "Settings",
    path: "/settings",
    icon: (
      <CogIcon className="h-6 h-6 text-gray-500" style={{ width: "20px" }} />
    ),
  },
];
