import { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

type PageType = {
  totalPage: number;
  thisPage: number;
};
const Pagenation = (pageData: PageType) => {
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === pageData.thisPage}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      {pageData.totalPage > 5 ? (
        <Pagination>
          {pageData.thisPage === 1 ? (
            <div></div>
          ) : (
            <div>
              <Pagination.Item>{pageData.thisPage - 2}</Pagination.Item>
              <Pagination.Item>{pageData.thisPage - 1}</Pagination.Item>
            </div>
          )}

          <Pagination.Item active>{pageData.thisPage}</Pagination.Item>
          <Pagination.Item>{pageData.thisPage + 1}</Pagination.Item>
          <Pagination.Item>{pageData.thisPage + 2}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{pageData.totalPage}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      ) : (
        <Pagination>
          <Pagination.First />
          <Pagination>{items}</Pagination>
          <Pagination.Last />
        </Pagination>
      )}
    </div>
  );
};
export default Pagenation;
