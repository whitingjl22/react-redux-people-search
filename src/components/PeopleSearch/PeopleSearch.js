import React from "react"
import "./PeopleSearch.css"

import { connect } from "react-redux"
import { Link } from "react-router-dom"

class PeopleSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log("people search page PROPS:", this.props)
    console.log("people search page STATE:", this.state)

    return (
      <div className="main-container">
        <h1>People Search</h1>
        <input
          type="text"
          placeholder="Search.."
          name="searchField"
          value={this.state.searchField}
          onChange={this.handleChange}
        />
        <div className="flex-container">
          <div className="people-container">
            <h5>Results</h5>
            {this.props.people
              .filter((person) => person.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
              .map((person, index) => {
                return (
                  <li key={index}>
                    <Link to={`/profile/${person.id}`}>{person.name}</Link>
                  </li>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  people: state.people
})

const mapDispatchToProps = (dispatch) => ({
  // Not Needed For This Component
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleSearch)
