import { usePupPlayersQuery } from "./pupBowlSlice";

export default function PupBowl() {
  const { data: players } = usePupPlayersQuery();

  return (
    <ul>
      {players &&
        players.data.players.map((player) => (
          <li key={player.id}>
            <h2>{player.name}</h2>
            <h3>{player.breed}</h3>
            <p>{player.status}</p>
            <img src={player.imgUrl} />
            <p>{player.teamId}</p>
          </li>
        ))}
    </ul>
  );
}
