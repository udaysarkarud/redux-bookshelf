import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import SingleBook from "../components/SingleBook/SingleBook";

const FinishedBooks = () => {
  const finishedList = useSelector((state) => state.book.finishedList)
  return (
    <PageLayout>
      {
        finishedList.length === 0 &&
        <p>
        Hey there! This is where books will go when you've finished reading
        them. Get started by heading over to the <Link to='/'>Discover</Link>{" "}
        page to add books to your list.
      </p>}
      {
        finishedList.map((book) => (<SingleBook key={book.id} book={book} />))
      }
    </PageLayout>
  );
};

export default FinishedBooks;
