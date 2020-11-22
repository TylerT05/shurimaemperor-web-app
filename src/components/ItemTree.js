import React, { Component } from "react";
import ItemDetail from "./ItemDetail";
import allItems from "../data/en_US/item.json";

export default class ItemTree extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      selectedItem: "",
      subSelectedItem: "",
      loadingPage: true,
    };
  }

  componentDidMount() {
    this.setState({
      selectedItem: this.props.selectedItem,
      subSelectedItem: this.props.selectedItem,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setState({
        selectedItem: this.props.selectedItem,
        subSelectedItem: this.props.selectedItem,
      });
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      subSelectedItem: e.target.id,
    });
  }

  render() {
    return (
      <div>
        <div className="rg-item-tree">
          <div className="treebox" style={{ marginTop: 10 }}>
            {this.state.selectedItem !== "" ? (
              <div>
                <button
                  style={{
                    padding: 0,
                    border: "none",
                    background: "none",
                  }}
                >
                  <img
                    className="treeimg"
                    id={this.state.selectedItem}
                    onClick={this.onClick}
                    src={
                      "/img/item/" +
                      allItems["data"][this.state.selectedItem]["image"]["full"]
                    }
                    style={{ width: 34 }}
                    alt="item icon"
                    data-toggle="tooltip"
                    title="Haha"
                  />
                </button>
                {allItems["data"][this.state.selectedItem]["from"] != null &&
                allItems["data"][this.state.selectedItem]["from"].length ===
                  3 ? (
                  <div>
                    <div className="branch single"></div>
                    <div className="row">
                      <div
                        className="branch single"
                        style={{ marginRight: 0 }}
                      ></div>
                      <div className="col-4 branch" style={{ margin: 0 }}></div>
                      <div
                        className="branch single"
                        style={{ margin: 0 }}
                      ></div>
                      <div className="col-4 branch" style={{ margin: 0 }}></div>
                      <div
                        className="branch single"
                        style={{ marginLeft: 0 }}
                      ></div>
                    </div>
                    <div className="row">
                      {allItems["data"][this.state.selectedItem]["from"].map(
                        (i) => (
                          <div className="col-4">
                            <button
                              style={{
                                padding: 0,
                                border: "none",
                                background: "none",
                              }}
                            >
                              <img
                                className="treeimg"
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                style={{ width: 34 }}
                                alt="item icon"
                                data-toggle="tooltip"
                                title="Haha"
                              />
                            </button>
                            {allItems["data"][i]["from"] != null &&
                            allItems["data"][i]["from"].length === 3 ? (
                              <div>
                                <div className="branch single"></div>
                                <div className="row">
                                  <div
                                    className="branch single"
                                    style={{ marginRight: 0 }}
                                  ></div>
                                  <div
                                    className="col-4 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="branch single"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="col-4 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="branch single"
                                    style={{ marginLeft: 0 }}
                                  ></div>
                                </div>
                                <div className="row">
                                  {allItems["data"][i]["from"].map((ii) => (
                                    <div className="col-4">
                                      <button
                                        style={{
                                          padding: 0,
                                          border: "none",
                                          background: "none",
                                        }}
                                      >
                                        <img
                                          className="treeimg"
                                          id={ii}
                                          onClick={this.onClick}
                                          src={
                                            "/img/item/" +
                                            allItems["data"][ii]["image"][
                                              "full"
                                            ]
                                          }
                                          style={{ width: 34 }}
                                          alt="item icon"
                                          data-toggle="tooltip"
                                          title="Haha"
                                        />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : allItems["data"][i]["from"] != null &&
                              allItems["data"][i]["from"].length === 2 ? (
                              <div>
                                <div className="branch single"></div>
                                <div className="row">
                                  <div
                                    className="branch single"
                                    style={{ marginRight: 0 }}
                                  ></div>
                                  <div
                                    className="col-3 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="col-3 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="branch single"
                                    style={{ marginLeft: 0 }}
                                  ></div>
                                </div>
                                <div className="row">
                                  {allItems["data"][i]["from"].map((ii) => (
                                    <div className="col-6">
                                      <button
                                        style={{
                                          padding: 0,
                                          border: "none",
                                          background: "none",
                                        }}
                                      >
                                        <img
                                          className="treeimg"
                                          id={ii}
                                          onClick={this.onClick}
                                          src={
                                            "/img/item/" +
                                            allItems["data"][ii]["image"][
                                              "full"
                                            ]
                                          }
                                          style={{ width: 34 }}
                                          alt="item icon"
                                          data-toggle="tooltip"
                                          title="Haha"
                                        />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : allItems["data"][i]["from"] != null &&
                              allItems["data"][i]["from"].length === 1 ? (
                              <div>
                                <div className="branch single"></div>
                                <div className="branch single"></div>
                                {allItems["data"][i]["from"].map((ii) => (
                                  <button
                                    style={{
                                      padding: 0,
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <img
                                      className="treeimg"
                                      id={ii}
                                      onClick={this.onClick}
                                      src={
                                        "/img/item/" +
                                        allItems["data"][ii]["image"]["full"]
                                      }
                                      style={{ width: 34 }}
                                      alt="item icon"
                                      data-toggle="tooltip"
                                      title="Haha"
                                    />
                                  </button>
                                ))}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ) : allItems["data"][this.state.selectedItem]["from"] != null &&
                  allItems["data"][this.state.selectedItem]["from"].length ===
                    2 ? (
                  <div>
                    <div className="branch single"></div>
                    <div className="row">
                      <div
                        className="branch single"
                        style={{ marginRight: 0 }}
                      ></div>
                      <div className="col-3 branch" style={{ margin: 0 }}></div>
                      <div className="col-3 branch" style={{ margin: 0 }}></div>
                      <div
                        className="branch single"
                        style={{ marginLeft: 0 }}
                      ></div>
                    </div>
                    <div className="row">
                      {allItems["data"][this.state.selectedItem]["from"].map(
                        (i) => (
                          <div className="col-6">
                            <button
                              style={{
                                padding: 0,
                                border: "none",
                                background: "none",
                              }}
                            >
                              <img
                                className="treeimg"
                                id={i}
                                onClick={this.onClick}
                                src={
                                  "/img/item/" +
                                  allItems["data"][i]["image"]["full"]
                                }
                                style={{ width: 34 }}
                                alt="item icon"
                                data-toggle="tooltip"
                                title="Haha"
                              />
                            </button>
                            {allItems["data"][i]["from"] != null &&
                            allItems["data"][i]["from"].length === 3 ? (
                              <div>
                                <div className="branch single"></div>
                                <div className="row">
                                  <div
                                    className="branch single"
                                    style={{ marginRight: 0 }}
                                  ></div>
                                  <div
                                    className="col-4 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="branch single"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="col-4 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="branch single"
                                    style={{ marginLeft: 0 }}
                                  ></div>
                                </div>
                                <div className="row">
                                  {allItems["data"][i]["from"].map((ii) => (
                                    <div className="col-4">
                                      <button
                                        style={{
                                          padding: 0,
                                          border: "none",
                                          background: "none",
                                        }}
                                      >
                                        <img
                                          className="treeimg"
                                          id={ii}
                                          onClick={this.onClick}
                                          src={
                                            "/img/item/" +
                                            allItems["data"][ii]["image"][
                                              "full"
                                            ]
                                          }
                                          style={{ width: 34 }}
                                          alt="item icon"
                                          data-toggle="tooltip"
                                          title="Haha"
                                        />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : allItems["data"][i]["from"] != null &&
                              allItems["data"][i]["from"].length === 2 ? (
                              <div>
                                <div className="branch single"></div>
                                <div className="row">
                                  <div
                                    className="branch single"
                                    style={{ marginRight: 0 }}
                                  ></div>
                                  <div
                                    className="col-3 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="col-3 branch"
                                    style={{ margin: 0 }}
                                  ></div>
                                  <div
                                    className="branch single"
                                    style={{ marginLeft: 0 }}
                                  ></div>
                                </div>
                                <div className="row">
                                  {allItems["data"][i]["from"].map((ii) => (
                                    <div className="col-6">
                                      <button
                                        style={{
                                          padding: 0,
                                          border: "none",
                                          background: "none",
                                        }}
                                      >
                                        <img
                                          className="treeimg"
                                          id={ii}
                                          onClick={this.onClick}
                                          src={
                                            "/img/item/" +
                                            allItems["data"][ii]["image"][
                                              "full"
                                            ]
                                          }
                                          style={{ width: 34 }}
                                          alt="item icon"
                                          data-toggle="tooltip"
                                          title="Haha"
                                        />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : allItems["data"][i]["from"] != null &&
                              allItems["data"][i]["from"].length === 1 ? (
                              <div>
                                <div className="branch single"></div>
                                <div className="branch single"></div>
                                {allItems["data"][i]["from"].map((ii) => (
                                  <button
                                    style={{
                                      padding: 0,
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <img
                                      className="treeimg"
                                      id={ii}
                                      onClick={this.onClick}
                                      src={
                                        "/img/item/" +
                                        allItems["data"][ii]["image"]["full"]
                                      }
                                      style={{ width: 34 }}
                                      alt="item icon"
                                      data-toggle="tooltip"
                                      title="Haha"
                                    />
                                  </button>
                                ))}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ) : allItems["data"][this.state.selectedItem]["from"] != null &&
                  allItems["data"][this.state.selectedItem]["from"].length ===
                    1 ? (
                  <div>
                    <div className="branch single"></div>
                    <div className="branch single"></div>
                    {allItems["data"][this.state.selectedItem]["from"].map(
                      (i) => (
                        <div>
                          <button
                            style={{
                              padding: 0,
                              border: "none",
                              background: "none",
                            }}
                          >
                            <img
                              className="treeimg"
                              id={i}
                              onClick={this.onClick}
                              src={
                                "/img/item/" +
                                allItems["data"][i]["image"]["full"]
                              }
                              style={{ width: 34 }}
                              alt="item icon"
                              data-toggle="tooltip"
                              title="Haha"
                            />
                          </button>
                          {allItems["data"][i]["from"] != null &&
                          allItems["data"][i]["from"].length === 3 ? (
                            <div>
                              <div className="branch single"></div>
                              <div className="row">
                                <div
                                  className="branch single"
                                  style={{ marginRight: 0 }}
                                ></div>
                                <div
                                  className="col-4 branch"
                                  style={{ margin: 0 }}
                                ></div>
                                <div
                                  className="branch single"
                                  style={{ margin: 0 }}
                                ></div>
                                <div
                                  className="col-4 branch"
                                  style={{ margin: 0 }}
                                ></div>
                                <div
                                  className="branch single"
                                  style={{ marginLeft: 0 }}
                                ></div>
                              </div>
                              <div className="row">
                                {allItems["data"][i]["from"].map((ii) => (
                                  <div className="col-4">
                                    <button
                                      style={{
                                        padding: 0,
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <img
                                        className="treeimg"
                                        id={ii}
                                        onClick={this.onClick}
                                        src={
                                          "/img/item/" +
                                          allItems["data"][ii]["image"]["full"]
                                        }
                                        style={{ width: 34 }}
                                        alt="item icon"
                                        data-toggle="tooltip"
                                        title="Haha"
                                      />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : allItems["data"][i]["from"] != null &&
                            allItems["data"][i]["from"].length === 2 ? (
                            <div>
                              <div className="branch single"></div>
                              <div className="row">
                                <div
                                  className="branch single"
                                  style={{ marginRight: 0 }}
                                ></div>
                                <div
                                  className="col-3 branch"
                                  style={{ margin: 0 }}
                                ></div>
                                <div
                                  className="col-3 branch"
                                  style={{ margin: 0 }}
                                ></div>
                                <div
                                  className="branch single"
                                  style={{ marginLeft: 0 }}
                                ></div>
                              </div>
                              <div className="row">
                                {allItems["data"][i]["from"].map((ii) => (
                                  <div className="col-6">
                                    <button
                                      style={{
                                        padding: 0,
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <img
                                        className="treeimg"
                                        id={ii}
                                        onClick={this.onClick}
                                        src={
                                          "/img/item/" +
                                          allItems["data"][ii]["image"]["full"]
                                        }
                                        style={{ width: 34 }}
                                        alt="item icon"
                                        data-toggle="tooltip"
                                        title="Haha"
                                      />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : allItems["data"][i]["from"] != null &&
                            allItems["data"][i]["from"].length === 1 ? (
                            <div>
                              <div className="branch single"></div>
                              <div className="branch single"></div>
                              {allItems["data"][i]["from"].map((ii) => (
                                <button
                                  style={{
                                    padding: 0,
                                    border: "none",
                                    background: "none",
                                  }}
                                >
                                  <img
                                    className="treeimg"
                                    id={ii}
                                    onClick={this.onClick}
                                    src={
                                      "/img/item/" +
                                      allItems["data"][ii]["image"]["full"]
                                    }
                                    style={{ width: 34 }}
                                    alt="item icon"
                                    data-toggle="tooltip"
                                    title="Haha"
                                  />
                                </button>
                              ))}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <ItemDetail selectedItem={this.state.subSelectedItem} />
      </div>
    );
  }
}
