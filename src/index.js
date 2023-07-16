import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './book'
import { Book } from './BookComp'

const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})

const BookList = () => {
  return (
    <React.Fragment>
      <h1>Amazon Best Seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </React.Fragment>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    console.log('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => {
            console.log(e.target.value)
          }}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit" onClick={handleFormSubmission}>
          submit
        </button>
        <div>
          <button type="button" onClick={handleButtonClick}>
            click me
          </button>
        </div>
      </form>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
export default BookList
