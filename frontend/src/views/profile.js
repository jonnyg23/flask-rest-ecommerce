import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const [accessToken, setAccessToken] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      setAccessToken(token);
    } catch (error) {
      setAccessToken(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <p>
        Click below to view your unique Bearer JWT Access Token:
      </p>
      <div
        className="btn-group mt-5"
        role="group"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={callSecureApi}
        >
          View Bearer Token
        </button>
      </div>
      {accessToken && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{accessToken}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
