import styled from "styled-components";
import {
  Text as TextStyle,
  Label as LabelStyle
} from "../../styles/typography";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  min-width: 200px;
`;

export const Label = styled.h2`
  ${LabelStyle}
`;

export const Text = styled.h3`
  ${TextStyle}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
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
`;

export const ProductList = styled.div`
  border-bottom: none;
  background-color: ${({ theme }) => theme.colors.grayLight};
  padding: 0 16px;
  border-radius: 0 0 12px 12px;
`;
