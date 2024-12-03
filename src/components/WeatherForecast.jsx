import '/Users/macbook/code/ga/labs/react-components-lab/src/WeatherForecast.css';

const Forecast = (props) => {
return(
<>
<section>
        <div className="weather">
            <h2>{props.day}</h2>
            <img src="" alt="" />
            <p><span>conditions: </span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p>
        </div>
</section>
</>
)
}

export default Forecast