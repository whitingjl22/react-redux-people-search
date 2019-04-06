import React from "react"
import { connect } from "react-redux"

class PeopleDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log("people details page PROPS:", this.props.match.params.id)
    console.log("people details page STATE:", this.state)

    const id = parseInt(this.props.match.params.id)
    const person = this.props.people.find((person) => person.id === id)

    return (
      <div>
        <h1>Person Details</h1>
        <div>
          <p>Name: {person.name}</p>
          <p>Email: {person.email}</p>
          <p>Hobbies: {person.hobbies}</p>
          <p>Industry: {person.industry}</p>
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
)(PeopleDetails)
