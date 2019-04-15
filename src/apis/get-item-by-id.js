import axios from 'axios'


export default async function (id) {
  const res = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  return res.data
}
