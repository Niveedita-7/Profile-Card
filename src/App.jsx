import "./App.css";

// ProfileCard component
function ProfileCard(props) {
    return (
        <div className="profile-card">

            <div className="card-header">
                ★ PLAYER PROFILE ★
            </div>

            <img
                src={props.image}
                alt={props.name}
                className="profile-image"
            />

            <h2>{props.name}</h2>

            <p className="description">
                {props.description}
            </p>

            <div className="card-footer">
                ♥ PROFILE LOADED ♥
            </div>

        </div>
    );
}


// Main App component
function App() {
    return (
        <div className="app">

            <h1 className="main-title">
                PIXEL WORLD
            </h1>

            <ProfileCard
                name="Niveedita"
                image={`${import.meta.env.BASE_URL}profile.jpg`}
                description="MCA student who loves technology, data analytics and building cool projects."
            />

        </div>
    );
}

export default App;