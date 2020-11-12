import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
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
      )
        .then((res) => res.json())
        .then((result) => {
          if (result === true) {
            this.setState({
              error: "",
            });
            history.push(
              `/${this.state.server}/summonerdetail/${this.state.summonerName}`
            );
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
                alt="web app logo"
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
          </nav>
        </div>
        <div className="container" style={{ marginTop: 60, marginBottom: 40 }}>
          <div
            className="shadow bg-dark card"
            style={{
              opacity: 0.9,
              height: 740,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <img
              style={{
                marginTop: 100,
                marginLeft: "auto",
                marginRight: "auto",
                width: 600,
              }}
              src={"/shurima.png"}
              alt="shurima logo"
            />

            <div style={{ marginBottom: 80 }}>
              <div style={{ height: 100 }}>
                <form
                  className="form-inline justify-content-center"
                  style={{
                    marginTop: 100,
                    marginBottom: 10,
                  }}
                  onSubmit={this.onSearch}
                >
                  <select
                    class=" form-control custom-select"
                    name="server"
                    id="sel1"
                    value={this.state.server}
                    onChange={this.onChange}
                  >
                    <option disabled>Select a server</option>
                    <option value="na1">North America</option>
                    <option value="kr">Korea</option>
                    <option value="euw1">Europe West</option>
                    <option value="eun1">EU North &amp; East</option>
                    <option value="jp1">Japan</option>
                    <option value="br1">Brazil</option>
                    <option value="la1">Latin America North</option>
                    <option value="la2">Latin America South</option>
                    <option value="oc1">Oceania</option>
                    <option value="ru">Russia</option>
                    <option value="tr1">Turkey</option>
                  </select>
                  <div
                    className="input-group border border-dark rounded"
                    style={{
                      width: 600,
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
                  <p className="text-warning">
                    Summoner Name is case sensitive. Make sure you enter it
                    correctly.
                  </p>
                </form>
                <p className="text-danger">{this.state.error}</p>
              </div>

              <div className="text-secondary" style={{ marginTop: 40 }}>
                <p>Sample Summoner Names for North America (NA) server:</p>
                <p>Mathgodpi</p>
                <p>Vocal Warfare</p>
                <p>TheCrankyCroc</p>
                <p>SwarlieStinson</p>
                <p>*All summoner names are real in game names.*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
