import React from 'react';
import books from '../fakeData/books.json'
import PageLayout from '../components/PageLayout/PageLayout';
import { useSelector } from 'react-redux';
import SingleBook from '../components/SingleBook/SingleBook';
const Discover = () => {
    const discover = useSelector((state) => state.book.discover)
    return (
        <PageLayout>
            {
                discover.map((book) => (<SingleBook key={book.id} book={book} btnType={'addToReading'}/>))
            }
        </PageLayout>
    );
};

export default Discover;