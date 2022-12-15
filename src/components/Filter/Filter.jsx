import { useContext } from "react";
import Context from "../../context/context";
import useToggle from "../../hooks/useToggle";
import { Fade as Hamburger } from "hamburger-react";

import { COLORS, portfolioItems } from "../../utils";

import { Button } from "../";
// import { Icon } from "../../subcomponents";

import {
  Wrapper,
  FilterWrapper,
  FilterBtn,
  ButtonsWrapper,
} from "./StyledFilter";

const Filter = () => {
  const { setPortfolioList, types, filterPortfolioList } = useContext(Context);
  const [showFilters, setShowFilters] = useToggle();

  const slide = {
    initial: { y: -50, opacity: 0 },
    slideIn: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Wrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.8,
          duration: 0.6,
        },
      }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}>
      <FilterWrapper>
        <FilterBtn onClick={setShowFilters}>
          <Hamburger
            toggled={showFilters}
            color={COLORS.light}
            size={20}
            direction="right"
          />
          <p>Filters</p>
        </FilterBtn>

        {showFilters && (
          <ButtonsWrapper
            onClick={setShowFilters}
            variants={slide}
            initial="initial"
            animate={showFilters ? "slideIn" : "initial"}>
            {types.map((type, index) => {
              return (
                <Button
                  click={() => filterPortfolioList(type)}
                  key={index}
                  label={type}
                />
              );
            })}
            <Button
              click={() => setPortfolioList(portfolioItems)}
              label="all"
            />
          </ButtonsWrapper>
        )}
      </FilterWrapper>
    </Wrapper>
  );
};

export default Filter;
