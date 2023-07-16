export const Book = ({ id, img, title, author, children, number }) => {
  console.log(number)
  return (
    <article className="book">
      <img src={img} alt="Interesting facts for curius minds!" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{number + 1}</span>
    </article>
  )
}
