import { Container, Image, Body, Title, Text, Button } from "./Card/Card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Image = function CardImage({ src, alt, ...restProps }) {
  return <Image src={src} alt={alt} {...restProps}></Image>;
};

Card.Body = function CardBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Button = function CardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
