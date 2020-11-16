import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LeaderBoardSummoners from "../components/LeaderBoardSummoners";

export default class LeaderBoardPage extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.loadMoreEntry = this.loadMoreEntry.bind(this);

    this.state = {
      tier: "",
      division: "",
      queue: "",
      entries: [],
      leagueEntryServer: "",
      error: "",
      server: "na1",
      index: 10,
      disableSearchButton: false,
      loadingMoreEntry: false,
      loadingPage: true,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.setState({
      tier: params.tier,
      queue: params.queue,
      division: params.division,
      leagueEntryServer: params.server,
    });

    fetch(
      `https://shurimaemperorapileagues.azurewebsites.net/api/leagues/${params.server}/entries/${params.queue}/${params.tier}/${params.division}?index=${this.state.index}`
      // `https://localhost:44372/api/leagues/${params.server}/entries/${params.queue}/${params.tier}/${params.division}?index=${this.state.index}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          entries: result.entries,
          loadingMoreEntry: false,
          loadingPage: false,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    if (
      prevState.queue !== this.state.queue ||
      prevState.tier !== this.state.tier ||
      prevState.division !== this.state.division ||
      prevState.leagueEntryServer !== this.state.leagueEntryServer
    ) {
      fetch(
        `https://shurimaemperorapileagues.azurewebsites.net/api/leagues/${this.state.leagueEntryServer}/entries/${this.state.queue}/${this.state.tier}/${this.state.division}?index=${this.state.index}`
        // `https://localhost:44372/api/leagues/${this.state.leagueEntryServer}/entries/${this.state.queue}/${this.state.tier}/${this.state.division}?index=${this.state.index}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            entries: result.entries,
            loadingMoreEntry: false,
            loadingPage: false,
          });
          history.push(
            `/${this.state.leagueEntryServer}/leaderboard/${this.state.queue}/${this.state.tier}/${this.state.division}/`
          );
        });
    } else if (prevState.index !== this.state.index) {
      fetch(
        `https://shurimaemperorapileagues.azurewebsites.net/api/leagues/${this.state.leagueEntryServer}/entries/${this.state.queue}/${this.state.tier}/${this.state.division}?index=${this.state.index}`
        // `https://localhost:44372/api/leagues/${this.state.leagueEntryServer}/entries/${this.state.queue}/${this.state.tier}/${this.state.division}?index=${this.state.index}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            entries: this.state.entries.concat(result.entries),
            loadingMoreEntry: false,
          });
        });
    }
  }

  loadMoreEntry(e) {
    if (this.state.index < 100) {
      this.setState({
        loadingMoreEntry: true,
        index: this.state.index + 10,
      });
    }
  }

  onChange(e) {
    if (
      e.target.value === "CHALLENGER" ||
      e.target.value === "GRANDMASTER" ||
      e.target.value === "MASTER"
    ) {
      this.setState({
        division: "I",
      });
    }

    if (
      e.target.name === "queue" ||
      e.target.name === "tier" ||
      e.target.name === "division" ||
      e.target.name === "leagueEntryServer"
    ) {
      this.setState({
        [e.target.name]: e.target.value,
        index: 10,
        error: "",
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        error: "",
      });
    }
  }

  onSearch(event) {
    event.preventDefault();
    const { history } = this.props;

    this.setState({
      disableSearchButton: true,
    });

    if (this.state.summonerName !== "") {
      fetch(
        // `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/${this.state.server}/verify/${this.state.summonerName}`
        `https://localhost:44355/api/summoners/${this.state.server}/verify/${this.state.summonerName}`
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
        <div className="container" style={{ marginTop: 60, marginBottom: 60 }}>
          <div>
            <div
              className="card shadow bg-dark"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              <div className="card-header border-0 text-white">
                <h2>Top 100</h2>
              </div>
              <div className="card-body text-center">
                <table className="card-text table table-dark table-striped small">
                  <thead>
                    <tr>
                      <th>
                        <div className="row">
                          <div className="col">
                            <select
                              class=" form-control custom-select"
                              name="leagueEntryServer"
                              value={this.state.leagueEntryServer}
                              onChange={this.onChange}
                              id="select-region"
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
                          </div>
                          <div className="col">
                            <select
                              class=" form-control custom-select"
                              name="queue"
                              id="select-queue"
                              value={this.state.queue}
                              onChange={this.onChange}
                            >
                              <option disabled>Select a queue type</option>
                              <option value="RANKED_SOLO_5x5">
                                Ranked Solo/Duo
                              </option>
                              <option value="RANKED_FLEX_SR">
                                Ranked Teams 5x5
                              </option>
                            </select>
                          </div>
                          <div className="col">
                            <select
                              class=" form-control custom-select"
                              name="tier"
                              id="select-tier"
                              value={this.state.tier}
                              onChange={this.onChange}
                            >
                              <option disabled>Select a tier</option>
                              <option value="CHALLENGER">Challenger</option>
                              <option value="GRANDMASTER">GrandMaster</option>
                              <option value="MASTER">Master</option>
                              <option value="DIAMOND">Diamond</option>
                              <option value="PLATINUM">Platinum</option>
                              <option value="GOLD">Gold</option>
                              <option value="SILVER">Silver</option>
                              <option value="IRON">Iron</option>
                            </select>
                          </div>
                          <div className="col">
                            <select
                              class=" form-control custom-select"
                              name="division"
                              id="select-division"
                              value={this.state.division}
                              onChange={this.onChange}
                              disabled={
                                this.state.tier === "CHALLENGER" ||
                                this.state.tier === "GRANDMASTER" ||
                                this.state.tier === "MASTER"
                              }
                            >
                              <option disabled>Select a division</option>
                              <option value="I">I</option>
                              <option value="II">II</option>
                              <option value="III">III</option>
                              <option value="IV">IV</option>
                            </select>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <div className="row">
                          <div className="col-1"></div>
                          <div className="col-2 text-left">
                            <p>Summoner Name</p>
                          </div>
                          <div className="col-2">
                            <p>Tier</p>
                          </div>
                          <div className="col-1">
                            <p>Division</p>
                          </div>
                          <div className="col-1">
                            <p>LP</p>
                          </div>
                          <div className="col">
                            <p>Win/Loss</p>
                          </div>
                          <div className="col-1">
                            <p>Win Ratio</p>
                          </div>
                        </div>
                      </th>
                    </tr>
                    {this.state.loadingPage ? (
                      <div
                        style={{
                          marginTop: "6%",
                        }}
                      >
                        <img src={"/img/global/load01.gif"} alt="loading..." />
                      </div>
                    ) : (
                      <LeaderBoardSummoners
                        entries={this.state.entries}
                        tier={this.state.tier}
                        server={this.state.leagueEntryServer}
                        index={0}
                      />
                    )}
                  </tbody>
                </table>
              </div>
              {this.state.index < 100 && !this.state.loadingPage ? (
                <div className="card-footer border-0">
                  {this.state.loadingMoreEntry ? (
                    <button
                      className="btn btn-dark"
                      style={{ width: 100 }}
                      disabled={this.state.loadingMoreEntry}
                    >
                      <img src={"/img/global/load01.gif"} alt="loading..." />
                    </button>
                  ) : (
                    <button
                      className="btn border-light btn-dark"
                      onClick={this.loadMoreEntry}
                      disabled={this.state.loadingMoreEntry}
                    >
                      Load more{" "}
                      <span className="text-secondary">
                        ({100 - this.state.index})
                      </span>
                    </button>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
