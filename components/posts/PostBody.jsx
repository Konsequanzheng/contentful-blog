import RichText from '../RichText'

const PostBody = ({ post }) => {
  const { content } = post.fields

  console.log(content)
  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  )
}

export default PostBody
