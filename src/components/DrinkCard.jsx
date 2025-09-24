const DrinkCard = ({ drink }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        flex: "1",
        minWidth: "200px",
        maxWidth: "300px",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
        }}
      >
        {drink.name}
      </p>
      {drink.ingredients.map((ingredient) => (
        <div>{ingredient}</div>
      ))}
      -{drink.notes}
    </div>
  );
};

export default DrinkCard;
