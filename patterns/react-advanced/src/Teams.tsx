import { useEffect } from 'react';
const Teams = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetch();
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div>
      <h2>Teams</h2>
    </div>
  );
};

export default Teams;
