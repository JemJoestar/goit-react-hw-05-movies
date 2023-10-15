import styled from '@emotion/styled';

export const StyledMovieList = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;

  .movie-item {
    width: 300px;
    border: 1px solid #000000;
    text-decoration: none;
  }
`;
