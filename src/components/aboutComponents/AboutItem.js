export default function AboutItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <div className='aboutitem__box'>
      <h1>{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}