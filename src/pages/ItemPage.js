import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
import ItemTree from "../components/ItemTree";
import allItems from "../data/en_US/item.json";
import itemCategory from "../data/en_US/item-category.json";

export default class ItemPage extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      items: [],
      selectedItem: "",
      from: [],
      into: [],
      gold: [],
      image: [],
      error: "",
      server: "na1",
      disableSearchButton: false,
      loadingMoreEntry: false,
      loadingPage: true,
    };
  }

  componentDidMount() {
    this.setState({
      items: allItems,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      selectedItem: e.target.id,
      from: allItems["data"][e.target.id]["from"],
      into: allItems["data"][e.target.id]["into"],
      gold: allItems["data"][e.target.id]["gold"],
      image: allItems["data"][e.target.id]["image"],
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
                  to="/na1/leaderboard/RANKED_SOLO_5x5/CHALLENGER/I"
                  style={{ marginLeft: 14 }}
                >
                  Leader Board
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h6 text-white"
                  to="/items"
                  style={{ marginLeft: 14 }}
                >
                  Items
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
                      width: 360,
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
              className="card shadow bg-dark wrap-floor"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              <div className="card-header border-0 text-white wrap-wall">
                <h2 className="wrap-ceil">
                  Items{" "}
                  <span className="text-secondary">
                    (Patch {this.state.items["version"]})
                  </span>
                </h2>
              </div>
              <div className="card-body text-center">
                <div className="row">
                  <div className="col text-white text-left rg-box-modal">
                    <p>All Items</p>
                    {/* <p>Attack Damage</p>
                    <p>Critical Strike</p>
                    <p>Attack Speed</p>
                    <p>On-hit Effects</p>
                    <p>Armor Penetration</p>
                    <p>Ability Power</p>
                    <p>Mana &amp; Regeneration</p>
                    <p>Magic Penetration</p>
                    <p>Health &amp; Regeneration</p>
                    <p>Armor</p>
                    <p>Magic Resistance</p>
                    <p>Ability Haste</p>
                    <p>Movement</p>
                    <p>Life Steal &amp; Vamp</p> */}
                  </div>
                  <div className="col">
                    <div className="rg-box-modal rg-display-item_modal">
                      <div style={{ marginTop: 12 }}>
                        <h6>Consumable:</h6>
                        {Object.keys(allItems["data"]).map((i) =>
                          itemCategory["consumable"].includes(
                            allItems["data"][i].name
                          ) &&
                          allItems["data"][i]["maps"]["11"] &&
                          allItems["data"][i].inStore == null &&
                          allItems["data"][i].requiredChampion == null &&
                          allItems["data"][i].hideFromAll !== true &&
                          allItems["data"][i]["gold"].purchasable === true ? (
                            <div className="rg-tooltip" style={{ margin: 4 }}>
                              <img
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                alt="item icon"
                                style={{ width: 34 }}
                              />
                              <div className="rg-tooltip-content">
                                <div className="rg-box-tooltip">
                                  <div className="info">
                                    <div className="name">
                                      {allItems["data"][i].name}
                                    </div>
                                    <div className="cost">
                                      <div className="gold">
                                        {allItems["data"][i]["gold"].total}
                                      </div>
                                    </div>
                                    <div className="description">
                                      <Markup
                                        content={
                                          allItems["data"][i].description
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <h6>Boots:</h6>
                        {Object.keys(allItems["data"]).map((i) =>
                          itemCategory["boots"].includes(
                            allItems["data"][i].name
                          ) &&
                          allItems["data"][i]["maps"]["11"] &&
                          allItems["data"][i].inStore == null &&
                          allItems["data"][i].requiredChampion == null &&
                          allItems["data"][i].hideFromAll !== true &&
                          allItems["data"][i]["gold"].purchasable === true ? (
                            <div className="rg-tooltip" style={{ margin: 4 }}>
                              <img
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                alt="item icon"
                                style={{ width: 34 }}
                              />
                              <div className="rg-tooltip-content">
                                <div className="rg-box-tooltip">
                                  <div className="info">
                                    <div className="name">
                                      {allItems["data"][i].name}
                                    </div>
                                    <div className="cost">
                                      <div className="gold">
                                        {allItems["data"][i]["gold"].total}
                                      </div>
                                    </div>
                                    <div className="description">
                                      <Markup
                                        content={
                                          allItems["data"][i].description
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <h6>Starter:</h6>
                        {Object.keys(allItems["data"]).map((i) =>
                          itemCategory["starter"].includes(
                            allItems["data"][i].name
                          ) &&
                          allItems["data"][i]["maps"]["11"] &&
                          allItems["data"][i].inStore == null &&
                          allItems["data"][i].requiredChampion == null &&
                          allItems["data"][i].hideFromAll !== true &&
                          allItems["data"][i]["gold"].purchasable === true ? (
                            <div className="rg-tooltip" style={{ margin: 4 }}>
                              <img
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                alt="item icon"
                                style={{ width: 34 }}
                              />
                              <div className="rg-tooltip-content">
                                <div className="rg-box-tooltip">
                                  <div className="info">
                                    <div className="name">
                                      {allItems["data"][i].name}
                                    </div>
                                    <div className="cost">
                                      <div className="gold">
                                        {allItems["data"][i]["gold"].total}
                                      </div>
                                    </div>
                                    <div className="description">
                                      <Markup
                                        content={
                                          allItems["data"][i].description
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <h6>Basic:</h6>
                        {Object.keys(allItems["data"]).map((i) =>
                          itemCategory["basic"].includes(
                            allItems["data"][i].name
                          ) &&
                          allItems["data"][i]["maps"]["11"] &&
                          allItems["data"][i].inStore == null &&
                          allItems["data"][i].requiredChampion == null &&
                          allItems["data"][i].hideFromAll !== true &&
                          allItems["data"][i]["gold"].purchasable === true ? (
                            <div className="rg-tooltip" style={{ margin: 4 }}>
                              <img
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                alt="item icon"
                                style={{ width: 34 }}
                              />
                              <div className="rg-tooltip-content">
                                <div className="rg-box-tooltip">
                                  <div className="info">
                                    <div className="name">
                                      {allItems["data"][i].name}
                                    </div>
                                    <div className="cost">
                                      <div className="gold">
                                        {allItems["data"][i]["gold"].total}
                                      </div>
                                    </div>
                                    <div className="description">
                                      <Markup
                                        content={
                                          allItems["data"][i].description
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <h6>Epic:</h6>
                        {Object.keys(allItems["data"]).map((i) =>
                          itemCategory["epic"].includes(
                            allItems["data"][i].name
                          ) &&
                          allItems["data"][i]["maps"]["11"] &&
                          allItems["data"][i].inStore == null &&
                          allItems["data"][i].requiredChampion == null &&
                          allItems["data"][i].hideFromAll !== true &&
                          allItems["data"][i]["gold"].purchasable === true ? (
                            <div className="rg-tooltip" style={{ margin: 4 }}>
                              <img
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                alt="item icon"
                                style={{ width: 34 }}
                              />
                              <div className="rg-tooltip-content">
                                <div className="rg-box-tooltip">
                                  <div className="info">
                                    <div className="name">
                                      {allItems["data"][i].name}
                                    </div>
                                    <div className="cost">
                                      <div className="gold">
                                        {allItems["data"][i]["gold"].total}
                                      </div>
                                    </div>
                                    <div className="description">
                                      <Markup
                                        content={
                                          allItems["data"][i].description
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <h6>Legendary:</h6>
                        {Object.keys(allItems["data"]).map((i) =>
                          itemCategory["legendary"].includes(
                            allItems["data"][i].name
                          ) &&
                          allItems["data"][i]["maps"]["11"] &&
                          allItems["data"][i].inStore == null &&
                          allItems["data"][i].requiredChampion == null &&
                          allItems["data"][i].hideFromAll !== true &&
                          allItems["data"][i]["gold"].purchasable === true ? (
                            <div className="rg-tooltip" style={{ margin: 4 }}>
                              <img
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                alt="item icon"
                                style={{ width: 34 }}
                              />
                              <div className="rg-tooltip-content">
                                <div className="rg-box-tooltip">
                                  <div className="info">
                                    <div className="name">
                                      {allItems["data"][i].name}
                                    </div>
                                    <div className="cost">
                                      <div className="gold">
                                        {allItems["data"][i]["gold"].total}
                                      </div>
                                    </div>
                                    <div className="description">
                                      <Markup
                                        content={
                                          allItems["data"][i].description
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <h6>Mythic:</h6>
                        {Object.keys(allItems["data"]).map((i) =>
                          itemCategory["mythic"].includes(
                            allItems["data"][i].name
                          ) &&
                          allItems["data"][i]["maps"]["11"] &&
                          allItems["data"][i].inStore == null &&
                          allItems["data"][i].requiredChampion == null &&
                          allItems["data"][i].hideFromAll !== true &&
                          allItems["data"][i]["gold"].purchasable === true ? (
                            <div className="rg-tooltip" style={{ margin: 4 }}>
                              <img
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                alt="item icon"
                                style={{ width: 34 }}
                              />
                              <div className="rg-tooltip-content">
                                <div className="rg-box-tooltip">
                                  <div className="info">
                                    <div className="name">
                                      {allItems["data"][i].name}
                                    </div>
                                    <div className="cost">
                                      <div className="gold">
                                        {allItems["data"][i]["gold"].total}
                                      </div>
                                    </div>
                                    <div className="description">
                                      <Markup
                                        content={
                                          allItems["data"][i].description
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="rg-box-modal rg-display-item_modal">
                      {this.state.selectedItem !== "" ? (
                        <div>
                          <div className="item-into">
                            <h6>Builds Into:</h6>
                            {allItems["data"][this.state.selectedItem][
                              "into"
                            ] != null
                              ? allItems["data"][this.state.selectedItem][
                                  "into"
                                ].map((i) =>
                                  allItems["data"][i]["maps"]["11"] &&
                                  allItems["data"][i].inStore == null &&
                                  allItems["data"][i].requiredChampion ==
                                    null &&
                                  allItems["data"][i].hideFromAll !== true &&
                                  allItems["data"][i]["gold"].purchasable ===
                                    true ? (
                                    <img
                                      className="img"
                                      id={i}
                                      onClick={this.onClick}
                                      src={
                                        "/img/item/" +
                                        allItems["data"][i]["image"]["full"]
                                      }
                                      style={{ width: 34 }}
                                      alt="item icon"
                                    />
                                  ) : (
                                    ""
                                  )
                                )
                              : ""}
                          </div>
                          <div className="rg-item-tree">
                            <div className="treebox" style={{ marginTop: 10 }}>
                              <ItemTree id={this.state.selectedItem} />
                            </div>
                          </div>
                          <div className="item-desc">
                            <div className="title" style={{ margin: 10 }}>
                              <img
                                src={
                                  "/img/item/" +
                                  allItems["data"][this.state.selectedItem][
                                    "image"
                                  ]["full"]
                                }
                                alt="item icon"
                              />
                              <div className="name">
                                {allItems["data"][this.state.selectedItem].name}
                              </div>
                              <div className="cost">
                                <div className="gold">
                                  {
                                    allItems["data"][this.state.selectedItem][
                                      "gold"
                                    ].total
                                  }
                                </div>
                              </div>
                            </div>
                            <div className="description" style={{ margin: 10 }}>
                              <Markup
                                content={
                                  allItems["data"][this.state.selectedItem]
                                    .description
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
