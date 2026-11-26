import React from 'react';

// --- Game Data with External URLs ---
const games = [
    {
        id: 1,
        title: "Guessing Game",
        description: "A number guessing challenge to test your intuition and logic.",
        url: "http://leeguessinggame.netlify.app",
        type: "Puzzle",
        image: "https://media.istockphoto.com/id/2193308100/photo/magnifying-glass-in-scattered-numbers.webp?a=1&b=1&s=612x612&w=0&k=20&c=LYsZhNu5umyfjsKdyT9NmZoKPxVh0FCC9iCQ2zz6_Gw=",
    },
    {
        id: 2,
        title: "Classic Snake Game",
        description: "The retro arcade classic! Grow your snake without crashing into walls or yourself.",
        url: "http://leesnakegameboard.netlify.app",
        type: "Arcade",
        image: "https://media.istockphoto.com/id/690292606/photo/snake.webp?a=1&b=1&s=612x612&w=0&k=20&c=unk74PBh6_uvpKTE6H9AsYa55aBKIFre1XTirVGx1rQ=",
    },
];

// --- Utility: Icon for the "Start Play" button (Arrow) ---
const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3-5a1 1 0 011-1h1.586l-2.293-2.293a1 1 0 111.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L8.586 12H7a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);

// --- Game Card Component ---
const GameCard = ({ game }) => {
    // Function to handle redirection
    const handleStartPlay = () => {
        // Use window.open to redirect the user to the external URL in a new tab
        window.open(game.url, '_self', 'noopener,noreferrer');
    };

    return (
        <div
            className="
                bg-BgCard border border-CardBorderColor rounded-2xl shadow-xl
                overflow-hidden transition-all duration-300
                hover:shadow-2xl hover:border-blue-500
                flex flex-col h-full transform hover:scale-[1.01] cursor-pointer
            "
        >
            {/* Image Section */}
            <div className="relative w-full h-65 overflow-hidden bg-BgColor">
                <img
                    src={game.image}
                    alt={`${game.title} Preview`}
                    className="w-full h-[300px] object-cover"
                    // Fallback in case image fails
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/600x400/94a3b8/ffffff?text=Game+Image";
                    }}
                />
            </div>

            {/* Content Section */}
            <div style={{fontFamily : 'sans-serif'}} className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold head-HeadColor leading-tight">
                        {game.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-CardColor text-TextColor">
                        {game.type}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-TextColor mb-6 flex-grow">
                    {game.description}
                </p>

                {/* Action Button */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <button
                        onClick={handleStartPlay}
                        className="
                            w-full flex items-center justify-center px-4 py-3 cursor-pointer border border-transparent
                            text-sm font-bold rounded-xl text-white bg-CardColor
                            hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:FocusColor
                            transition duration-150 ease-in-out shadow-lg shadow-blue-500/50
                        "
                    >
                        Start Play
                        <PlayIcon />
                    </button>

                </div>
            </div>
        </div>
    );
};

// --- Main Application Component (GameSection) ---
const GameSection = () => {
    return (
        <div style={{fontFamily: 'sans-serif'}} className="min-h-screen bg-BgColor p-6 sm:p-12 font-[Inter]">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-4x font-extrabold head-HeadColor mb-3">
                    Special Games designed for play
                </h1>
                <p className="text-sm text-TextColor max-w-2xl mx-auto">
                    Did you feel like bore? We have a exaited list of games. Click **Start Play** to launch the demo in a new window.
                </p>
            </header>

            {/* Responsive Grid Container */}
            <div
                className="
                    grid gap-8
                    sm:grid-cols-2    /* 2 columns on small screens (tablets) */
                    lg:grid-cols-2    /* 2 columns on large screens (desktops) */
                    max-w-4xl mx-auto
                "
            >
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default GameSection;