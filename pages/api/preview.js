import { previewClient } from '@/lib/contentful/client'

const handler = async (req, res) => {
  const { secret, slug } = req.query

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // get entries from contentful that have type post and match the given slug
  const response = await previewClient.getEntries({
    content_type: 'post',
    'fields.slug': slug
  })

  // get first post result (there should only be one)
  const post = response?.items?.[0]

  // if there's no post, the slug is invalid
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData([])
  const url = `/posts/${post.fields.slug}`
  res.writeHead(307, { location: url })
  res.end()
}

export default handler
