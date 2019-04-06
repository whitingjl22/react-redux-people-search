import React from "react"
import PeopleSearch from "../components/PeopleSearch/PeopleSearch"
import PeopleDetails from "../components/PeopleDetails/PeopleDetails"

import { BrowserRouter, Route, Switch } from "react-router-dom"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PeopleSearch} />
            <Route exact path="/profile/:id" render={(props) => <PeopleDetails {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Container
