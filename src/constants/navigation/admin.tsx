import BadgePercentDuotone from "@/components/icons/badge-percent-duotone";
import BankDuotone from "@/components/icons/bank-duotone";
import BarChartDuotone from "@/components/icons/bar-chart-duotone";
import BriefcaseDuotone from "@/components/icons/briefcase-duotone";
import ClipboardList from "@/components/icons/clipboard-list-duotone";
import CoinsStack from "@/components/icons/coins-stack";
import GalaxyDuotone from "@/components/icons/galaxy-duotone";
import HandshakeDuotone from "@/components/icons/handshake-duotone";
import HomeDuotone from "@/components/icons/home-duotone";
import LoanHandDuotone from "@/components/icons/loan-hand-duotone";
import MobileTransaction from "@/components/icons/mobile-transaction";
import MoneySackDuotone from "@/components/icons/money-sack-duotone";
import PiggyBankDuotone from "@/components/icons/piggy-bank-duotone";
import ScrollDuotone from "@/components/icons/scroll-duotone";
import SlidersDuotone from "@/components/icons/sliders-duotone";
import UserCheckDuotone from "@/components/icons/user-check-duotone";
import UserGearDuotone from "@/components/icons/user-gear-duotone";
import UserXDuotone from "@/components/icons/user-x-duotone";
import UsersFriendsDuotone from "@/components/icons/users-friends-duotone";
import UserGroupDuotone from "@/components/icons/users-group-duotone";
import { NavType } from "@/lib/types/navigation";

export const ADMIN_NAVIGATION: NavType[] = [
  {
    href: "/",
    label: "Dashboard",
    variant: "single",
    icon: <HomeDuotone />,
  },
  {
    variant: "group",
    label: "Customer",
    navs: [
      {
        href: "/users",
        label: "Users",
        variant: "single",
        icon: <UsersFriendsDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Guarantors",
        icon: <UserGroupDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Loans",
        icon: <MoneySackDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Decision Models",
        icon: <HandshakeDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Savings",
        icon: <PiggyBankDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Loan Requests",
        icon: <LoanHandDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Whitelist",
        icon: <UserCheckDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Karma",
        icon: <UserXDuotone />,
      },
    ],
  },

  {
    label: "Businesses",
    variant: "group",
    navs: [
      {
        href: "#",
        variant: "single",
        label: "Organization",
        icon: <BriefcaseDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Loan Products",
        icon: <LoanHandDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Savings Products",
        icon: <BankDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Fees and Charges",
        icon: <CoinsStack />,
      },
      {
        href: "#",
        variant: "single",
        label: "Transactions",
        icon: <MobileTransaction />,
      },
      {
        href: "#",
        variant: "single",
        label: "Service",
        icon: <GalaxyDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Service Account",
        icon: <UserGearDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Settlements",
        icon: <ScrollDuotone />,
      },
      {
        href: "#",
        variant: "single",
        label: "Reports",
        icon: <BarChartDuotone />,
      },
    ],
  },

  {
    label: "Settings",
    variant: "group",
    navs: [
      {
        href: "#",
        label: "Preferences",
        variant: "single",
        icon: <SlidersDuotone />,
      },
      {
        href: "#",
        label: "Fees and Pricing",
        variant: "single",
        icon: <BadgePercentDuotone />,
      },
      {
        href: "#",
        label: "Audit Logs",
        variant: "single",
        icon: <ClipboardList />,
      },
    ],
  },
] as const;
