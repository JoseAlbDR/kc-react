import Fetch from './Fetch';

interface Player {
  id: string;
  first_name: string;
  last_name: string;
}

const Players = () => {
  return (
    <div>
      <Fetch<Player>
        name="Players"
        url="https://www.balldontlie.io/api/v1/players"
      >
        {(players) => (
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                {player.first_name} {player.last_name}
              </li>
            ))}
          </ul>
        )}
      </Fetch>
    </div>
  );
};

export default Players;
