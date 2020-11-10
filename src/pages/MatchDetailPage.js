import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import MatchBasicInfo from "../components/MatchBasicInfo";
import MatchDetail from "../components/MatchDetail";

export default class MatchDetailPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      summonerName: "",
      summonerBasicInfo: [],
      match: [],
      teams: [],
      participants: [],
      participantsTeam1: [],
      participantsTeam2: [],
      bans: [],
      error: "",
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.setState({
      name: params.name,
      matchId: params.matchId,
    });

    fetch(
      `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/by-name/${params.name}?index=10`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          summonerBasicInfo: result,
        });
      });

    fetch(
      `https://shurimaemperorapimatches.azurewebsites.net/api/matches/${params.matchId}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          match: result,
          teams: result.teams,
          bans: result.bans,
          participants: result.participants,
          participantsTeam1: result.participants.filter(
            (p) => p.teamId === 100
          ),
          participantsTeam2: result.participants.filter(
            (p) => p.teamId === 200
          ),
        });
      });
  }

  onChangeSearch(e) {
    this.setState({
      summonerName: e.target.value,
      error: "",
    });
  }

  onSearch() {
    const { history } = this.props;

    if (this.state.summonerName !== "") {
      fetch(
        `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/verify-by-name/${this.state.summonerName}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result === true) {
            history.push(`/summonerdetail/${this.state.summonerName}`);
          } else {
            this.setState({
              error: "Summoner name does not match any record!",
            });
          }
        });
    } else {
      this.setState({
        error: "Please enter a summoner name!",
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
                <div className="input-group border border-dark rounded">
                  <input
                    type="text"
                    value={this.state.summonerName}
                    placeholder="Enter a summoner name..."
                    className="form-control border-0"
                    onChange={this.onChangeSearch}
                    style={{ width: 400 }}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-light" onClick={this.onSearch}>
                      <FaSearch />
                    </button>
                  </div>
                </div>
                <p className="text-danger" style={{ marginBottom: 0 }}>
                  {this.state.error}
                </p>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="container"
          style={{ opacity: 0.9, marginTop: 60, marginBottom: 40 }}
        >
          <MatchBasicInfo
            match={this.state.match}
            participants={this.state.participants}
            summonerBasicInfo={this.state.summonerBasicInfo}
          />
          <MatchDetail
            summonerBasicInfo={this.state.summonerBasicInfo}
            match={this.state.match}
            bans={this.state.bans}
            teams={this.state.teams}
            participantsTeam1={this.state.participantsTeam1}
            participantsTeam2={this.state.participantsTeam2}
          />
        </div>
      </div>
    );
  }
}
