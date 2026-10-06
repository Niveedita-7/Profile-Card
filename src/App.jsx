import "./App.css";

// ProfileCard component
function ProfileCard({ name, image, description }) {
    return (
        <div className="profile-card">

            <div className="card-header">
                ★ PLAYER PROFILE ★
            </div>

            <img
                src={image}
                alt={name}
                className="profile-image"
            />

            <h2>{name}</h2>

            <p className="description">
                {description}
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IKqAMrfu8LJOm7jSfzRkn53TSIvubbIKOHkcWZmOBA&s=10"
                description="MCA student who loves technology, data analytics and building cool projects."
            />

        </div>
    );
}

export default App;