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
    return (
        <div className="
        bg-gray-200 opacity-80
        w-2/5 h-2/6 
        m-8 
        shadow-2xl border-4 rounded-xl
        text-center text-gray-900 ">
            <div className="m-4 flex flex-col justify-center">
                <p className="text-4xl">Cracow - Poland</p>
                <br/>
                <p className="text-xl">Today is very snowy day. You can except around 5&#176;.</p>
                <br/>
                <p>You should take some heavy armor - around 18AC.</p>
                <p>Shield is also a good idea, against windy snowflakes.</p>
                <br/>
                <p>The author of the art is: Heather Hood</p>
            </div>
        </div>
    )
};

// const SmallCard = () => {
//     return (
//         <div className="
//         bg-gray-200 opacity-80
//         w-1/3 h-1/6 
//         m-8 
//         shadow-2xl border-4 rounded-xl
//         text-center text-gray-900">
            
//         </div>
//     )
// };

// const ArtCard = () => {
//     return (
//         <div className="
//         bg-gray-200 opacity-80
//         w-1/3 h-1/6 
//         m-8 
//         shadow-2xl border-4 rounded-xl
//         text-center text-gray-900">
//             <p>Author of the image is: Heather Hood</p>
//         </div>
//     )
// };

const CityAndStatus = () => {
    return (
        <div className = "text-gray-600">
            <div className = "flex text-4xl px-4 justify-center">
                <p className ="px-2">Cracow</p>
                <p className ="px-2">4&#176;</p>
                <p className ="px-2">Snowy</p>
            </div>
        </div>
    )
};
export default Hero;