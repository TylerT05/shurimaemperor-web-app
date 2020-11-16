import React from "react";

const LeaderBoardSummoners = ({ entries, tier, index, server }) =>
  entries.map((entry, key) => (
    <tr>
      <td>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href={`/${server}/summonerdetail/${entry.summonerName}`}
        >
          <div className="row">
            <div className="col-1">
              <p>{++index}</p>
            </div>
            <div className="col-2 text-left">
              <p>{entry.summonerName}</p>
            </div>
            <div className="col-2">
              <p>{tier.charAt(0) + tier.slice(1).toLowerCase()} </p>
            </div>
            <div className="col-1">
              <p>{entry.rank}</p>
            </div>
            <div className="col-1">
              <p>{entry.leaguePoints}</p>
            </div>
            <div className="col">
              <div class="progress">
                <div
                  class="progress-bar bg-primary"
                  style={{
                    width:
                      (entry.wins * 100) / (entry.wins + entry.losses) + "%",
                  }}
                >
                  {entry.wins} win
                </div>
                <div
                  class="progress-bar bg-danger"
                  style={{
                    width:
                      (entry.losses * 100) / (entry.wins + entry.losses) + "%",
                  }}
                >
                  {entry.losses} loss
                </div>
              </div>
            </div>
            <div className="col-1">
              <p>
                {((entry.wins * 100) / (entry.wins + entry.losses)).toFixed(0)}%
              </p>
            </div>
          </div>
        </a>
      </td>
    </tr>
  ));

export default LeaderBoardSummoners;
