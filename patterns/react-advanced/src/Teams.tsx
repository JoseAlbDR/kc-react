import { useEffect, useState } from 'react';

interface Team {
  id: string;
  full_name: string;
}

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('https://www.balldontlie.io/api/v1/teams');
        if (!response.ok) throw new Error('Error fetching teams');
        const { data } = await response.json();
        setTeams(data as Team[]);
      } catch (error) {
        console.log(error);
        if (error instanceof Error) setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div>Opps, there was an error!!!</div>}
      {!isLoading && !error && (
        <ul>
          {teams.map((team) => (
            <li key={team.id}>{team.full_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Teams;
