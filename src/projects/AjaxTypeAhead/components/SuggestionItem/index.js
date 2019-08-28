import React, { useContext } from "react";
import moment from "moment";

import { Wrapper, Heading, Anchor, Properties } from "./styled";

import { SearchContext } from '../../App';

const Item = ({
  title,
  points,
  url,
  author,
  created_at: createdAt,
  num_comments: commentsCount,
  objectID
}) => {
  const search = useContext(SearchContext);

  if (search) {
    title = title.replace(new RegExp(search, 'ig'), `<strong>$&</strong>`);
  }

  return (
    <Wrapper>
      <Heading>
        <Anchor href={url} dangerouslySetInnerHTML={{ __html: title }} />
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
