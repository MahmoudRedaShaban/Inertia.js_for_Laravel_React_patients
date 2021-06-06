import React from "react";
import route from "ziggy-js";
import Layout from "../../../components/common/layout";
import PatientForm from "../../../components/forms/expenseform";
import Patient from "../../../interface/Patient";

interface Props {
  patiente: Patient;
  department: Array<string>;
}

const PatientAddPage: React.FC<Props> = ({ patiente, department }) => {
  return (
    <Layout pageTitle="Patien details">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">View Patient</div>
            <div className="card-body">
              <PatientForm
                patiente={patiente}
                department={department}
                submitUrl="patient.save"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientAddPage;
