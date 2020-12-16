import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function LayoutPage({ history, match }) {
  console.log(match);
  console.log(history);
  const { id } = match ?? match.paramas;
  const isEdit = !id;
  const taskId = '11';
  const { path } = match;
  
  useEffect(() => {
    axios
      .get(`https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/tasks/${taskId}`)
      .then((response) => {
       console.log(response);
        if (response.status === 200) {
            const data = {
                taskName:  response.data.name,
                status: response.data.status,
                descript: response.data.description
            };
            const fied = ['taskName', 'status', 'descript'];
            fied.forEach(value => setValue(value, data[value]))
        }
      });
  }, []);

  const validation = yup.object().shape({
    taskName: yup.string().required("This is required!"),
    status: yup.string().required("This is required!"),
    descript: yup.string().required("This is required!"),
    email: yup.string().required('This is required!').email('Email is invalid!'),
    password: yup.string().required('This is required!'),
    confirm: yup.string().oneOf([yup.ref('password')], 'Confirm password not match')
  });

  const { register, handleSubmit, reset, errors, formState, setValue} = useForm({
    resolver: yupResolver(validation),
  });
  const onSubmit = (data) => {
    // console.log(data);
    createTask(data);
  };

  function createTask(task) {
    console.log(task);
    const request = {
      name: task.taskName,
      description: task.descript,
      status: task.status,
    };
    axios
      .post(`https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/tasks`, request)
      .then(response => {
          console.log(response);
      });
  }

  return (
    <div>

        <Link to={`/task/11`} > edit </Link>

      <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <h1>{isEdit ? "Add task" : "Edit Task"}</h1>

        <div className="form-group col-5">
          <label>Task Name</label>
          <input
            name="taskName"
            type="text"
            ref={register}
            className={`form-control ${errors.taskName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.taskName?.message}</div>
        </div>

        <div className="form-group col-5">
          <label>email</label>
          <input
            name="email"
            type="email"
            ref={register}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        {/* password and confirm password */}
        <div className="form-group col-5">
          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group col-5">
          <label>Confirm password</label>
          <input
            name="confirm"
            type="password"
            ref={register}
            className={`form-control ${errors.confirm ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.confirm?.message}</div>
        </div>

        <div className="form-group col-5">
          <label>email</label>
          <input
            name="email"
            type="email"
            ref={register}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>



        <div className="form-row">
          <div className="form-group col">
            <label>Status</label>
            <select
              name="status"
              ref={register}
              className={`form-control ${errors.status ? "is-invalid" : ""}`}
            >
              <option value=""></option>
              <option value="active">Active</option>
              <option value="deactive">Deactive</option>
            </select>
            <div className="invalid-feedback">{errors.status?.message}</div>
          </div>

          <div className="form-group col-5">
            <label>Description</label>
            <textarea
              name="descript"
              type="text"
              rows="5"
              ref={register}
              className={`form-control ${errors.descript ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.descript?.message}</div>
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="btn btn-primary"
          >
            {formState.isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Save
          </button>
          <Link to={isEdit ? "." : ".."} className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
