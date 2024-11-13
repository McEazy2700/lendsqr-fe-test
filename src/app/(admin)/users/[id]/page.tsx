"use client";

import React from "react";
import Page from "@/components/atoms/a-page";
import ArrowLeft from "@/components/icons/arrow-left";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import UserProfile from "@/components/icons/user-profile";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { getUsers } from "@/lib/services/requests/queries";
import { useQuery } from "@tanstack/react-query";
import Separator from "@/components/atoms/a-separator";
import Rank from "@/components/atoms/a-rank";
import Tabs from "@/components/atoms/a-tabs";
import OverviewSection from "@/components/atoms/a-overview-section";
import OverviewItem from "@/components/atoms/a-overview-item";

interface Props {
  params: {
    id: string;
  };
}

const TABS = [
  "General Details",
  "Document",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
] as const;

const UserDetailsPage: React.FC<Props> = ({ params }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] =
    React.useState<(typeof TABS)[number]>("General Details");

  const { data, isPending } = useQuery({
    queryFn: getUsers,
    queryKey: [QUERY_KEYS.USERS],
  });

  const user = React.useMemo(() => {
    return data?.find((user) => user.id === params.id);
  }, [data, params.id]);

  return (
    <Page>
      <button onClick={() => router.back()} className={styles.backButton}>
        <ArrowLeft />
        <span>Back to Users</span>
      </button>
      <h1 className={styles.heading}>
        <span>User Details</span>
        <div>
          <button data-variant="blacklist">Blacklist User</button>
          <button data-variant="activate">Activate User</button>
        </div>
      </h1>

      <div className={styles.overview}>
        <div className={styles.overviewProfile}>
          <div className={styles.profile}>
            <div className={styles.profileIcon}>
              <UserProfile />
            </div>
            <div className={styles.profileText}>
              <p className={styles.name}>
                {user?.firstName} {user?.lastName}
              </p>
              <p className={styles.uuid}>{user?.uuid}</p>
            </div>
          </div>
          <Separator variant="vertical" />
          <div className={styles.userTier}>
            <p>User&apos;s Tier</p>
            <Rank totalRank={3} rank={1} />
          </div>
          <Separator variant="vertical" />
          <div className={styles.finance}>
            <p className={styles.amount}>
              &#8358;{(Number(user?.amount ?? "0") * 1000).toLocaleString()}
            </p>
            <p className={styles.bankDetails}>
              {user?.accountNumber}/{user?.bank} Bank
            </p>
          </div>
        </div>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />
      </div>

      <div className={styles.tabDetails}>
        {activeTab === "General Details" && (
          <>
            <OverviewSection label="Personal Information">
              <OverviewItem label="Full Name">
                {user?.firstName} {user?.lastName}
              </OverviewItem>
              <OverviewItem label="Phone Number">{user?.phone}</OverviewItem>
              <OverviewItem label="Email Address">{user?.email}</OverviewItem>
              <OverviewItem label="BVN">{user?.bvn}</OverviewItem>
              <OverviewItem label="Gender">{user?.gender}</OverviewItem>
              <OverviewItem label="Marital Status">
                {Math.floor(Math.random() * (user?.status.length ?? 0)) % 2 ===
                0
                  ? "Single"
                  : "Married"}
              </OverviewItem>
              <OverviewItem label="Type of Residense">
                {Math.floor(Math.random() * (user?.status.length ?? 0)) % 2 ===
                0
                  ? "Parents House"
                  : "Live Alone"}
              </OverviewItem>
            </OverviewSection>

            <Separator variant="horizontal" />

            <OverviewSection label="Education and Employment">
              <OverviewItem label="Level of Education">B.Sc</OverviewItem>
              <OverviewItem label="Employment Status">Employed</OverviewItem>
              <OverviewItem label="Sector of Employment">FinTech</OverviewItem>
              <OverviewItem label="Duration of Employment">
                2 years
              </OverviewItem>
              <OverviewItem label="Office Email">
                {user?.email.toLowerCase()}
              </OverviewItem>
              <OverviewItem label="Marital Status">
                &#8358;{(200000).toFixed(2).toLocaleString()} - &#8358;
                {(400000).toFixed(2).toLocaleString()}
              </OverviewItem>
              <OverviewItem label="Loan Repayment">
                {(40000).toLocaleString()}
              </OverviewItem>
            </OverviewSection>

            <Separator variant="horizontal" />

            <OverviewSection label="Socials">
              <OverviewItem label="Twitter">
                @{user?.email.split("@").at(0)?.toLowerCase()}
              </OverviewItem>
              <OverviewItem label="Facebook">
                {user?.firstName} {user?.lastName}
              </OverviewItem>
              <OverviewItem label="Instagram">
                @{user?.email.split("@").at(0)?.toLowerCase()}
              </OverviewItem>
            </OverviewSection>

            <Separator variant="horizontal" />

            <OverviewSection label="Guarantor">
              <OverviewItem label="Full Name">Debby Ogana</OverviewItem>
              <OverviewItem label="Phone Number">07060780922</OverviewItem>
              <OverviewItem label="Email Address">debby@gmail.com</OverviewItem>
              <OverviewItem label="Relationship">Sister</OverviewItem>
            </OverviewSection>

            <Separator variant="horizontal" />

            <OverviewSection>
              <OverviewItem label="Full Name">Debby Ogana</OverviewItem>
              <OverviewItem label="Phone Number">07060780922</OverviewItem>
              <OverviewItem label="Email Address">debby@gmail.com</OverviewItem>
              <OverviewItem label="Relationship">Sister</OverviewItem>
            </OverviewSection>
          </>
        )}
        {activeTab === "Document" && <div>Document</div>}
        {activeTab === "Bank Details" && <div>Bank Details</div>}
        {activeTab === "Loans" && <div>Loans</div>}
        {activeTab === "Savings" && <div>Savings</div>}
        {activeTab === "App and System" && <div>App and System</div>}
      </div>
    </Page>
  );
};

export default UserDetailsPage;
