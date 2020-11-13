import React, { Component } from "react";
import MatchList from "../components/MatchList";
import EntryList from "../components/EntryList";
import BasicInfo from "../components/SummonerBasicInfo";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class SummonerPage extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.loadMoreMatches = this.loadMoreMatches.bind(this);

    this.state = {
      summonerName: "",
      summonerServer: "",
      summonerInfo: [],
      leagueEntries: [],
      error: "",
      server: "na1",
      totalMatches: 0,
      index: 10,
      matches: [],
      disableSearchButton: false,
      loadingMoreMatch: false,
      loadingPage: true,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.setState({
      summonerServer: params.server,
    });

    fetch(
      `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/${params.server}/${params.name}?index=${this.state.index}`
      // `https://localhost:44355/api/summoners/${params.server}/${params.name}?index=${this.state.index}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          summonerInfo: result,
          totalMatches: result.matchList.totalGames,
          leagueEntries: result.leagueEntries,
          matches: result.matchOveralls,
          loadingMoreMatch: false,
          loadingPage: false,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      fetch(
        `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/${this.state.summonerServer}/${this.state.summonerInfo.name}?index=${this.state.index}`
        // `https://localhost:44355/api/summoners/${this.state.summonerServer}/${this.state.summonerInfo.name}?index=${this.state.index}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            matches: this.state.matches.concat(result.matchOveralls),
            loadingMoreMatch: false,
          });
        });
    }
  }

  loadMoreMatches(e) {
    this.setState({
      loadingMoreMatch: true,
      index: this.state.index + 10,
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
            style={{ opacity: 0.9, marginTop: 60, marginBottom: 60 }}
          >
            <div className="row">
              <div className="col-md-6">
                <BasicInfo
                  info={this.state.summonerInfo}
                  server={this.state.summonerServer}
                />
              </div>
              <div className="col-md-6">
                {this.state.leagueEntries && this.state.leagueEntries.length ? (
                  <EntryList entries={this.state.leagueEntries} />
                ) : (
                  <EntryList entries={null} />
                )}
              </div>
            </div>
            <div>
              <div
                className="card shadow bg-dark"
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                <div className="card-header h4 border-0 text-white">
                  Match History{" "}
                  <span className="text-secondary">
                    (last {this.state.index} played)
                  </span>
                </div>
                <div className="card-body text-center">
                  <MatchList
                    basicInfo={this.state.summonerInfo}
                    matches={this.state.matches}
                    server={this.state.summonerServer}
                  />
                </div>
                <div className="card-footer border-0">
                  {this.state.loadingMoreMatch ? (
                    <button
                      className="btn btn-dark"
                      style={{ width: 100 }}
                      disabled={this.state.loadingMoreMatch}
                    >
                      <img src={"/img/global/load01.gif"} alt="loading..." />
                    </button>
                  ) : (
                    <button
                      className="btn border-light btn-dark"
                      onClick={this.loadMoreMatches}
                      disabled={this.state.loadingMoreMatch}
                    >
                      Load more{" "}
                      <span className="text-secondary">
                        ({this.state.totalMatches - this.state.index})
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
