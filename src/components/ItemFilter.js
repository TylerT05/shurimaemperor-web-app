import React, { Component } from "react";
import { Markup } from "interweave";
import ItemBuildInto from "../components/ItemBuildInto";
import allItems from "../data/en_US/item.json";
import itemCategory from "../data/en_US/item-category.json";

export default class ItemFilter extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      selectedItem: "",
      filters: [],
      loadingPage: true,
    };
  }

  componentDidMount() {
    this.setState({
      filters: this.props.filters,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      selectedItem: e.target.id,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="rg-box-modal rg-display-item_modal">
            {Object.keys(itemCategory).map((ic) => (
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
                            "/img/item/" + allItems["data"][i]["image"]["full"]
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
            ))}
          </div>
        </div>
        <ItemBuildInto
          selectedItem={this.state.selectedItem}
          timestamp={Date.now()}
        />
      </div>
    );
  }
}
