import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import StarButton from "./StarButton";

export default function PokemonCard ({ name, avatar, types, id, favorite }) {
  const dispatch = useDispatch();
  const typesString = types.map((type) => type.type.name).join(", ");

  const handleClick = () => dispatch(setFavorite({ pokemonId: id }));

  return (
    <Card
      title={name}
      cover={<img src={avatar} alt={`Pokemon ${name}`} />}
      extra={<StarButton onClick={handleClick} isFavorite={favorite} />}
    >
      <Meta 
        description={typesString}
      />
    </Card>
  )
}
