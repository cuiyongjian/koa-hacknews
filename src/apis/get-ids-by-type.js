import axios from 'axios'

export default async function(type) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
}
