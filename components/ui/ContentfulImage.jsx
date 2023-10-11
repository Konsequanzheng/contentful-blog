import Image from 'next/image'

// contentful loader is a custom loader that allows us to adjust width and quality of image on the fly
const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// simply passes the props received into a next image component
const ContentfulImage = props => {
  return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage
