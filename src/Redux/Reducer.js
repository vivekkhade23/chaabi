import { GET_LETTER, GET_RANDOM_WORD,  SET_SCORE_NEGATIVE, SET_SCORE_POSITIVE, SUBMIT_COUNT } from "./ActionType";

const Reducer = (state, { type, payload }) => {
    switch (type) {
case SET_SCORE_POSITIVE:
    return{
        ...state,
        score:state.score+5
    }
    case SET_SCORE_NEGATIVE:
    return{
        ...state,
        score:state.score-5
    }
case GET_RANDOM_WORD:
    return{
        ...state,
        letters:payload
    }
    case GET_LETTER:
        return{
            ...state,
            combination:payload
        }
        case SUBMIT_COUNT:
            return{
                ...state,
                submitCount:state.submitCount+1
            }
            case SUBMIT_COUNT:
                return{
                    ...state,
                    time:payload
                }
        default:
            return state;
    }
}

export default Reducer