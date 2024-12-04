import '/Users/macbook/code/ga/labs/react-components-lab/src/WeatherForecast.css';

const Forecast = (props) => {
return(
<>
<section>
        <div className="weather">
            <h2>{props.forecasts.day}</h2>
            <img src={props.forecasts.img} alt={props.forecasts.imgAlt}  />
            <p><span>conditions: </span>{props.forecasts.conditions}</p>
            <p><span>time: </span>{props.forecasts.time}</p>
        </div>
</section>
</>
)
}

export default Forecast