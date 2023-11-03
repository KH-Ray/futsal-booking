import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const LokasiList = () => {
  const [ListLokasi, setListLokasi] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchListLokasi = async () => {
    try {
      const result = await axios(`http://localhost:4444/listlokasi`);
      await setListLokasi(result.data.ListLokasi);
      setLoaded(true);
    } catch (err) {
      setErrorMessage(err.response.data);
    }
  };

  useEffect(() => {
    fetchListLokasi();
  }, []);

  return (
    <>
      {" "}
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
        <div className="row">
          {ListLokasi.map((lokasi, index) => (
            <div className="col-sm-2 mb-3" key={index}>
              <div class="card" key={index}>
                <div class="card-body text-center">
                  <Link to={`/lokasi/${lokasi.id}/lapangan`}>
                    {lokasi.nama_lokasi}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LokasiList;
