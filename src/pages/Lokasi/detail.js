import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import index from "../Home";

const DetailLokasiLapangan = () => {
  let { id } = useParams();
  const [ListLapangan, setListLapangan] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchListLapangan = async () => {
      try {
        const result = await axios(
          `http://localhost:4444/listlokasi/${id}/lapangan`
        );
        await setListLapangan(result.data.ListLapangan);
        setLoaded(true);
      } catch (err) {
        setErrorMessage(err.response.data);
      }
    };
    fetchListLapangan();
  }, [id]);
  return (
    <>
      {!loaded ? (
        (() => {
          if (errorMessage) {
            return (
              <div class="row">
                <p>Oops...{errorMessage}</p>
              </div>
            );
          } else {
            return (
              <div class="row">
                <p>Loading...</p>
              </div>
            );
          }
        })()
      ) : (
        <ul>
          {Array.isArray(ListLapangan) ? (
            ListLapangan.map((lapangan) => (
              <li key={index}>
                <Link to={`/lapangan/${lapangan.id}`}>{lapangan.title}</Link>
              </li>
            ))
          ) : (
            <p>Oops... There's no data.</p>
          )}
        </ul>
      )}
    </>
  );
};

export default DetailLokasiLapangan;
