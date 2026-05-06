type TagListProps = {
  tags: string[];
};

function TagList({ tags }: TagListProps) {
  return (
    <ul className="tag-list" aria-label="Technologies and topics">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default TagList;
