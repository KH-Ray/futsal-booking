import { useEffect, useState } from "react";
import styles from "./ListBooking.module.css";

function ListBooking({ searchValue, filterValue }) {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const res = await fetch("src/data/dummy-data.json");
      const data = await res.json();
      setBookings(data);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.judul.toLowerCase().includes(searchValue.toLowerCase()) &&
      booking.lokasi.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <ul className={styles.cards}>
          {filteredBookings.map((booking) => (
            <li key={booking.id} className={styles.card}>
              <img
                src={booking.image}
                alt={`football-image-${booking.id}`}
                className={styles.image}
              />
              <div className={styles.description}>
                <h3 className={styles.cardTitle}>{booking.judul}</h3>
                <p className={styles.cardDescription}>
                  Alamat: {booking.alamat}
                </p>
                <p className={styles.cardDescription}>
                  Lokasi: {booking.lokasi}
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
