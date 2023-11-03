import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailLapangan from "../../components/ListLapangan/DetailLapangan";

const Detail = () => {
  let { id } = useParams();
  const [Lapangan, setLapangan] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchListLapangan = async () => {
      try {
        const result = await axios(`http://localhost:4444/lapangan/${id}`);
        await setLapangan(result.data.Lapangan);
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
        <DetailLapangan Lapangan={Lapangan} />
      )}
    </>
  );
};
export default Detail;
