import { styled } from 'styled-components'

export const NameProduct = styled.h6`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;

  color: var(--text-color-secondary);
`

export const BottomContent = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 0.8rem;

  strong {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 20px;

    color: var(--text-color-secondary);
  }

  .addRemove {
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 1.3rem;

    button {
      width: 4rem;
      height: 4rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: transparent;

      border: 1.5px solid #3f3f46;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      border-radius: 8px;

      &.subtract {
        transition: all 0.3s;

        &:hover {
          border-color: var(--brand-color-light);
        }
      }

      &.add {
        border: 1.5px solid #a855f7;
        filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
        border-radius: 8px;

        transition: all 0.4s;

        svg {
          color: var(--brand-color-light);
        }

        &:hover {
          background: var(--brand-color);
          border: none;
          svg {
            color: #fff;
          }
        }
      }
    }

    .qty {
      display: flex;
      align-items: center;

      font-weight: 700;
      font-size: 1.6rem;
      line-height: 16px;

      text-align: center;
      color: #f2f4f6;
    }
  }
`
