import React from "react";
import moment from "moment";

import { Wrapper, Heading, Anchor, Properties } from "./styled";

const Item = ({
  title,
  points,
  url,
  author,
  created_at: createdAt,
  num_comments: commentsCount,
  objectID
}) => {
  return (
    <Wrapper>
      <Heading>
        <Anchor href={url}>{title}</Anchor>
      </Heading>
      <Properties>
        <li>
          <a href={`https://news.ycombinator.com/item?=${objectID}`}>
            {points} points
          </a>
        </li>
        <li>
          <a href={`https://news.ycombinator.com/user?=${author}`}>{author}</a>
        </li>
        <li>
          <a href={`https://news.ycombinator.com/item?=${objectID}`}>
            {moment(createdAt).fromNow()}
          </a>
        </li>
        <li>
          <a href={`https://news.ycombinator.com/item?=${objectID}`}>
            {commentsCount} comments
          </a>
        </li>
        <li>
          <a href={url}>({url})</a>
        </li>
      </Properties>
    </Wrapper>
  );
};

export default Item;
