import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ItemFilter from "../components/ItemFilter";
import allItems from "../data/en_US/item.json";

export default class ItemPage extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFilter = this.onFilter.bind(this);

    this.state = {
      selectedItem: "",
      error: "",
      server: "na1",
      disableSearchButton: false,
      loadingMoreEntry: false,
      loadingPage: true,
      ALL: true,
      HEALTH: false,
      HEALTHREGEN: false,
      ARMOR: false,
      SPELLBLOCK: false,
      LIFESTEAL: false,
      CRITICALSTRIKE: false,
      ATTACKSPEED: false,
      DAMAGE: false,
      MANA: false,
      SPELLDAMAGE: false,
      COOLDOWNREDUCTION: false,
      MANAREGEN: false,
      NONBOOTSMOVEMENT: false,
      MAGICPENETRATION: false,
      ARMORPENETRATION: false,
      ONHIT: false,
      SPELLVAMP: false,
    };
  }

  componentDidMount() {}

  onFilter(e) {
    e.preventDefault();

    if (e.target.id === "ALL" && this.state.ALL === false) {
      this.setState({
        ALL: true,
        HEALTH: false,
        HEALTHREGEN: false,
        ARMOR: false,
        SPELLBLOCK: false,
        LIFESTEAL: false,
        CRITICALSTRIKE: false,
        ATTACKSPEED: false,
        DAMAGE: false,
        MANA: false,
        SPELLDAMAGE: false,
        COOLDOWNREDUCTION: false,
        MANAREGEN: false,
        NONBOOTSMOVEMENT: false,
        MAGICPENETRATION: false,
        ARMORPENETRATION: false,
        ONHIT: false,
        SPELLVAMP: false,
      });
    }

    if (
      e.target.id === "AttackDamage" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        DAMAGE: false,
      });
    } else if (
      e.target.id === "CriticalStrike" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        CRITICALSTRIKE: false,
      });
    } else if (
      e.target.id === "AttackSpeed" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        ATTACKSPEED: false,
      });
    } else if (
      e.target.id === "OnHit" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        ONHIT: false,
      });
    } else if (
      e.target.id === "ArmorPenetration" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        ARMORPENETRATION: false,
      });
    } else if (
      e.target.id === "AbilityPower" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        SPELLDAMAGE: false,
      });
    } else if (
      e.target.id === "ManaAndRegen" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        MANA: false,
        MANAREGEN: false,
      });
    } else if (
      e.target.id === "MagicPenetration" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        MAGICPENETRATION: false,
      });
    } else if (
      e.target.id === "HealthAndRegen" &&
      this.state.HEALTH &&
      this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        HEALTH: false,
        HEALTHREGEN: false,
      });
    } else if (
      e.target.id === "Armor" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        ARMOR: false,
      });
    } else if (
      e.target.id === "MagicResistance" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        SPELLBLOCK: false,
      });
    } else if (
      e.target.id === "AbilityHaste" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        COOLDOWNREDUCTION: false,
      });
    } else if (
      e.target.id === "Movement" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      !this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      !this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        NONBOOTSMOVEMENT: false,
      });
    } else if (
      e.target.id === "LifeStealAndVamp" &&
      !this.state.HEALTH &&
      !this.state.HEALTHREGEN &&
      !this.state.ARMOR &&
      !this.state.SPELLBLOCK &&
      this.state.LIFESTEAL &&
      !this.state.CRITICALSTRIKE &&
      !this.state.ATTACKSPEED &&
      !this.state.DAMAGE &&
      !this.state.MANA &&
      !this.state.SPELLDAMAGE &&
      !this.state.COOLDOWNREDUCTION &&
      !this.state.MANAREGEN &&
      !this.state.NONBOOTSMOVEMENT &&
      !this.state.MAGICPENETRATION &&
      !this.state.ARMORPENETRATION &&
      !this.state.ONHIT &&
      this.state.SPELLVAMP
    ) {
      this.setState({
        ALL: true,
        LIFESTEAL: false,
        SPELLVAMP: false,
      });
    } else if (e.target.id === "AttackDamage") {
      this.setState({
        ALL: false,
        DAMAGE: !this.state.DAMAGE,
      });
    } else if (e.target.id === "CriticalStrike") {
      this.setState({
        ALL: false,
        CRITICALSTRIKE: !this.state.CRITICALSTRIKE,
      });
    } else if (e.target.id === "AttackSpeed") {
      this.setState({
        ALL: false,
        ATTACKSPEED: !this.state.ATTACKSPEED,
      });
    } else if (e.target.id === "OnHit") {
      this.setState({
        ALL: false,
        ONHIT: !this.state.ONHIT,
      });
    } else if (e.target.id === "ArmorPenetration") {
      this.setState({
        ALL: false,
        ARMORPENETRATION: !this.state.ARMORPENETRATION,
      });
    } else if (e.target.id === "AbilityPower") {
      this.setState({
        ALL: false,
        SPELLDAMAGE: !this.state.SPELLDAMAGE,
      });
    } else if (e.target.id === "ManaAndRegen") {
      this.setState({
        ALL: false,
        MANA: !this.state.MANA,
        MANAREGEN: !this.state.MANAREGEN,
      });
    } else if (e.target.id === "MagicPenetration") {
      this.setState({
        ALL: false,
        MAGICPENETRATION: !this.state.MAGICPENETRATION,
      });
    } else if (e.target.id === "HealthAndRegen") {
      this.setState({
        ALL: false,
        HEALTH: !this.state.HEALTH,
        HEALTHREGEN: !this.state.HEALTHREGEN,
      });
    } else if (e.target.id === "Armor") {
      this.setState({
        ALL: false,
        ARMOR: !this.state.ARMOR,
      });
    } else if (e.target.id === "MagicResistance") {
      this.setState({
        ALL: false,
        SPELLBLOCK: !this.state.SPELLBLOCK,
      });
    } else if (e.target.id === "AbilityHaste") {
      this.setState({
        ALL: false,
        COOLDOWNREDUCTION: !this.state.COOLDOWNREDUCTION,
      });
    } else if (e.target.id === "Movement") {
      this.setState({
        ALL: false,
        NONBOOTSMOVEMENT: !this.state.NONBOOTSMOVEMENT,
      });
    } else if (e.target.id === "LifeStealAndVamp") {
      this.setState({
        ALL: false,
        LIFESTEAL: !this.state.LIFESTEAL,
        SPELLVAMP: !this.state.SPELLVAMP,
      });
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      selectedItem: e.target.id,
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
                    (Patch {allItems.version})
                  </span>
                </h2>
              </div>
              <div className="card-body text-center">
                <div className="row">
                  <div
                    className="col-3 text-white text-left rg-box-modal small"
                    style={{ marginLeft: 10, height: 740 }}
                  >
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state["ALL"] ? "text-warning" : "text-light"
                          }
                          onClick={this.onFilter}
                          id="ALL"
                          style={{ marginTop: 12 }}
                        >
                          All Items
                        </h6>
                      </button>
                    </div>
                    <hr className="bg-light" />
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.DAMAGE ? "text-warning" : "text-light"
                          }
                          onClick={this.onFilter}
                          id="AttackDamage"
                          style={{ marginTop: 12 }}
                        >
                          Attack Damage
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.CRITICALSTRIKE
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="CriticalStrike"
                          style={{ marginTop: 12 }}
                        >
                          Critical Strike
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.ATTACKSPEED
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="AttackSpeed"
                          style={{ marginTop: 12 }}
                        >
                          Attack Speed
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.ONHIT ? "text-warning" : "text-light"
                          }
                          onClick={this.onFilter}
                          id="OnHit"
                          style={{ marginTop: 12 }}
                        >
                          On-Hit Effects
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.ARMORPENETRATION
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="ArmorPenetration"
                          style={{ marginTop: 12 }}
                        >
                          Armor Penetration
                        </h6>
                      </button>
                    </div>
                    <hr className="bg-light" />
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.SPELLDAMAGE
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="AbilityPower"
                          style={{ marginTop: 12 }}
                        >
                          Ability Power
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.MANA && this.state.MANAREGEN
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="ManaAndRegen"
                          style={{ marginTop: 12 }}
                        >
                          Mana &amp; Regeneration
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.MAGICPENETRATION
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="MagicPenetration"
                          style={{ marginTop: 12 }}
                        >
                          Magic Penetration
                        </h6>
                      </button>
                    </div>
                    <hr className="bg-light" />
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.HEALTH && this.state.HEALTHREGEN
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="HealthAndRegen"
                          style={{ marginTop: 12 }}
                        >
                          Health &amp; Regeneration
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.ARMOR ? "text-warning" : "text-light"
                          }
                          onClick={this.onFilter}
                          id="Armor"
                          style={{ marginTop: 12 }}
                        >
                          Armor
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.SPELLBLOCK
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="MagicResistance"
                          style={{ marginTop: 12 }}
                        >
                          Magic Resistance
                        </h6>
                      </button>
                    </div>
                    <hr className="bg-light" />
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.COOLDOWNREDUCTION
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="AbilityHaste"
                          style={{ marginTop: 12 }}
                        >
                          Ability Haste
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.NONBOOTSMOVEMENT
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="Movement"
                          style={{ marginTop: 12 }}
                        >
                          Movement
                        </h6>
                      </button>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h6
                          className={
                            this.state.LIFESTEAL && this.state.SPELLVAMP
                              ? "text-warning"
                              : "text-light"
                          }
                          onClick={this.onFilter}
                          id="LifeStealAndVamp"
                          style={{ marginTop: 12 }}
                        >
                          Life Steal &amp; Vamp
                        </h6>
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <ItemFilter
                      timestamp={Date.now()}
                      ALL={this.state.ALL}
                      HEALTH={this.state.HEALTH}
                      HEALTHREGEN={this.state.HEALTHREGEN}
                      ARMOR={this.state.ARMOR}
                      SPELLBLOCK={this.state.SPELLBLOCK}
                      LIFESTEAL={this.state.LIFESTEAL}
                      CRITICALSTRIKE={this.state.CRITICALSTRIKE}
                      ATTACKSPEED={this.state.ATTACKSPEED}
                      DAMAGE={this.state.DAMAGE}
                      MANA={this.state.MANA}
                      SPELLDAMAGE={this.state.SPELLDAMAGE}
                      COOLDOWNREDUCTION={this.state.COOLDOWNREDUCTION}
                      MANAREGEN={this.state.MANAREGEN}
                      NONBOOTSMOVEMENT={this.state.NONBOOTSMOVEMENT}
                      MAGICPENETRATION={this.state.MAGICPENETRATION}
                      ARMORPENETRATION={this.state.ARMORPENETRATION}
                      ONHIT={this.state.ONHIT}
                      SPELLVAMP={this.state.SPELLVAMP}
                    />
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
