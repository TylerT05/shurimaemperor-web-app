import React, { Component } from "react";
import ItemBuildInto from "../components/ItemBuildInto";
import allItems from "../data/en_US/item.json";
import itemCategory from "../data/en_US/item-category.json";

export default class ItemFilter extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.filter = this.filter.bind(this);

    this.state = {
      selectedItem: "",
      ALL: true,
      Health: false,
      HealthRegen: false,
      Armor: false,
      SpellBlock: false,
      LifeSteal: false,
      CriticalStrike: false,
      AttackSpeed: false,
      Damage: false,
      Mana: false,
      SpellDamage: false,
      CooldownReduction: false,
      ManaRegen: false,
      NonbootsMovement: false,
      MagicPenetration: false,
      ArmorPenetration: false,
      OnHit: false,
      SpellVamp: false,
      loadingPage: true,
    };
  }

  componentDidMount() {
    this.setState({
      ALL: this.props.ALL,
      Health: this.props.HEALTH,
      HealthRegen: this.props.HEALTHREGEN,
      Armor: this.props.ARMOR,
      SpellBlock: this.props.SPELLBLOCK,
      LifeSteal: this.props.LIFESTEAL,
      CriticalStrike: this.props.CRITICALSTRIKE,
      AttackSpeed: this.props.ATTACKSPEED,
      Damage: this.props.DAMAGE,
      Mana: this.props.MANA,
      SpellDamage: this.props.SPELLDAMAGE,
      CooldownReduction: this.props.COOLDOWNREDUCTION,
      ManaRegen: this.props.MANAREGEN,
      NonbootsMovement: this.props.NONBOOTSMOVEMENT,
      MagicPenetration: this.props.MAGICPENETRATION,
      ArmorPenetration: this.props.ARMORPENETRATION,
      OnHit: this.props.ONHIT,
      SpellVamp: this.props.SPELLVAMP,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.timestamp !== this.props.timestamp) {
      this.setState({
        ALL: this.props.ALL,
        Health: this.props.HEALTH,
        HealthRegen: this.props.HEALTHREGEN,
        Armor: this.props.ARMOR,
        SpellBlock: this.props.SPELLBLOCK,
        LifeSteal: this.props.LIFESTEAL,
        CriticalStrike: this.props.CRITICALSTRIKE,
        AttackSpeed: this.props.ATTACKSPEED,
        Damage: this.props.DAMAGE,
        Mana: this.props.MANA,
        SpellDamage: this.props.SPELLDAMAGE,
        CooldownReduction: this.props.COOLDOWNREDUCTION,
        ManaRegen: this.props.MANAREGEN,
        NonbootsMovement: this.props.NONBOOTSMOVEMENT,
        MagicPenetration: this.props.MAGICPENETRATION,
        ArmorPenetration: this.props.ARMORPENETRATION,
        SpellVamp: this.props.SPELLVAMP,
      });
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      selectedItem: e.target.id,
    });
  }

  filter(id) {
    var filter = [];
    if (this.state.Health || this.state.HealthRegen) filter.push(true);
    if (this.state.Armor) filter.push(true);
    if (this.state.SpellBlock) filter.push(true);
    if (this.state.LifeSteal || this.state.SpellVamp) filter.push(true);
    if (this.state.CriticalStrike) filter.push(true);
    if (this.state.AttackSpeed) filter.push(true);
    if (this.state.Damage) filter.push(true);
    if (this.state.Mana || this.state.ManaRegen) filter.push(true);
    if (this.state.SpellDamage) filter.push(true);
    if (this.state.CooldownReduction) filter.push(true);
    if (this.state.NonbootsMovement) filter.push(true);
    if (this.state.MagicPenetration) filter.push(true);
    if (this.state.ArmorPenetration) filter.push(true);
    if (this.state.OnHit) filter.push(true);
    var included = [];
    allItems["data"][id]["tags"].map((i) =>
      i === "Mana" || i === "ManaRegen"
        ? this.state[i]
          ? included.push(true)
          : null
        : i === "Health" || i === "HealthRegen"
        ? this.state[i]
          ? included.push(true)
          : null
        : i === "LifeSteal" || i === "SpellVamp"
        ? this.state[i]
          ? included.push(true)
          : null
        : this.state[i]
        ? included.push(true)
        : null
    );
    return included.length >= filter.length ? (
      <div className="rg-tooltip" style={{ margin: 4 }}>
        <button
          style={{
            padding: 0,
            border: "none",
            background: "none",
          }}
        >
          <img
            id={id}
            onClick={this.onClick}
            src={"/img/item/" + allItems["data"][id]["image"]["full"]}
            alt="item icon"
            style={{ width: 34 }}
          />
        </button>

        <div className="rg-tooltip-content">
          <div className="rg-box-tooltip">
            <div className="info">
              <div className="name">{allItems["data"][id].name}</div>
              <div className="cost">
                <div className="gold">{allItems["data"][id]["gold"].total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="rg-box-modal rg-display-item_modal">
            {Object.keys(itemCategory).map((ic) =>
              ic !== "consumable" && ic !== "boots" ? (
                <div style={{ marginTop: 12, marginBottom: 40 }}>
                  <h6>{ic.charAt(0).toUpperCase() + ic.slice(1) + ":"}</h6>
                  {Object.keys(allItems["data"]).map((i) =>
                    itemCategory[ic].includes(allItems["data"][i].name) &&
                    allItems["data"][i]["maps"]["11"] &&
                    allItems["data"][i].inStore == null &&
                    allItems["data"][i].requiredChampion == null &&
                    allItems["data"][i].hideFromAll !== true &&
                    allItems["data"][i]["gold"].purchasable === true
                      ? this.filter(i)
                      : ""
                  )}
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="col-6">
          <div
            className="rg-box-modal rg-display-item_modal"
            style={{ marginBottom: 30 }}
          >
            {Object.keys(itemCategory).map((ic) =>
              ic === "consumable" ? (
                <div style={{ marginTop: 12, marginBottom: 40 }}>
                  <h6>{ic.charAt(0).toUpperCase() + ic.slice(1) + ":"}</h6>
                  {Object.keys(allItems["data"]).map((i) =>
                    itemCategory[ic].includes(allItems["data"][i].name) &&
                    allItems["data"][i]["maps"]["11"] &&
                    allItems["data"][i].inStore == null &&
                    allItems["data"][i].requiredChampion == null &&
                    allItems["data"][i].hideFromAll !== true &&
                    allItems["data"][i]["gold"].purchasable === true ? (
                      <div className="rg-tooltip" style={{ margin: 4 }}>
                        <button
                          style={{
                            padding: 0,
                            border: "none",
                            background: "none",
                          }}
                        >
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
                        </button>

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
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>
              ) : ic === "boots" ? (
                <div style={{ marginTop: 12, marginBottom: 40 }}>
                  <h6>{ic.charAt(0).toUpperCase() + ic.slice(1) + ":"}</h6>
                  {Object.keys(allItems["data"]).map((i) =>
                    itemCategory[ic].includes(allItems["data"][i].name) &&
                    allItems["data"][i]["maps"]["11"] &&
                    allItems["data"][i].inStore == null &&
                    allItems["data"][i].requiredChampion == null &&
                    allItems["data"][i].hideFromAll !== true &&
                    allItems["data"][i]["gold"].purchasable === true ? (
                      <div className="rg-tooltip" style={{ margin: 4 }}>
                        <button
                          style={{
                            padding: 0,
                            border: "none",
                            background: "none",
                          }}
                        >
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
                        </button>

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
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>
              ) : (
                ""
              )
            )}
          </div>
          <ItemBuildInto
            selectedItem={this.state.selectedItem}
            timestamp={Date.now()}
          />
        </div>
      </div>
    );
  }
}
