import { useEffect } from 'react';
import client from '../../api/client';
const tweets = [
  {
    content:
      "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
    userId: 1,
    updatedAt: '2021-03-15T18:23:57.579Z',
    id: 1,
  },
  {
    content:
      "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
    userId: 1,
    updatedAt: '2021-03-15T18:24:56.773Z',
    id: 2,
  },
];

const TweetsPage = () => {
  console.log(import.meta.env.VITE_BASE_URL);

  useEffect(() => {
    async function fetchData() {
      const tweets = await client('api/tweets');
      console.log(tweets);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {tweets.map((tweet) => (
          <li key={tweet.id} className="card lg:w-1/3">
            <p>{tweet.content}</p>
            <button className="btn">Click Me</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetsPage;