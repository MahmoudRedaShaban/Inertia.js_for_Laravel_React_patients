import React from "react";
import Layout from "../../components/common/layout";
import Pagination from "../../components/common/pagination";
import PaginatedData from "../../interface/PaginatedData";
import Patient from "../../interface/Patient";
import { InertiaLink } from "@inertiajs/inertia-react";
import route from "ziggy-js";
import { Inertia } from "@inertiajs/inertia";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
interface Props {
  patientes: PaginatedData;
}

const   PatientListPage: React.FC<Props> = ({patientes}) => {
  const handelPatientDelete = (patient: Patient) => {
    console.log(patient);
    confirmAlert({
      title: 'Deleted Patient ',
      message: "Are you sure to Delete ?",
      buttons:[
        {
          label: 'Yes',
          onClick: () => {
            Inertia.get(route('patient.delete',  patient));
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      
    });
    
  } 
  return <Layout  pageTitle="My  Patient List" >
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-header ">
              <h4 className="float-start">My Patientes</h4>   
                <InertiaLink className="float-end btn btn-outline-primary" href={route("patient.add")}>Add New</InertiaLink></div>   
            <div className="card-body">
              <table className="table table-bordered table-inverse table-responsive">
                <thead className="thead-inverse">
                  <tr>
                    <th>#Id</th>
                    <th>Name</th>
                    <th>birthday</th>
                    <th>jop</th>
                    <th>phone</th>
                    <th>dep</th>
                    <th>gender</th>
                    <th>View/Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                    {patientes.data.length >0 && patientes.data.map((patient: Patient, index: number) => {
                      return(
                      <tr key={index}>
                        <td>{patient.id}</td>
                        <td>{patient.name}</td>
                        <td>{patient.birthday}</td>
                        <td>{patient.jop}</td>
                        <td>{patient.phone}</td>
                        <td> {patient.dep} </td>
                        <td>{patient.gender}</td>
                        <td>
                        <InertiaLink
                          href={route("patient.show", { id: patient.id })}
                          className=" btn-outline-primary ">
                            View
                            </InertiaLink>
                            <span className="p-2">/</span>
                          <span onClick={() => handelPatientDelete(patient)} className="btn-outline-danger">Delete</span>
                        </td>
                      </tr>
                      );
                    })}
                    
                  </tbody>
              </table>
            </div>
          <div className="px-4"> <Pagination  links={patientes.links}/></div>
          </div>
        </div>
      </div>
  </Layout>;
};


export default  PatientListPage;
