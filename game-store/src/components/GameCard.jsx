import { useNavigate } from 'react-router-dom';

function GameCard({ game }) {
  const navigate = useNavigate();

  const handleNavigateToDetail = (e) => {
    e.stopPropagation(); // Prevent triggering other click events
    console.log("first")
    navigate(`/game/${game._id}`);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard" onClick={handleNavigateToDetail}>
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${library.includes(game) ? 'active' : undefined}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation
            library.includes(game)
              ? handleRemoveFromLibrary(game)
              : handleAddToLibrary(game);
          }}
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a
          href="#"
          className="addBag"
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation
            handleAddToBag(game);
          }}
        >
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default GameCard;