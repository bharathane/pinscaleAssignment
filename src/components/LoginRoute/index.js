import { Component } from "react";

import { Navigate } from "react-router-dom";

import Cookies from "js-cookie";

import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isAnyFieldEmpty: false,
    isAdminLogging: false,
  };

  getErrorMsg = () => {
    this.setState({ isAnyFieldEmpty: true });
  };

  submissionSuccess = (id) => {
    const Token =
      "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF";

    const { username, isAdminLogging } = this.state;

    const userDetails = {
      secretToken: Token,
      username: username,
      userId: id,
      isAdmin: isAdminLogging,
    };

    Cookies.set("secret_token", JSON.stringify(userDetails), {
      expires: 30,
      path: "/",
    });
    <Navigate to="/" replace={true} />;

    window.location.replace("/");
  };

  fetching = async () => {
    const { username, password, isAdminLogging } = this.state;

    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append(
      "x-hasura-admin-secret",
      "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF"
    );
    if (isAdminLogging) {
      myHeaders.append("x-hasura-role", "admin");
    }
    const usrPass = { email: username, password };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(usrPass),
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://bursting-gelding-24.hasura.app/api/rest/get-user-id",
        requestOptions
      );

      const result = await response.json();

      const user = result.get_user_id[0];

      if (user.id !== undefined) {
        if (isAdminLogging) {
          user.id === 3 ? this.submissionSuccess(user.id) : this.getErrorMsg();
        } else {
          if (user.id === 3) {
            alert("Cannot be logged as User");
            return;
          } else {
            this.submissionSuccess(user.id);
          }
        }
      } else {
        this.getErrorMsg();
      }
    } catch (error) {
      this.setState({ isAnyFieldEmpty: true });
    }
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username.trim() === "") {
      alert("Username cannot be empty");
      this.getErrorMsg();
      return;
    }
    if (password.trim() === "") {
      alert("Enter Password");
      return;
    }

    this.fetching();
  };

  onAdmin = () => {
    this.setState({ isAdminLogging: true });
  };

  onUser = () => {
    this.setState({ isAdminLogging: false });
  };

  onTypingEmail = (event) => {
    this.setState({ username: event.target.value, isAnyFieldEmpty: false });
  };

  onTypingPassword = (event) => {
    this.setState({ password: event.target.value, isAnyFieldEmpty: false });
  };

  render() {
    const { isAnyFieldEmpty, isAdminLogging } = this.state;

    const userCreds = Cookies.get("secret_token");

    return userCreds === undefined ? (
      <div className="log-con">
        <img
          src="https://res.cloudinary.com/reddyimgs/image/upload/v1690551063/Frame_507_ogpjs9.png"
          alt="website logo"
          className="log-logo"
        />
        <div className="log-card-con">
          <div className="log-btn-con">
            <button
              type="button"
              onClick={this.onUser}
              className={`log-btn ${isAdminLogging && "active-log"}`}
            >
              Login as User
            </button>
            <button
              type="button"
              onClick={this.onAdmin}
              className={`log-btn ${!isAdminLogging && "active-log"}`}
            >
              Login as Admin
            </button>
          </div>
          <form onSubmit={this.onSubmitForm}>
            <h1 className="log-head">Login</h1>
            <div className="login-input-container">
              <label>USERNAME</label>
              <input
                className="login-input-element"
                type="email"
                placeholder="Enter mail"
                onChange={this.onTypingEmail}
              />
            </div>
            <div className="login-input-container">
              <label>PASSWORD </label>
              <input
                className="login-input-element"
                type="password"
                placeholder="Password"
                onChange={this.onTypingPassword}
              />
            </div>
            {isAnyFieldEmpty && <p className="err-text">*Invalid Inputs</p>}
            <div className="submit-btn-container">
              <button type="submit" className="submit-btn">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      window.location.replace("/")
    );
  }
}

export default Login;
