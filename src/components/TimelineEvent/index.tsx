import React from "react";
import {
  Container,
  Content,
  Header,
  ProductList,
  Text,
  Label,
  Row
} from "./styled";

interface Props {
  timestamp: Date | String;
  location: string;
  total: number;
  products: Array<{
    name: string;
    price: number;
  }>;
}

const TimelineEvent = ({ location, total, products }: Props) => (
  <Container>
    <Content>
      <Header>
        <Text>{location}</Text>
        <Text>{total}</Text>
      </Header>
      <ProductList>
        <Row>
          <Label>Nome</Label>
          <Label>Preço</Label>
        </Row>
        {products.map(({ name, price }) => (
          <Row>
            <Text>{name}</Text>
            <Text>{price}</Text>
          </Row>
        ))}
      </ProductList>
    </Content>
  </Container>
);

export default TimelineEvent;
