import React from "react";
import propTypes from "prop-types";
import "../App.css";

export default function ProfileComponents(props) {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => props.handelName(props.fullName)}
      >
        Alert name of profile
      </button>
      <div>{props.children}</div>

      <hr />
      <div>
        <p className="clp"> Full Name : {props.fullName}</p>
        <hr />
        <p className="clp"> Profession :{props.profession}</p>
        <hr />
        <p className="clp"> Bio :{props.bio}</p> <hr />
      </div>
    </div>
  );
}
ProfileComponents.defaultProps = {
  fullName: "Name",
  bio: "bio",
  Profession: "profession",
};

ProfileComponents.propTypes = {
  fullName: propTypes.string,
  profession: propTypes.string,
  bio: propTypes.string,
};
