import React, { Component } from "react";
import { Markup } from "interweave";
import allItems from "../data/en_US/item.json";

export default class ItemDetail extends Component {
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
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setState({
        selectedItem: this.props.selectedItem,
      });
    }
  }

  onClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="item-desc">
        {this.state.selectedItem !== "" ? (
          <div>
            <div className="title" style={{ margin: 10 }}>
              <img
                src={
                  "/img/item/" +
                  allItems["data"][this.state.selectedItem]["image"]["full"]
                }
                alt="item icon"
              />
              <div className="name">
                {allItems["data"][this.state.selectedItem].name}
              </div>
              <div className="cost">
                <div className="gold">
                  {allItems["data"][this.state.selectedItem]["gold"].total}
                </div>
              </div>
            </div>
            <div className="description" style={{ margin: 10 }}>
              <Markup
                content={allItems["data"][this.state.selectedItem].description}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
