import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

const FContainer = styled.footer`
  min-height: 50vh;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;

  @media ${breakpoint.device.tablet} {
    padding: 4rem 6rem;
  }
`;

const FBoxContainer = styled.div`
  display: grid;
  width: 100%;
  border-top: 1px solid #6a11cb;
  padding: 2rem 0;

  @media ${breakpoint.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoint.device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FBox = styled.div`
  font-family: "Poppins", sans-serif;
`;

const FBoxTitle = styled.p`
  font-weight: 600;
  margin-bottom: 6px;
  color: #6a11cb;
`;

const FBoxContent = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  // color: #6a11cb;
`;

function Footer() {
  const date = new Date().getFullYear();

  return (
    <FContainer>
      <FBoxContainer>
        <FBox>
          <FBoxTitle>Łukasz Kuś</FBoxTitle>
          <FBoxContent>&copy; {date} All Rights Reserved</FBoxContent>
        </FBox>
        <FBox>
          <FBoxTitle>Contact</FBoxTitle>
          <FBoxContent>email</FBoxContent>
        </FBox>
        <FBox>3</FBox>
      </FBoxContainer>
    </FContainer>
  );
}

export default Footer;
