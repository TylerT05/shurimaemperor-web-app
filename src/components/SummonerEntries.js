import React from "react";

const SummonerEntries = ({ entries }) => (
  <div
    className="card shadow bg-dark"
    style={{
      marginTop: 10,
      marginBottom: 10,
    }}
  >
    <div className="card-body text-center">
      <table className="card-text table table-dark table-striped small">
        <tbody>
          {entries === null ? (
            <tr>
              <td>
                <div className="row" style={{ height: 100 }}>
                  <div className="col-3">
                    <img
                      src={"/ranked-emblems/unranked.png"}
                      style={{ width: 100 }}
                      alt="tier icon"
                    />
                  </div>
                  <div className="col-9">
                    <h4 style={{ marginTop: 34 }}>Unranked</h4>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            entries.map((entry, key) => (
              <tr>
                <td>
                  <div className="row" style={{ height: 100 }}>
                    <div className="col-3">
                      <img
                        src={
                          "/ranked-emblems/Emblem_" +
                          entry.tier.charAt(0) +
                          entry.tier.slice(1).toLowerCase() +
                          ".png"
                        }
                        style={{ width: 80 }}
                        alt="tier icon"
                      />
                    </div>
                    <div className="col-9">
                      {entry.queueType === "RANKED_SOLO_5x5" ? (
                        <p>Ranked Solo/Duo</p>
                      ) : entry.queueType === "RANKED_FLEX_SR" ? (
                        <p>Ranked Team 5x5</p>
                      ) : (
                        ""
                      )}
                      <div className="row">
                        <div className="col">
                          <p>
                            {entry.tier.charAt(0) +
                              entry.tier.slice(1).toLowerCase()}{" "}
                            {entry.rank}
                          </p>
                        </div>
                        <div className="col">
                          <p>{entry.wins} Win</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p>{entry.leaguePoints} LP</p>
                        </div>
                        <div className="col">
                          <p>{entry.losses} Loss</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default SummonerEntries;
