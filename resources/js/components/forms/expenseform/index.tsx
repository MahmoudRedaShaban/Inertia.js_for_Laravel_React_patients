import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import React from "react";
import route from "ziggy-js";
import Patient from "../../../interface/Patient";

interface Props {
  patiente: Patient;
  department: Array<string>;
  submitUrl: string;
}
const genders = ["male", "female"];

const PatientForm: React.FC<Props> = ({ patiente, department, submitUrl }) => {
  const [state, setState] = React.useState({
    id: patiente.id,
    name: patiente.name,
    birthday: patiente.birthday,
    jop: patiente.jop,
    dep: patiente.dep,
    phone: patiente.phone,
    gender: patiente.gender || genders[0],
  });
  const page: any = usePage(); //getShearDataPublic

  const handelChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(state);
    // console.log(submitUrl);

    Inertia.post(route(submitUrl, state));
  };

  return (
    <form onSubmit={handelSubmit}>
      <input type="hidden" name="id" value={patiente.id} />
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={state.name}
          onChange={handelChange}
        />
        {page.props.errors?.name && (
          <div className="error-feedback">{page.props.errors?.name[0]}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          name="birthday"
          className="form-control"
          value={state.birthday}
          onChange={handelChange}
        />
        {page.props.errors?.date && (
          <div className="error-feedback">{page.props.errors?.date[0]}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="jop">Jop</label>
        <input
          type="text"
          name="jop"
          className="form-control"
          value={state.jop}
          onChange={handelChange}
        />
        {page.props.errors?.jop && (
          <div className="error">{page.props.errors?.jop[0]}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          value={state.phone}
          onChange={handelChange}
        />
        {page.props.errors?.phone && (
          <div className="error-feedback">{page.props.errors?.phone[0]}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="dep">Department</label>
        <select
          className="form-control"
          name="dep"
          value={state.dep}
          onChange={handelChange}
        >
          {department.map((departmen: string, index: number) => {
            return (
              <option value={departmen} key={index}>
                {departmen}
              </option>
            );
          })}
        </select>
        {page.props.errors?.dep && (
          <div className="error-feedback">{page.props.errors?.dep[0]}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          name="gender"
          value={state.gender}
          onChange={handelChange}
        >
          {genders.map((gend: string, index: number) => {
            return (
              <option value={gend} key={index}>
                {gend}
              </option>
            );
          })}
        </select>
        {page.props.errors?.gender && (
          <div className="error-feedback">{page.props.errors?.gender[0]}</div>
        )}
      </div>
      <div className="form-group p-2">
        <button type="submit" className="btn btn-primary py-2">
          Save
        </button>
        <InertiaLink
          className="btn btn-outline-primary mx-2"
          href={route("patient.list")}
        >
          Back
        </InertiaLink>
      </div>
    </form>
  );
};

export default PatientForm;
