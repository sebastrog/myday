import Tag from "./Tag";

const Tags = ({tags, deleteTag}) => {

  return tags.map(tag => 
    <Tag key={tag.id} {...tag} deleteTag={deleteTag} />
  )
}
 
export default Tags;