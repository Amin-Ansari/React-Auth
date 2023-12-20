//Components
import ContainerFluid from "./ContainerFluid";
import Container from "./Container";

const ResponsiveContainer = (props) => {
  const { children } = props;
  return (
    <ContainerFluid>
      <Container>{children}</Container>
    </ContainerFluid>
  );
};

export default ResponsiveContainer;
