import { css, styled } from 'styled-components'

interface CartContainerProps {
  isCartOpen: boolean
}

export const CartContainer = styled.aside<CartContainerProps>`
  background-color: var(--surface-color);

  ${(props) =>
    props.isCartOpen &&
    css`
      opacity: 1;
      transform: translateX(0px);

      animation: fadeUp forwards 0.7s;
    `}
  @keyframes
    fadeUp {
    from {
      transform: translateX(800px);
    }
    to {
      transform: translateX(0px);
    }
  }
`

export const OpenCart = styled.button`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-end;

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: all 0.3s;
  span {
    width: 50px;
    height: 7px;
    border-radius: 4px;
    background-color: var(--brand-color-light);
  }

  &:hover {
    span {
      background-color: var(--brand-color);
    }
  }
`

export const CartHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--stroke-color);

  padding: 24px 16px 24px 36px;
  justify-content: space-between;

  p {
    color: var(--text-color-secondary);
    font-weight: 500;
    font-size: 2rem;
    line-height: 24px;

    span {
      font-weight: 700;
    }
  }

  button {
    background-color: transparent;
    border: none;

    cursor: pointer;

    svg {
      color: var(--close-button-color);
    }

    &:hover {
      svg {
        color: var(--stroke-color);
      }
    }
  }
`

export const CartProducts = styled.div`
  padding: 3.2rem;

  height: 50.6rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 46px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    color: #09090b;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--stroke-color);
    border-radius: 8rem;
  }

  .cart-product {
    display: flex;
    justify-content: space-between;
    gap: 2.4rem;

    .cart-product-image {
      max-width: 104px;

      img {
        border-radius: 8px;

        object-fit: cover;
      }
    }

    .main {
      display: flex;

      flex-direction: column;
      gap: 1.5rem;

      width: 100%;
      max-width: 23.6rem;
    }
  }
`

export const BottomFixed = styled.div`
  padding: 3.2rem;
  border-top: 1px solid var(--stroke-color);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .total {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 2rem;
      line-height: 24px;
      color: var(--text-color-secondary);
    }

    strong {
      font-weight: 700;
      font-size: 2rem;
      line-height: 24px;
      color: var(--text-color-secondary);
    }
  }

  .cupom {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-end;

    input {
      width: 130px;
      background-color: transparent;
      border: none;
      color: var(--brand-color-light);
      outline: none;

      &:focus {
        color: #fff;
        border-bottom: 1px solid var(--brand-color-light);
      }

      &:fill {
        color: #fff;
      }

      &::placeholder {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 24px;

        color: var(--brand-color-light);
      }
    }
  }
`

export const BuyButton = styled.button`
  width: 100%;

  padding: 2rem 0px;

  background-color: var(--brand-color);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;

  font-weight: 500;
  font-size: 1.8rem;
  line-height: 24px;

  color: var(--text-color-primary);
  cursor: pointer;

  &:hover {
    background-color: var(--brand-color-light);
  }

  &::focus {
    outline: #fff;
  }
`
