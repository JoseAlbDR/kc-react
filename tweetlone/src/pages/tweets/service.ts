import client from '../../api/client';
import { Tweet } from './interfaces';

const tweetUrl = 'api/tweets';

export const getTweets = (): Promise<Tweet[]> => {
  return client(tweetUrl);
};

export const deleteTweet = (id: number) => {
  return client.delete(`${tweetUrl}/${id}`);
};