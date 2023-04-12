import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.div`
  padding-inline: 2rem;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;

export const Grid = styled.div`
  padding: 4rem 0;

  @media ${breakpoint.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  @media ${breakpoint.desktop} {
    padding: 6rem 0;
  }

  .contact-text {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5;
    padding-bottom: 4rem;

    a {
      font-size: 1rem;
      font-weight: 400;
      color: var(--clr-middle);
      text-decoration: none;
      transition: 0.3s ease-in-out;

      :hover {
        color: var(--clr-light);
      }
    }
  }
`;

export const ContactForm = styled.form`
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    label {
      font-size: 1rem;
      font-weight: 200;
      color: var(--clr-light);
    }

    input,
    textarea {
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--clr-middle-2);
      padding: 1rem;
      font-family: var(--ff-main);
      font-size: 1.25rem;
      font-weight: 200;
      color: var(--clr-light);
      resize: vertical;

      &:focus {
        outline: none;
      }

      @media ${breakpoint.tablet} {
        font-size: 1.5rem;
      }
    }

    span {
      padding-bottom: 2rem;
      color: var(--clr-accentSecondary);
      font-weight: 200;
    }
  }

  button {
    font-family: var(--ff-main);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--clr-light);
    display: inline-flex;
    gap: 0.5rem;

    :hover {
      color: var(--clr-middle);
    }

    @media ${breakpoint.tablet} {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.5rem;

      @media ${breakpoint.tablet} {
        font-size: 1.875rem;
      }
    }
  }

  .success {
    display: block;
    padding-top: 2rem;
    font-weight: 200;
    color: var(--clr-accentPrimary);
  }

  .error {
    display: block;
    padding-top: 2rem;
    font-weight: 200;
    color: var(--clr-accentSecondary);
  }
`;
