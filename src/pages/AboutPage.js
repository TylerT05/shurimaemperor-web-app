import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      summonerName: "",
      error: "",
      disableSearchButton: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      fetch(
        `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/by-name/${this.state.summonerInfo.name}?index=${this.state.index}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            matches: this.state.matches.concat(result.matchOveralls),
          });
        });
    }
  }

  onChangeSearch(e) {
    this.setState({
      summonerName: e.target.value,
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
        `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/verify-by-name/${this.state.summonerName}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result === true) {
            history.push(`/summonerDetail/${this.state.summonerName}`);
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
                  <select class=" form-control custom-select" id="sel1">
                    <option value="NA">NA</option>
                    <option value="KR">KR</option>
                    <option value="EUW">EUW</option>
                    <option value="EUNE">EUNE</option>
                    <option value="JP">JP</option>
                    <option value="BR">BR</option>
                    <option value="LAN">LAN</option>
                    <option value="LAS">LAS</option>
                    <option value="OCE">OCE</option>
                    <option value="RU">RU</option>
                    <option value="TR">TR</option>
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
                      type="text"
                      className="form-control"
                      onChange={this.onChangeSearch}
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
