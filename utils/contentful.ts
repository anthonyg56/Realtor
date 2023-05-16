import contentful from 'contentful'

const token = '' || process.env.CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({
  space: '3482eq1mhzki',
  accessToken: token as string
})

export const getListItems = async () => {
  const listItems = await client.getContentType('listItem')
  .then((contentType) => console.log(contentType))
  .catch(console.error)

  return listItems
}