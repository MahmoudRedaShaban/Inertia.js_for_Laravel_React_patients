import React from 'react'
import Layout from '../../components/common/layout';
import Patient from '../../interface/Patient';



interface Props {
    patients: Array<Patient>;
}

const HomePages  = (props: Props) => {
    const { patients } = props;
    return (
    <Layout pageTitle= "My Patients">
        <div>Welcom Your Test App
        <p>Welcom To Home </p>
        <ul>
            {patients.map((value: Patient ,index) => {
                return <li key={index}>{value.name}</li>
            })}
        </ul>
    </div>
    </Layout>
    );
};

export default HomePages;

