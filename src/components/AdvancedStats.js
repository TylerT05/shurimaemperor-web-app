import React from "react";
import champions from "../data/en_US/championFull.json";
import { FaCheck } from "react-icons/fa";

const AdvancedStats = ({
  name,
  teams,
  participantsTeam1,
  participantsTeam2,
}) => (
  <table className="card-text table table-dark table-striped small">
    <thead>
      <tr>
        <th className="text-left">Combat</th>
        {participantsTeam1.map((p) => (
          <th>
            {p.summonerName === name ? (
              <img
                className="rounded-circle bg-warning"
                src={"/img/champion/" + champions.keys[p.championId] + ".png"}
                width={40}
                style={{
                  padding: 2,
                }}
                alt="champion icon"
              />
            ) : (
              <img
                className="rounded-circle bg-primary"
                src={"/img/champion/" + champions.keys[p.championId] + ".png"}
                width={40}
                style={{
                  padding: 2,
                }}
                alt="champion icon"
              />
            )}
          </th>
        ))}
        {participantsTeam2.map((p) => (
          <th>
            {p.summonerName === name ? (
              <img
                className="rounded-circle bg-warning"
                src={"/img/champion/" + champions.keys[p.championId] + ".png"}
                width={40}
                style={{
                  padding: 2,
                }}
                alt="champion icon"
              />
            ) : (
              <img
                className="rounded-circle bg-danger"
                src={"/img/champion/" + champions.keys[p.championId] + ".png"}
                width={40}
                style={{
                  padding: 2,
                }}
                alt="champion icon"
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-left">KDA</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.kills}/{p.stats.deaths}/{p.stats.assists}
              </p>
            ) : (
              <p>
                {p.stats.kills}/{p.stats.deaths}/{p.stats.assists}
              </p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.kills}/{p.stats.deaths}/{p.stats.assists}
              </p>
            ) : (
              <p>
                {p.stats.kills}/{p.stats.deaths}/{p.stats.assists}
              </p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Largest Killing Spree</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.largestKillingSpree}</p>
            ) : (
              <p>{p.stats.largestKillingSpree}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.largestKillingSpree}</p>
            ) : (
              <p>{p.stats.largestKillingSpree}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Largest Multi Kill</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.largestMultiKill}</p>
            ) : (
              <p>{p.stats.largestMultiKill}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.largestMultiKill}</p>
            ) : (
              <p>{p.stats.largestMultiKill}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">First Blood Kill</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.stats.firstBloodKill ? (
              p.summonerName === name ? (
                <FaCheck className="text-warning"></FaCheck>
              ) : (
                <FaCheck></FaCheck>
              )
            ) : (
              ""
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.stats.firstBloodKill ? (
              p.summonerName === name ? (
                <FaCheck className="text-warning"></FaCheck>
              ) : (
                <FaCheck></FaCheck>
              )
            ) : (
              ""
            )}
          </td>
        ))}
      </tr>
    </tbody>
    <thead>
      <tr>
        <th className="text-left">Damage Dealt</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-left">Total Dmg To Champions</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Physical Dmg To Champions</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.physicalDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.physicalDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.physicalDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.physicalDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Magic Dmg To Champions</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.magicDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.magicDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.magicDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.magicDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">True Dmg To Champions</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.trueDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.trueDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.trueDamageDealtToChampions.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.trueDamageDealtToChampions.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Total Dmg</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Physical Dmg</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.physicalDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.physicalDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.physicalDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.physicalDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Magic Dmg</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.magicDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.magicDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.magicDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.magicDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">True Dmg</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.trueDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.trueDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.trueDamageDealt.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.trueDamageDealt.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Largest Critical Strike</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.largestCriticalStrike.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.largestCriticalStrike.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.largestCriticalStrike.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.largestCriticalStrike.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Total Dmg To Objectives</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.damageDealtToObjectives.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.damageDealtToObjectives.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.damageDealtToObjectives.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.damageDealtToObjectives.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Total Dmg To Turrets</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.damageDealtToTurrets.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.damageDealtToTurrets.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.damageDealtToTurrets.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.damageDealtToTurrets.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
    </tbody>
    <thead>
      <tr>
        <th className="text-left">Defensive Damage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-left">Dmg Healed</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalHeal.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalHeal.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalHeal.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalHeal.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Dmg Taken</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.totalDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.totalDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Physical Dmg Taken</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.physicalDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.physicalDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.physicalDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.physicalDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Magic Dmg Taken</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.magicalDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.magicalDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.magicalDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.magicalDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">True Dmg Taken</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.trueDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.trueDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.trueDamageTaken.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.trueDamageTaken.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Self Mitigated Dmg</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.damageSelfMitigated.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.damageSelfMitigated.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.damageSelfMitigated.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.damageSelfMitigated.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
    </tbody>
    <thead>
      <tr>
        <th className="text-left">Vision</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-left">Vision Score</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.visionScore}</p>
            ) : (
              <p>{p.stats.visionScore}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.visionScore}</p>
            ) : (
              <p>{p.stats.visionScore}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Wards Placed</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.wardsPlaced}</p>
            ) : (
              <p>{p.stats.wardsPlaced}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.wardsPlaced}</p>
            ) : (
              <p>{p.stats.wardsPlaced}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Wards Destroyed</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.wardsKilled}</p>
            ) : (
              <p>{p.stats.wardsKilled}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.wardsKilled}</p>
            ) : (
              <p>{p.stats.wardsKilled}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Control Wards Purchased</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.visionWardsBoughtInGame}</p>
            ) : (
              <p>{p.stats.visionWardsBoughtInGame}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.visionWardsBoughtInGame}</p>
            ) : (
              <p>{p.stats.visionWardsBoughtInGame}</p>
            )}
          </td>
        ))}
      </tr>
    </tbody>
    <thead>
      <tr>
        <th className="text-left">Income</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-left">Gold Earned</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.goldEarned.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.goldEarned.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.goldEarned.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.goldEarned.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Gold Spent</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.goldSpent.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.goldSpent.toLocaleString()}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.goldSpent.toLocaleString()}
              </p>
            ) : (
              <p>{p.stats.goldSpent.toLocaleString()}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Minions Killed</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.totalMinionsKilled}</p>
            ) : (
              <p>{p.stats.totalMinionsKilled}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.totalMinionsKilled}</p>
            ) : (
              <p>{p.stats.totalMinionsKilled}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Neutral Minions Killed (NMK)</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.neutralMinionsKilled}</p>
            ) : (
              <p>{p.stats.neutralMinionsKilled}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.neutralMinionsKilled}</p>
            ) : (
              <p>{p.stats.neutralMinionsKilled}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">NMK in Team Jng</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.neutralMinionsKilledTeamJungle}
              </p>
            ) : (
              <p>{p.stats.neutralMinionsKilledTeamJungle}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.neutralMinionsKilledTeamJungle}
              </p>
            ) : (
              <p>{p.stats.neutralMinionsKilledTeamJungle}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">NMK in Enemy Jng</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.neutralMinionsKilledEnemyJungle}
              </p>
            ) : (
              <p>{p.stats.neutralMinionsKilledEnemyJungle}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">
                {p.stats.neutralMinionsKilledEnemyJungle}
              </p>
            ) : (
              <p>{p.stats.neutralMinionsKilledEnemyJungle}</p>
            )}
          </td>
        ))}
      </tr>
    </tbody>
    <thead>
      <tr>
        <th className="text-left">Objectives</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-left">Towers Destroyed</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.turretKills}</p>
            ) : (
              <p>{p.stats.turretKills}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.turretKills}</p>
            ) : (
              <p>{p.stats.turretKills}</p>
            )}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-left">Inhibitors Destroyed</td>
        {participantsTeam1.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.inhibitorKills}</p>
            ) : (
              <p>{p.stats.inhibitorKills}</p>
            )}
          </td>
        ))}
        {participantsTeam2.map((p) => (
          <td>
            {p.summonerName === name ? (
              <p className="text-warning">{p.stats.inhibitorKills}</p>
            ) : (
              <p>{p.stats.inhibitorKills}</p>
            )}
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);
export default AdvancedStats;
