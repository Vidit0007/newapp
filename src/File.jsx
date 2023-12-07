import React, { useState } from "react";

const File = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <h1>Github User Info</h1>
      <div className="form">
        <label htmlFor="username">Enter GitHub Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUserData}>Fetch User</button>
      </div>

      {userData && (
        <div>
          <h2>User Information</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              style={{
                width: "600px",
                height: "500px",
                borderRadius: "10%",
              }}
            />
            <div>
              <br />
              <p>
                <strong>Login:</strong> {userData.login}
              </p>
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
              <p>
                <strong>Followers:</strong> {userData.followers}
              </p>
              <p>
                <strong>Following:</strong> {userData.following}
              </p>
              <p>
                <strong>Public Repos:</strong> {userData.public_repos}
              </p>
              <p>
                <strong>Location:</strong>{" "}
                {userData.location || "Not available"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default File;
