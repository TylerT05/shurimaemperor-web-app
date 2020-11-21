import React from "react";
import allItems from "../data/en_US/item.json";

const ItemTree = ({ id }) => (
  <div>
    <img
      className="treeimg"
      src={"/img/item/" + allItems["data"][id]["image"]["full"]}
      style={{ width: 34 }}
      alt="item icon"
      data-toggle="tooltip"
      title="Haha"
    />
    {allItems["data"][id].depth != null && allItems["data"][id].depth > 1 ? (
      <div>
        <div className="branch single"></div>
        {allItems["data"][id]["from"].length === 3 ? (
          <div>
            <div className="row">
              <div className="branch single" style={{ marginRight: 0 }}></div>
              <div className="col-4 branch" style={{ margin: 0 }}></div>
              <div className="branch single" style={{ margin: 0 }}></div>
              <div className="col-4 branch" style={{ margin: 0 }}></div>
              <div className="branch single" style={{ marginLeft: 0 }}></div>
            </div>
            <div className="row">
              {allItems["data"][id]["from"].map((i) => (
                <div className="col-4">
                  <ItemTree id={i} />
                </div>
              ))}
            </div>
          </div>
        ) : allItems["data"][id]["from"].length === 2 ? (
          <div>
            <div className="row">
              <div className="branch single" style={{ marginRight: 0 }}></div>
              <div className="col-3 branch" style={{ margin: 0 }}></div>
              <div className="col-3 branch" style={{ margin: 0 }}></div>
              <div className="branch single" style={{ marginLeft: 0 }}></div>
            </div>
            <div className="row">
              {allItems["data"][id]["from"].map((i) => (
                <div className="col-6">
                  <ItemTree id={i} />
                </div>
              ))}
            </div>
          </div>
        ) : allItems["data"][id]["from"].length === 1 ? (
          <div>
            <div className="branch single"></div>
            {allItems["data"][id]["from"].map((i) => (
              <ItemTree id={i} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    ) : (
      ""
    )}
  </div>
);

export default ItemTree;
