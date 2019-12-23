import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Header,
  ProductList,
  Text,
  Label,
  Row,
  HeaderItem
} from "./styled";
import { formatCurrency } from "../../lib";
import moment, { MomentInput } from "moment";
import { Place, Clock, Calendar, Money } from "./icons";

interface Props {
  timestamp: Date | String;
  location: string;

  products: Array<{
    name: string;
    price: number;
  }>;
}

const PurchaseInfo = ({ location, timestamp, products }: Props) => {
  const time = moment(timestamp as MomentInput);

  const hour = time.format("HH:mm");
  const date = time.format("DD/MM/YYYY");

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => products.reduce((sum, { price }) => sum + price, 0));
  }, [products]);

  return (
    <Container>
      <Content>
        <Header>
          <HeaderItem>
            <Calendar />
            <Text>{date}</Text>
          </HeaderItem>
          <HeaderItem>
            <Clock />
            <Text>{hour}</Text>
          </HeaderItem>
          <HeaderItem>
            <Place />
            <Text>{location}</Text>
          </HeaderItem>
          <HeaderItem>
            <Money />
            <Text>{formatCurrency(total)}</Text>
          </HeaderItem>
        </Header>
        <ProductList>
          <Row>
            <Label>Nome</Label>
            <Label>Preço</Label>
          </Row>
          {products.map(({ name, price }, index) => (
            <Row key={index}>
              <Text>{name}</Text>
              <Text>{formatCurrency(price)}</Text>
            </Row>
          ))}
        </ProductList>
      </Content>
    </Container>
  );
};

export default PurchaseInfo;
