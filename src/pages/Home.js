import CurrentDate from "../components/CurrentDate";

const Home = () => {


    const handleClick = () => {
        console.log("Hello!");
    }

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <CurrentDate />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;