import { useEffect, useState, Dispatch, SetStateAction } from 'react';

import { deleteTweet, getTweets } from './service';
import { Tweet } from './interfaces';
import Layout from '../../components/layout/Layout';

// const tweets: Tweet[] = [
// {
//   content:
//     "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
//   userId: 1,
//   updatedAt: '2021-03-15T18:23:57.579Z',
//   id: 1,
// },
// {
//   content:
//     "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
//   userId: 1,
//   updatedAt: '2021-03-15T18:24:56.773Z',
//   id: 2,
// },
// ];

const TweetsPage = ({
  onLogout,
  isLogged,
}: {
  onLogout: Dispatch<SetStateAction<boolean>>;
  isLogged: boolean;
}) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTweets(await getTweets());
    };
    fetchData();
  }, []);

  const handleDeleteTweet = async (id: number) => {
    await deleteTweet(id);
  };

  return (
    <Layout title="Tweetlon" onLogout={onLogout} isLogged={isLogged}>
      <div style={{ width: '90vw', margin: '0 auto' }}>
        {tweets.length ? (
          <ul className="flex flex-wrap gap-2 justify-center">
            {tweets.map((tweet) => (
              <li key={tweet.id} className="card">
                <p>{tweet.content}</p>
                <button
                  onClick={() => handleDeleteTweet(tweet.id)}
                  className="btn"
                >
                  Delete Tweet
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <button className="btn">Be the first</button>
        )}
      </div>
    </Layout>
  );
};

export default TweetsPage;
