import withFetch from './withFetch';

interface Team {
  id: string;
  full_name: string;
}

const Teams = ({ data: teams }: { data: Team[] }) => {
  return (
    <div>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.full_name}</li>
        ))}
      </ul>
    </div>
  );
};

const TeamsWithFetch = withFetch({
  url: 'https://www.balldontlie.io/api/v1/teams',
})(Teams);

export default TeamsWithFetch;
