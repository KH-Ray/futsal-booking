/* Third Party */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListLapangan = () => {
  const [ListLapangan, setListLapangan] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchListLapangan = async () => {
      try {
        const result = await axios(`http://localhost:4444/lapangan`);
        await setListLapangan(result.data.ListLapangan);
        setLoaded(true);
      } catch (err) {
        setErrorMessage(err.response.data);
      }
    };

    fetchListLapangan();
  }, []);

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
        <div className="row">
          {ListLapangan.map((lapangan, index) => (
            <div className="col-sm-6 mb-4 mb-sm-2" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{lapangan.title}</h5>
                  <p className="card-text">{lapangan.description}</p>
                  <Link
                    to={`/lapangan/${lapangan.id}`}
                    className="btn btn-primary"
                  >
                    Lihat lapangan
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

export default ListLapangan;
