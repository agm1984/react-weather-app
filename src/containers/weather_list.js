import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends Component {
    renderWeather(cityData) {
        console.log(cityData.city)

        const name = cityData.city.name
        const convertKelvinToC = (k) => k - 273.15
        const temps = cityData.list.map((weather) => convertKelvinToC(weather.main.temp))
        const pressures = cityData.list.map((weather) => weather.main.pressure)
        const humidities = cityData.list.map((weather) => weather.main.humidity)
        const { lat, lon } = cityData.city.coord

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" units="C" /></td> 
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        )
    }

    render(cityData) {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// function mapStateToProps({ weather }) {
//     return { weather }
// }

const mapStateToProps = ({ weather }) => Object.assign({}, { weather })

export default connect(mapStateToProps)(WeatherList)