import { styled } from 'styled-components'

export const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`

export const Product = styled.div`
  background-color: white;

  width: 27.3rem;

  border-radius: 10px;

  .product-image {
    background-color: var(--text-color-secondary);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    border-radius: 10px;

    img {
      max-width: 100%;
      display: block;

      object-fit: cover;
    }
  }

  .product-info {
    margin-top: 8px;
    padding: 2rem;
    padding-top: 1.3rem;

    h4 {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 20px;
    }

    > div {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 20px;
      }

      button {
        width: 5rem;
        padding: 0.5rem 0;
        border-radius: 5px;
        border: none;
        background-color: var(--brand-color-light);
        color: #fff;

        cursor: pointer;

        &:hover {
          background-color: var(--brand-color);
        }
      }
    }
  }
`
