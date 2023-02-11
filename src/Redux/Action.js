import { GET_LETTER, GET_RANDOM_WORD, SET_SCORE_NEGATIVE, SET_SCORE_POSITIVE, SET_TIME, SUBMIT_COUNT } from "./ActionType"

export const setScorepositive = () => {
  return {
    type: SET_SCORE_POSITIVE,
  }
}

export const setScorenegative = () => {
  return {
    type: SET_SCORE_NEGATIVE,
  }
}

export const randomWord = () => {
  const characters = 'asdflkjh;'

  function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let ans = result.trim();
    return ans;
  }

  let data = generateString(8);
  return {
    type: GET_RANDOM_WORD,
    payload: data
  }
}


export const getLetter = (data) => {
  return {
    type: GET_LETTER,
    payload: data
  }
}
export const countOfSubmit = () => {
  return {
    type: SUBMIT_COUNT
  }
}
export const setnewTime = (data) => {
  return {
    type: SET_TIME,
    payload: data
  }
}