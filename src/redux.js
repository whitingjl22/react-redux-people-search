import { createStore } from "redux"

//ACTIONS
export const EXAMPLE = () => ({})

///REDUCERS
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "EXAMPLE":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- EXAMPLE | state: ", state)
      console.log(" -- REDUCER -- EXAMPLE | action", action)
      return {}

    default:
      return state
  }
}

// Initial State
// Minimal representation of the data in the app
const initialState = {
  people: [
    {
      id: 1,
      name: "Charlie",
      city: "Milwaukee, WI",
      industry: "Technology",
      hobbies: "Making awesome React Apps",
      email: "charlie@charlie.com"
    },
    {
      id: 2,
      name: "Janel",
      city: "Milwaukee, WI",
      industry: "Sales",
      hobbies: "Watching Soap Operas and Drinking Wine",
      email: "janel@janel.com"
    },
    {
      id: 3,
      name: "Hank",
      city: "Milwaukee, WI",
      industry: "Retail",
      hobbies: "Hiking in the mountains",
      email: `hank@hank.com`
    },
    {
      id: 4,
      name: "Dan",
      city: "Milwaukee, WI",
      industry: "Finance",
      hobbies: "Hanging with my dog",
      email: "dan@dan.com"
    },
    {
      id: 5,
      name: "Libby",
      city: "Milwaukee, WI",
      industry: "Health Care",
      hobbies: "Fishing",
      email: "libby@libby.com"
    },
    {
      id: 6,
      name: "Henry",
      city: "Washington, DC",
      industry: "Government",
      hobbies: "Watching cable news",
      email: "henry@henry.com"
    },
    {
      id: 7,
      name: "Paula",
      city: "Milwaukee, WI",
      industry: "Investment",
      hobbies: "Camping",
      email: "paula@paula.com"
    },
    {
      id: 8,
      name: "Dimitri",
      city: "Milwaukee, WI",
      industry: "Computer Software",
      hobbies: "Programming",
      email: "dimitri@dimitri.com"
    }
  ]
}

// STORE -- store.js
export function configureStore(initialState = initialState) {
  // initialState = initialState | {}
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  console.log(store)
  return store
}

export const store = configureStore()
