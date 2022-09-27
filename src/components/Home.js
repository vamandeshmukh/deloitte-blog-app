
const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://i.pinimg.com/originals/43/38/f6/4338f68220a65f4f0cd411e891957fed.jpg")`,
                backgroundRepeat: `no-repeat`
            }} >
            <div style={{ minHeight: "100vh", textShadow: '2px 2px #cccccc' }} className="container">
                <p className="display-4 text-white pt-5">Deloitte React App</p>
                <p>Welcome to Deloitte ReactJS appication.</p>

            </div>
        </div >
    );
}

export default Home;