import styled from 'styled-components';

export const ReviewList = styled.ul`
 list-style: none;
 padding: 0;
`;

export const ReviewItem = styled.li`
 background-color: #f9f9f9;
 border-radius: 8px;
 margin-bottom: 20px;
 padding: 20px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ReviewAuthor = styled.h3`
 margin: 0 0 10px;
 font-size: 18px;
 font-weight: bold;
 color: #333;
`;

export const ReviewText = styled.p`
 margin: 0;
 font-size: 16px;
 color: #555;
`;