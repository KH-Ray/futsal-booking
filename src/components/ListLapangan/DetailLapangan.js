import React from "react";
import { Link } from "react-router-dom";

const DetailLapangan = ({ Lapangan }) => {
  return (
    <>
      <h2>{Lapangan.title}</h2>

      <div class="float-start">
        <small>Rating: {Lapangan.rating}</small>
      </div>
      <div class="float-end">
        {Object.entries(Lapangan.lokasi).map((lokasi, index) => (
          <Link
            className="'badge bg-second me-1 "
            to={`/lokasi/${lokasi[0]}/lapangan`}
            key={index}
          >
            {lokasi[1]}
          </Link>
        ))}
      </div>
      <div class="clearfix"></div>
      <hr />
      <table class="table table-striped table-sm-mt-4">
        <thead></thead>
        <tbody>
          <tr>
            <td>Description : {Lapangan.description}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default React.memo(DetailLapangan);
