const handler = async (_, res) => {
  res.clearPreviewData()
  res.writeHeadf(307, { Location: '/' })
  res.end()
}

export default handler
