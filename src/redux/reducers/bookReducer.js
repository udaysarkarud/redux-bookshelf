import book from '../../fakeData/books.json';

const initialState = {
    discover: book,
    readingList: [],
    finishedList: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_READING_LIST': {
            const newState = { ...state, readingList: [...state.readingList, action.payload] }
            return newState
        }
        case 'READING_FROM_READING_LIST': {
            const newState = { ...state, readingList: state.readingList.filter(book => book.id !== action.payload) }
            /* const newState = state.filter(book => book.id !== action.payload) */
            return newState
        }
        case 'ADD_TO_FINISHED_LIST':{
            const newState ={...state,finishedList:[...state.finishedList,action.payload],readingList: state.readingList.filter(book => book.id !== action.payload.id)}
            return newState
        }
        default:
            return state
    }
}

export default bookReducer;