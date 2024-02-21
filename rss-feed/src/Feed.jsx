const Feed = ({ title, link, date }) => {
  let formatted = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("en-GB", formatted);
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        <p>{articleDate}</p>
      </a>
    </>
  );
};

export default Feed;
