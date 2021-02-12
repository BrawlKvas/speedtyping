import * as axios from 'axios'

export const TextApi = {
  getText: (sentences) => {
    return axios.get(`https://baconipsum.com/api/?type=meat-and-filler&sentences=${sentences}`)
      .then(res => res.data[0])
  }
}