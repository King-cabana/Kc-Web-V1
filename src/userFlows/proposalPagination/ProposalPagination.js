import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { CaretHolder, NextPrevContainer, PaginationButton, PaginationContainer } from "./ProposalPaginationStyled";


const ProposalPagination = ({
  totalPages,
  currentPage,
  onPreviousPage,
  onNextPage,
  handlePageChange,
}) => {
  const handlePageClick = (pageNumber) => {
    handlePageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <PaginationButton
            key={i}
            onClick={() => handlePageClick(i)}
            active={currentPage === i}
          >
            {i}
          </PaginationButton>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(
            <PaginationButton
              key={i}
              onClick={() => handlePageClick(i)}
              active={currentPage === i}
            >
              {i}
            </PaginationButton>
          );
        }
        pageNumbers.push(
          <PaginationButton
            key={totalPages}
            onClick={() => handlePageClick(totalPages)}
            active={currentPage === totalPages}
          >
            {totalPages}
          </PaginationButton>
        );
      } else if (currentPage > 3 && currentPage < totalPages - 1) {
        pageNumbers.push(
          <PaginationButton
            key={1}
            onClick={() => handlePageClick(1)}
            active={currentPage === 1}
          >
            1
          </PaginationButton>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <PaginationButton
              key={i}
              onClick={() => handlePageClick(i)}
              active={currentPage === i}
            >
              {i}
            </PaginationButton>
          );
        }
        pageNumbers.push(
          <PaginationButton
            key={totalPages}
            onClick={() => handlePageClick(totalPages)}
            active={currentPage === totalPages}
          >
            {totalPages}
          </PaginationButton>
        );
      } else {
        pageNumbers.push(
          <PaginationButton
            key={1}
            onClick={() => handlePageClick(1)}
            active={currentPage === 1}
          >
            1
          </PaginationButton>
        );
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(
            <PaginationButton
              key={i}
              onClick={() => handlePageClick(i)}
              active={currentPage === i}
            >
              {i}
            </PaginationButton>
          );
        }
      }
    }

    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <NextPrevContainer
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        <CaretHolder>
          <RiArrowLeftSLine />
        </CaretHolder>
        Prev
      </NextPrevContainer>
      {renderPageNumbers()}
      <NextPrevContainer
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        Next
        <CaretHolder>
          <RiArrowRightSLine />
        </CaretHolder>
      </NextPrevContainer>
    </PaginationContainer>
  );
};

export default ProposalPagination;
