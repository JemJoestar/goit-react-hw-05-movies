import styled from "@emotion/styled";


export const StyledMovieDetails = styled.div`
    .text{
        font-size: 16px;
        font-weight: 400;
    }
    .movie-details{
        display: flex;
    }
    .go-back-link{
        background-color: #d8d6d6;
        border-radius:5px;
        margin-bottom: 40px;
        border: 1px solid #000000;
    }

    .genres{
        display: flex;
        gap: 10px;
    }

    .actor-profile{
        display: block;
    }

    .cast-item{
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 5px;
        padding-top: 10px;
        padding-bottom: 10px;

    }
    .cast-list{
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
    }

    .rewiew-item{
        border-bottom: 1px solid #000;
    }
`

