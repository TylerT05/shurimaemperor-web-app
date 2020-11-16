import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import MatchDetailBasicInfo from "../components/MatchDetailBasicInfo";
import MatchDetail from "../components/MatchDetail";

export default class MatchDetailPage extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      summonerName: "",
      summonerServer: "",
      summonerBasicInfo: [],
      match: [],
      teams: [],
      participants: [],
      participantsTeam1: [],
      participantsTeam2: [],
      bans: [],
      error: "",
      server: "",
      disableSearchButton: false,
      loadingPage: true,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.setState({
      name: params.name,
      matchId: params.matchId,
      summonerServer: params.server,
      server: params.server,
    });

    fetch(
      `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/${params.server}/${params.name}?index=10`
      // `https://localhost:44355/api/summoners/${params.server}/${params.name}?index=10`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          summonerBasicInfo: result,
        });
        return fetch(
          `https://shurimaemperorapimatches.azurewebsites.net/api/${params.server}/matches/${params.matchId}`
          // `https://localhost:44303/api/${params.server}/matches/${params.matchId}`
        );
      })
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
          loadingPage: false,
        });
      });
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
                  to="/na1/leaderboard/RANKED_SOLO_5x5/CHALLENGER/I"
                  style={{ marginLeft: 14 }}
                >
                  Leader Board
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
                    onChange={this.onChange}
                    id="sel1"
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
        {this.state.loadingPage ? (
          <div
            style={{
              marginTop: "20%",
            }}
          >
            <img src={"/img/global/load01.gif"} alt="loading..." />
          </div>
        ) : (
          <div
            className="container"
            style={{ marginTop: 60, marginBottom: 40 }}
          >
            <MatchDetailBasicInfo
              match={this.state.match}
              participants={this.state.participants}
              summonerBasicInfo={this.state.summonerBasicInfo}
              server={this.state.summonerServer}
            />
            <MatchDetail
              summonerBasicInfo={this.state.summonerBasicInfo}
              match={this.state.match}
              bans={this.state.bans}
              teams={this.state.teams}
              participantsTeam1={this.state.participantsTeam1}
              participantsTeam2={this.state.participantsTeam2}
              server={this.state.summonerServer}
            />
          </div>
        )}
      </div>
    );
  }
}
