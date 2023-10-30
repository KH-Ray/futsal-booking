import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList } from "@fortawesome/free-solid-svg-icons";

import DashboardHeader from "../ui/DashboardHeader";
import DashboardMain from "../ui/DashboardMain";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [page, setPage] = useState("Home");

  console.log("test");

  return (
    <div className={styles.container}>
      <DashboardHeader handlePage={page} />

      <aside className={styles.aside}>
        <div className={styles.menusContainer}>
          <h2 className={styles.menuTitle}>Booking</h2>
          <ul className={styles.menus}>
            <li className={styles.menu}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faHouse}
                style={{ color: "#ffffff" }}
              />
              <span
                onClick={(e) => setPage(e.target.textContent)}
                className={styles.page}
              >
                Home
              </span>
            </li>

            <li className={styles.menu}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faList}
                style={{ color: "#ffffff" }}
              />
              <span
                onClick={(e) => setPage(e.target.textContent)}
                className={styles.page}
              >
                List Booking
              </span>
            </li>
          </ul>
        </div>
      </aside>

      <DashboardMain handlePage={page} />
    </div>
  );
}

export default Dashboard;