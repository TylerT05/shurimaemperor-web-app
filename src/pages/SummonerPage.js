import React, { Component } from "react";
import MatchList from "../components/MatchList";
import EntryList from "../components/EntryList";
import BasicInfo from "../components/SummonerBasicInfo";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import load from "../load01.gif";

export default class SummonerPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.loadMoreMatches = this.loadMoreMatches.bind(this);

    this.state = {
      summonerName: "",
      summonerInfo: [],
      leagueEntries: [],
      error: "",
      index: 10,
      matches: [],
      disableSearchButton: false,
      loadingMoreMatch: false,
      loadingPage: true,
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;

    fetch(
      `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/by-name/${name}?index=${this.state.index}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          summonerInfo: result,
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
        `https://shurimaemperorapisummoners.azurewebsites.net/api/summoners/by-name/${this.state.summonerInfo.name}?index=${this.state.index}`
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
                <BasicInfo info={this.state.summonerInfo} />
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
              <MatchList
                basicInfo={this.state.summonerInfo}
                matches={this.state.matches}
              />
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
                  className="btn btn-dark"
                  onClick={this.loadMoreMatches}
                  disabled={this.state.loadingMoreMatch}
                >
                  Load more
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
