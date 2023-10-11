import { client } from '@/lib/contentful/client'
import PostCard from '@/components/posts/PostCard'

const Posts = () => {
  return (
    <section className='section'>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:gridcols-3 sm:gap-10'>
          {Posts.map((post, i) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts
