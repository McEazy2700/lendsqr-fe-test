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

const STATUS = ["inactive", "pending", "blacklisted", "active"] as const;

const UserFilters = () => {
  const [organization, setOrganization] = React.useState<string>();
  const [status, setStatus] = React.useState<(typeof STATUS)[number]>();
  const [date, setDate] = React.useState<string>();
  const { data } = useQuery({
    queryFn: getUsers,
    queryKey: [QUERY_KEYS.USERS],
  });
  const orgListboxButtonRef = React.useRef<HTMLButtonElement>(null);
  const statusListboxButtonRef = React.useRef<HTMLButtonElement>(null);
  const dateInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.filterItem}>
        <label>Organization</label>
        <Listbox value={organization} onChange={setOrganization}>
          {({ open }) => (
            <div>
              <ListboxButton
                ref={orgListboxButtonRef}
                className={styles.listboxButton}
              >
                <span>{organization ?? "Select"}</span>
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
        <input placeholder="User" type="text" />
      </div>

      <div className={styles.filterItem}>
        <label>Email</label>
        <input placeholder="Email" type="email" />
      </div>

      <div style={{ position: "relative" }} className={styles.filterItem}>
        <label>Date</label>
        <label
          onClick={() => dateInputRef.current?.showPicker()}
          htmlFor="filterDate"
          className={styles.dateLabel}
        >
          {date && date !== "" ? (
            new Date(date).toLocaleDateString()
          ) : (
            <>
              <span>Date</span>
              <MdiCalendarMonth />
            </>
          )}
        </label>
        <input
          ref={dateInputRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ position: "absolute", opacity: 0, bottom: 0 }}
          id="filterDate"
          placeholder="Date"
          type="date"
        />
      </div>

      <div className={styles.filterItem}>
        <label>Phone Number</label>
        <input placeholder="Phone Number" type="tel" />
      </div>

      <div className={styles.filterItem}>
        <label>Status</label>
        <Listbox value={status} onChange={setStatus}>
          {({ open }) => (
            <>
              <ListboxButton
                ref={statusListboxButtonRef}
                className={styles.listboxButton}
              >
                <span>{status ?? "Select"}</span>
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
                    {STATUS.map((status) => (
                      <ListboxOption
                        key={status}
                        value={status}
                        className={styles.listboxOption}
                      >
                        {status}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                )}
              </AnimatePresence>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default UserFilters;
