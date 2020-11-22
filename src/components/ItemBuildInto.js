import React, { Component } from "react";
import ItemTree from "../components/ItemTree";
import allItems from "../data/en_US/item.json";

export default class ItemBuildInto extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      selectedItem: "",
      loadingPage: true,
    };
  }

  componentDidMount() {
    this.setState({
      selectedItem: this.props.selectedItem,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.timestamp !== this.props.timestamp) {
      this.setState({
        selectedItem: this.props.selectedItem,
      });
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      selectedItem: e.target.id,
    });
  }

  render() {
    return (
      <div className="col-6">
        <div className="rg-box-modal rg-display-item_modal">
          <div className="item-into">
            <h6>Builds Into:</h6>
            {this.state.selectedItem !== ""
              ? allItems["data"][this.state.selectedItem]["into"] != null
                ? allItems["data"][this.state.selectedItem]["into"].map((i) =>
                    allItems["data"][i]["maps"]["11"] &&
                    allItems["data"][i].inStore == null &&
                    allItems["data"][i].requiredChampion == null &&
                    allItems["data"][i].hideFromAll !== true &&
                    allItems["data"][i]["gold"].purchasable === true ? (
                      <button
                        style={{
                          padding: 0,
                          border: "none",
                          background: "none",
                        }}
                      >
                        <img
                          className="img"
                          id={i}
                          onClick={this.onClick}
                          src={
                            "/img/item/" + allItems["data"][i]["image"]["full"]
                          }
                          style={{ width: 34 }}
                          alt="item icon"
                        />
                      </button>
                    ) : (
                      ""
                    )
                  )
                : ""
              : ""}
          </div>

          <ItemTree selectedItem={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}
