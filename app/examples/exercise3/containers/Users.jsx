import React, { Component } from "react";
import { changeFilter } from "../actions/filterActions";
import { ALL, IT, MARKETING, HR, FINANCE } from "../constants/filterTypes";
import { connect } from "react-redux";

class TodoApp extends Component {
  render() {
    const { users, filter, changeFilter } = this.props;

    return (
      <div className="employees-list">
        <div className="btn-group btn-group-sm">
          <button
            onClick={() => changeFilter(ALL)}
            className={`btn ${filter === ALL ? "btn-primary" : "btn-light"}`}
          >
            ALL
          </button>
          <button
            onClick={() => changeFilter(IT)}
            className={`btn ${filter === IT ? "btn-primary" : "btn-light"}`}
          >
            IT
          </button>
          <button
            onClick={() => changeFilter(MARKETING)}
            className={`btn ${filter === MARKETING ? "btn-primary" : "btn-light"}`}
          >
            MARKETING
          </button>
          <button
            onClick={() => changeFilter(HR)}
            className={`btn ${filter === HR ? "btn-primary" : "btn-light"}`}
          >
            HR
          </button>
          <button
            onClick={() => changeFilter(FINANCE)}
            className={`btn ${filter === FINANCE ? "btn-primary" : "btn-light"}`}
          >
            FINANCE
          </button>
        </div>
        <br />
        <hr />
        <div>
          {users.length &&
            users.map(({ id, firstName, lastName, email, department, picture }) => (
              <div key={id} className="card testimonial-card m-b">
                <div className="card-up info-color"></div>
                <div className="avatar mx-auto white m-t">
                  <img src={picture} className="rounded-circle img-fluid" />
                </div>
                <div className="card-body">
                  <h4 className="font-weight-bold mb-4 text-center">
                    {firstName} {lastName}
                  </h4>
                  <hr />
                  <p className="dark-grey-text mt-4">Email: {email}</p>
                  <p className="dark-grey-text mt-4">Department: {department}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, filter }) => ({
  users,
  filter,
});

const mapDispatchToProps = {
  changeFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
