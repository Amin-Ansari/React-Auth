//Components
import ContainerFluid from "./ContainerFluid";
import Container from "./Container";

const ResponsiveContainer = (props) => {
  const { children, className } = props;
  return (
    <ContainerFluid className={className}>
      <Container>{children}</Container>
    </ContainerFluid>
  );
};

export default ResponsiveContainer;
