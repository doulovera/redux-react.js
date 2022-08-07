import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

export default function PokemonCard ({ name, avatar }) {
  return (
    <Card
      title={name}
      cover={<img src={avatar} alt={`Pokemon ${name}`} />}
      extra={<StarOutlined />}
    >
      <Meta 
        description="fire, magic"
      />
    </Card>
  )
}
