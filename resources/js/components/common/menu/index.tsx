import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import React from "react";
import route from "ziggy-js";
const Menu: React.FC = () =>{
  const SharedData: any  = usePage();
  /* console.log('ookokkokokokok:::'+SharedData.props);
  console.log(JSON.stringify(SharedData.props)); */
  return(
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            {SharedData.props.app.name} tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              
                <InertiaLink className="nav-link" href={route('patient.list')}>
                  Patients
                </InertiaLink>
              </li>
            </ul>

            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                {SharedData.props.auth.user? SharedData.props.auth.user.name:"mahmoud"}


                </a>

                <div
                  className="dropdown-menu dropdown-menu-start"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Logout
                  </a>

                  <form
                    id="logout-form"
                    action="#"
                    method="POST"
                    className="d-none"
                  >
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

}


export default Menu;
