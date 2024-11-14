"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import { getUsers } from "@/lib/services/requests/queries";
import { QUERY_KEYS } from "@/constants/queryKeys";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Fa6SolidAngleDown from "~icons/fa6-solid/angle-down.jsx";
import { AnimatePresence, motion } from "framer-motion";
import MdiCalendarMonth from "~icons/mdi/calendar-month";
import { useAtom } from "jotai";
import usersFilterAtom from "@/state/atoms/usersFilterAtom";

const STATUS = ["inactive", "pending", "blacklisted", "active"] as const;

const UserFilters = () => {
  const [usersFilter, setUsersFilter] = useAtom(usersFilterAtom);
  const { data } = useQuery({
    queryFn: getUsers,
    queryKey: [QUERY_KEYS.USERS],
  });
  const orgListboxButtonRef = React.useRef<HTMLButtonElement>(null);
  const statusListboxButtonRef = React.useRef<HTMLButtonElement>(null);
  const dateInputRef = React.useRef<HTMLInputElement>(null);
  const statusData = React.useMemo(
    () => data?.map((user) => user.status),
    [data],
  );

  return (
    <div className={styles.container}>
      <div className={styles.filterItem}>
        <label>Organization</label>
        <Listbox
          value={usersFilter?.organization}
          onChange={(v) => setUsersFilter((c) => ({ ...c, organization: v }))}
        >
          {({ open }) => (
            <div>
              <ListboxButton
                ref={orgListboxButtonRef}
                className={styles.listboxButton}
              >
                <span>{usersFilter?.organization ?? "Select"}</span>
                <Fa6SolidAngleDown />
              </ListboxButton>
              <AnimatePresence>
                {open && (
                  <ListboxOptions
                    static
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                    anchor="bottom"
                    style={{
                      width: `${orgListboxButtonRef.current?.clientWidth}px`,
                    }}
                    className={styles.listboxOptions}
                  >
                    {data
                      ?.map((item) => item.organization)
                      .map((organization) => (
                        <ListboxOption
                          key={organization}
                          value={organization}
                          className={styles.listboxOption}
                        >
                          {organization}
                        </ListboxOption>
                      ))}
                  </ListboxOptions>
                )}
              </AnimatePresence>
            </div>
          )}
        </Listbox>
      </div>

      <div className={styles.filterItem}>
        <label>Username</label>
        <input
          placeholder="User"
          type="text"
          value={usersFilter?.username ?? ""}
          onChange={(e) =>
            setUsersFilter((c) => ({ ...c, username: e.target.value }))
          }
        />
      </div>

      <div className={styles.filterItem}>
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          value={usersFilter?.email ?? ""}
          onChange={(e) =>
            setUsersFilter((c) => ({ ...c, email: e.target.value }))
          }
        />
      </div>

      <div style={{ position: "relative" }} className={styles.filterItem}>
        <label>Date</label>
        <button
          onClick={() => dateInputRef.current?.showPicker()}
          className={styles.dateLabel}
        >
          {usersFilter?.date && usersFilter.date !== "" ? (
            new Date(usersFilter.date).toLocaleDateString()
          ) : (
            <>
              <span>Date</span>
              <MdiCalendarMonth />
            </>
          )}
        </button>
        <input
          ref={dateInputRef}
          value={usersFilter?.date ?? ""}
          onChange={(e) =>
            setUsersFilter((c) => ({ ...c, date: e.target.value }))
          }
          style={{ position: "absolute", opacity: 0, bottom: 0 }}
          id="filterDate"
          placeholder="Date"
          type="date"
        />
      </div>

      <div className={styles.filterItem}>
        <label>Phone Number</label>
        <input
          placeholder="Phone Number"
          type="tel"
          value={usersFilter?.phoneNumber ?? ""}
          onChange={(e) =>
            setUsersFilter((c) => ({ ...c, phoneNumber: e.target.value }))
          }
        />
      </div>

      <div className={styles.filterItem}>
        <label>Status</label>
        <Listbox
          value={usersFilter?.status}
          onChange={(v) => setUsersFilter((c) => ({ ...c, status: v }))}
        >
          {({ open }) => (
            <div>
              <ListboxButton
                ref={statusListboxButtonRef}
                className={styles.listboxButton}
              >
                <span>
                  {STATUS.at(
                    statusData?.findIndex((v) => v === usersFilter?.status) ??
                      0,
                  ) ?? "Select"}
                </span>
                <Fa6SolidAngleDown />
              </ListboxButton>
              <AnimatePresence>
                {open && (
                  <ListboxOptions
                    static
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                    anchor="bottom"
                    style={{
                      width: `${statusListboxButtonRef.current?.clientWidth}px`,
                    }}
                    className={styles.listboxOptions}
                  >
                    {STATUS.map((status, index) => (
                      <ListboxOption
                        key={status}
                        value={statusData?.at(index)}
                        className={styles.listboxOption}
                      >
                        {status}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                )}
              </AnimatePresence>
            </div>
          )}
        </Listbox>
      </div>
      <div className={styles.filterAction}>
        <button onClick={() => setUsersFilter(undefined)} data-variant="reset">
          Reset
        </button>
        <button data-variant="filter">Filter</button>
      </div>
    </div>
  );
};

export default UserFilters;
