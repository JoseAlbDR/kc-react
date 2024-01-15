import Fetch from './Fetch';

interface Team {
  id: string;
  full_name: string;
}

const Teams = () => {
  return (
    <div>
      <Fetch<Team> name="Teams" url="https://www.balldontlie.io/api/v1/teams">
        {(teams) => (
          <ul>
            {teams.map((team) => (
              <li key={team.id}>{team.full_name}</li>
            ))}
          </ul>
        )}
      </Fetch>
    </div>
  );
};

export default Teams;
