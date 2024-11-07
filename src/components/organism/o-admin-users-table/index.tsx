import FilterDuotone from "@/components/icons/filter-duotone";
import styles from "./styles.module.scss";
import { formatDatetime } from "@/lib/utils/datetime";
import MiOptionsVertical from "~icons/mi/options-vertical.jsx";

const MOCK = [
  {
    id: "1",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "09035257499",
    dateJoined: "2024-11-07 15:59",
    status: "inactive",
  },
  {
    id: "2",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "09035257499",
    dateJoined: "2024-11-07 15:59",
    status: "pending",
  },
  {
    id: "3",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "09035257499",
    dateJoined: "2024-11-07 15:59",
    status: "blacklisted",
  },
  {
    id: "4",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "09035257499",
    dateJoined: "2024-11-07 15:59",
    status: "active",
  },
];

const AdminUsersTable = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>
              <span>Organization</span>
              <FilterDuotone />
            </th>
            <th className={styles.th}>
              <span>Username</span>
              <FilterDuotone />
            </th>
            <th className={styles.th}>
              <span>Email</span>
              <FilterDuotone />
            </th>
            <th className={styles.th}>
              <span>Phone Number</span>
              <FilterDuotone />
            </th>
            <th className={styles.th}>
              <span>Date Joined</span>
              <FilterDuotone />
            </th>
            <th className={styles.th}>
              <span>Status</span>
              <FilterDuotone />
            </th>
          </tr>
        </thead>
        <tbody>
          {MOCK.map((data) => (
            <tr key={data.id} className={`${styles.tr} ${styles.trbody}`}>
              <td className={styles.td}>{data.organization}</td>
              <td className={styles.td}>{data.username}</td>
              <td className={styles.td}>{data.email}</td>
              <td className={styles.td}>{data.phone}</td>
              <td className={styles.td}>
                {formatDatetime(new Date(data.dateJoined))}
              </td>
              <td className={styles.td}>
                <div className={styles.statusContainer}>
                  <span
                    className={styles.status}
                    data-status={data.status.toLowerCase()}
                  >
                    {data.status}
                  </span>
                  <button>
                    <MiOptionsVertical />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersTable;
