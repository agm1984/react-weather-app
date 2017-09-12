import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault()

        // Fetch weather data
        // add country here as 2nd param
        this.props.fetchWeather(this.state.term)
        this.setState({ term: '' }) //empty the input field
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function validate(values) {
    //values.name must match <Field name="name" />
    const errors = {}

    // if (!values.title) { errors.title = "Please enter a title." }
    // if (!values.categories) { errors.categories = "Please enter some categories." }
    // if (!values.content || values.content.length < 20) { errors.content = "Content must be at least 20 characters." }

    // If errors is empty, the form is OK to submit
    return errors
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchWeather }, dispatch)

// export default connect(null, mapDispatchToProps)(SearchBar)

export default reduxForm({
    validate,
    form: 'SearchWeatherForm'
})(
    connect(null, { fetchWeather })(SearchBar)
)