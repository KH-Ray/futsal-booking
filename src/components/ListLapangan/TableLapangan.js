/* Third Party */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TableLapangan = () => {
  const [ListLapangan, setListLapangan] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const confirmDelete = async (id) => {
    const payload = {
      id: id.toString(),
    };
    await axios.post(
      `http://localhost:4444/admin/lapangan/delete`,
      JSON.stringify(payload)
    );
    fetchListLapangan();
  };

  const fetchListLapangan = async () => {
    try {
      const result = await axios(`http://localhost:4444/lapangan`);
      if (result.data.ListLapangan !== null) {
        await setListLapangan(result.data.ListLapangan);
        setLoaded(true);
      } else {
        setErrorMessage("Data Not Found");
      }
    } catch (err) {
      setErrorMessage(err.response.data);
    }
  };

  useEffect(() => {
    fetchListLapangan();
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-12">
          <Link to={"/admin/lapangan/create"} class="btn btn-sm btn-primary">
            Add
          </Link>
        </div>
      </div>
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
        <>
          <div className="row">
            <div class="col-12">
              <table class="table">
                <thead>
                  <tr>
                    <td>No</td>
                    <td>Name</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {ListLapangan.map((lapangan, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/lapangan/${lapangan.id}`}>
                          {lapangan.title}
                        </Link>
                      </td>
                      <td>
                        <div class="btn-group">
                          <button
                            class="btn btn-secondary btn-sm dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Action
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <span class="dropdown-item">
                                {" "}
                                <Link
                                  to={`/admin/lapangan/${lapangan.id}/edit`}
                                >
                                  Edit
                                </Link>
                              </span>
                            </li>
                            <li>
                              <span
                                class="dropdown-item"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  if (window.confirm("Are you sure?")) {
                                    confirmDelete(lapangan.id);
                                  }
                                }}
                              >
                                Delete
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TableLapangan;
