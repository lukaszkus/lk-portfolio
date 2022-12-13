import { useContext } from "react";
import Context from "../../context/context";
import useToggle from "../../hooks/useToggle";

import { COLORS, portfolioItems } from "../../utils";

import { Button } from "../";
import { Icon } from "../../subcomponents";

import { FilterWrapper, ButtonsWrapper, ShowFiltersBtn } from "./StyledFilter";

const Filter = () => {
  const { setPortfolioList, types, filterPortfolioList } = useContext(Context);
  const [showFilters, setShowFilters] = useToggle();

  const slide = {
    initial: { x: 50, opacity: 0 },
    slideIn: {
      x: 0,
      opacity: 1,
    },
  };

  const rotate = {
    initial: { rotate: 0 },
    rotate: { rotate: 90, transition: { ease: "easeInOut" } },
    hover: { scale: 1.2 },
  };

  return (
    <FilterWrapper
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
      {showFilters && (
        <ButtonsWrapper
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
          <Button click={() => setPortfolioList(portfolioItems)} label="all" />
        </ButtonsWrapper>
      )}

      <ShowFiltersBtn
        onClick={setShowFilters}
        variants={rotate}
        initial="initial"
        animate={showFilters ? "rotate" : "initial"}
        whileHover="hover">
        <Icon icon="filter" width="30px" height="30px" color={COLORS.light} />
      </ShowFiltersBtn>
    </FilterWrapper>
  );
};

export default Filter;
