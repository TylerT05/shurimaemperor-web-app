import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      summonerName: "",
      error: "",
      server: "na1",
      disableSearchButton: false,
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  }

  onSearch(event) {
    event.preventDefault();
    const { history } = this.props;

    this.setState({
      disableSearchButton: true,
    });

    if (this.state.summonerName !== "") {
      fetch(
        `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/${this.state.server}/verify/${this.state.summonerName}`
        // `https://localhost:44355/api/summoners/${this.state.server}/verify/${this.state.summonerName}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result === true) {
            history.push(
              `/${this.state.server}/summonerDetail/${this.state.summonerName}`
            );
            window.location.reload(false);
          } else {
            this.setState({
              error: "Summoner name does not match any record!",
              disableSearchButton: false,
            });
          }
        });
    } else {
      this.setState({
        error: "Please enter a summoner name!",
        disableSearchButton: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link className="nav-brand border-right border-secondary" to="/">
              <img
                style={{ marginRight: 14, width: 60 }}
                src={"/shurima_logo.png"}
                alt=""
              />
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  className="nav-link h6 text-white"
                  to="/"
                  style={{ marginLeft: 14 }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h6 text-white"
                  to="/about"
                  style={{ marginLeft: 14 }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h6 text-white"
                  to="/contact"
                  style={{ marginLeft: 14 }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <form
                  className="form-inline justify-content-left"
                  onSubmit={this.onSearch}
                >
                  <select
                    class=" form-control custom-select"
                    name="server"
                    value={this.state.server}
                    id="sel1"
                    onChange={this.onChange}
                  >
                    <option disabled>Select a region</option>
                    <option value="na1">NA</option>
                    <option value="kr">KR</option>
                    <option value="euw1">EUW</option>
                    <option value="eun1">EUNE</option>
                    <option value="jp1">JP</option>
                    <option value="br1">BR</option>
                    <option value="la1">LAN</option>
                    <option value="la2">LAS</option>
                    <option value="oc1">OCE</option>
                    <option value="ru">RU</option>
                    <option value="tr1">TR</option>
                  </select>
                  <div
                    className="input-group border border-dark rounded"
                    style={{
                      width: 400,
                    }}
                  >
                    <input
                      value={this.state.summonerName}
                      placeholder="Enter a summoner name..."
                      name="summonerName"
                      type="text"
                      className="form-control"
                      onChange={this.onChange}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="submit"
                        disabled={this.state.disableSearchButton}
                      >
                        <FaSearch />
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-danger" style={{ marginBottom: 0 }}>
                  {this.state.error}
                </p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container" style={{ marginTop: 60, marginBottom: 60 }}>
          <div
            className="shadow bg-dark card"
            style={{
              opacity: 0.9,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <div className="card-body text-center">
              <div className="card-text">
                <h1 className="text-white display-4" style={{ margin: 40 }}>
                  About
                </h1>
                <h4
                  className="text-left text-white"
                  style={{ marginRight: 80, marginLeft: 80, marginBottom: 80 }}
                >
                  Shurima Emperor is a League of Legends Helper web application.
                  It is used for looking up player (summoner) in game data
                  including summoner basic info, league entry information, match
                  history, match detail. Based on raw data, we analyze it and
                  give our user the best experience with tons of useful data
                  like win rates, laning habits, effective role and lane, etc.
                  All data using on the website is accurate and provided from
                  Riot Games, League of Legends video game's publisher.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
