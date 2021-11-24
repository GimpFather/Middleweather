import React, { useState } from 'react';
import { IoChevronBackCircleOutline } from 'react-icons/io5'

const api = {
    key: "a831ed50bd45dd33921bc296f9ab759d",
    base: "https://api.openweathermap.org/data/2.5/"
}

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDay();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

const Hero = () => {
    return (
        <div className="
        pt-16 pb-16
        w-screen h-screen
        flex flex-col
        bg-background--snow__night bg-cover bg-fixed
        text-white shadow-lg justify-center font-Libre">
            <MainCard></MainCard>
            {/* <SmallCard></SmallCard>
            <ArtCard></ArtCard> */}
        </div>
    )
};


const MainCard = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(result => result.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
        }
    }
    return (
        <div className="
        bg-gray-200 opacity-80
        w-2/5
        m-8 
        shadow-2xl border-2 rounded-xl border-gray-900
        text-center text-gray-900 ">
            <div className="m-4 flex flex-col justify-center">
                {(typeof weather.main === "undefined") ? (
                    <div className = "opacity-100">
                        <input
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                        type = "text"
                        placeholder="Type your city..."
                        className="card-block">
                        </input>
                    </div>
                ) : ('')}
                {(typeof weather.main != "undefined") ? (
                <div className = "grid justify-items-center">
                    <p className="card-block text-3xl">{weather.name}, {weather.sys.country}</p>
                    <div className="flex flex-row justify-items-stretch">
                        <p className="card-block">Today is very "{weather.weather[0].main}y" day.</p>
                        <p className="card-block">You can expcept around {Math.round(weather.main.temp)}&#176;C.</p>
                    </div>
                    <p className="card-block">You should take some heavy armor - around 18AC.
                    Shield is also a good idea, against windy snowflakes.</p>
                    <p className="card-block">The author of the art is: Heather Hood</p>
                </div>
                ) : ('')}
            </div>
        </div>
    )
};

const ResetButton = ({icon}) => {
    return (
        <div>
            <div className="hero-icon group">
                {icon}
            </div>
        </div>
    )
};

export default Hero;