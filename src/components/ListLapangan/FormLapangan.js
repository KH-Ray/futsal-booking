import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { json, useNavigate, useParams } from "react-router-dom";

const FormLapangan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const isAddMode = !id;
  const fields = ["id", "title", "rating", "description"];

  const fetchLapangan = async (id) => {
    try {
      const result = await axios(`http://localhost:4444/lapangan/${id}`);
      fields.forEach((field) => setValue(field, result.data.Lapangan[field]));
    } catch (err) {
      console.log(err.respose.data);
    }
  };

  useEffect(() => {
    if (!isAddMode) {
      fetchLapangan(id);
    }
  }, [isAddMode]);

  const onSubmit = async (data) => {
    let dataJSON = JSON.stringify(data, (k, v) =>
      v && typeof v === "object" ? v : "" + v
    );
    let payload = JSON.parse(dataJSON);
    if (isAddMode) {
      await axios.post(
        "http://localhost:4444/admin/lapangan/add",
        JSON.stringify(payload)
      );
    } else {
      await axios.post(
        "http://localhost:4444/admin/lapangan/edit",
        JSON.stringify(payload)
      );
    }
    navigate("/admin");
  };
  return (
    <>
      <h2>Add New Lapangan</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            {...register("title", { required: true })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="" className="form-label">
            Rating
          </label>
          <input
            type="number"
            class="form-control"
            id="rating"
            name="rating"
            {...register("rating", { required: true })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <textarea
            rows={3}
            class="form-control"
            id="description"
            name="description"
            {...register("description", { required: true })}
          />
        </div>
        <hr />

        <button className="btn btn-primary mb-4" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default FormLapangan;
