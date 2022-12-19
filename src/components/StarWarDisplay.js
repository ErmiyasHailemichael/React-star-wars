const StarWarDisplay = ({ name, model, manufacturer}) => {
  // console.log(starWarsData)
  return (
    <div className="list">
      <h3>{name}</h3>
      <h4>{model}</h4>
      <h4>{manufacturer}</h4>
    </div>
  );
};
export default StarWarDisplay;
