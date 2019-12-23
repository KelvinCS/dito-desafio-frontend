import styled from "styled-components";
import {
  Text as TextStyle,
  Label as LabelStyle
} from "../../styles/typography";

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const Label = styled.h2`
  ${LabelStyle}
`;

export const Text = styled.h3`
  ${TextStyle}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid #eee;

  :last-child {
    border-bottom: none;
  }
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
`;

export const ProductList = styled.div`
  border-bottom: none;
  background-color: ${({ theme }) => theme.colors.grayLight};
  padding: 0 16px;
  border-radius: 0 0 6px 6px;
`;
