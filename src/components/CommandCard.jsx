function CommandCard ({command , onToggleFavourite , isFavourite}){
    return (
        // CommandCard.jsx return
<div className="command-card">
  <div className="command-card-content">
    <p className="command-name">{command.name}</p>
    <p className="command-description">{command.description}</p>
  </div>
  <button className="favourite-button" onClick={() => onToggleFavourite(command.id)}>
    {isFavourite ? '⭐' : '☆'}
  </button>
</div>
    )
}
export default CommandCard;