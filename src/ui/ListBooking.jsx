import { useEffect, useState } from "react";
import styles from "./ListBooking.module.css";

function ListBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      isLoading(true);

      const res = await fetch("/src/data/dummy-data.json");
      const data = await res.json();
      console.log(data);
      setBookings(data);

      isLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.cards}>
          {bookings.map((booking) => (
            <li key={booking.id} className={styles.card}>
              <img
                src={booking.image}
                alt={`football-image-${booking.id}`}
                className={styles.image}
              />
              <div className={styles.description}>
                <h3 className={styles.cardTitle}>Booking {booking.id}</h3>
                <p className={styles.cardDescription}>
                  Alamat: {booking.alamat}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListBooking;
