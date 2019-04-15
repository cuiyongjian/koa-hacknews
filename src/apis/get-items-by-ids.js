import axios from 'axios'
import getItemById from './get-item-by-id'

export default async function (ids) {
  return Promise.all(ids.map(id => {
    return getItemById(id)
  }))
}
