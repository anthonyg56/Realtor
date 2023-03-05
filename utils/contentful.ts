import contentful from 'contentful'

const client = contentful.createClient({
  space: '3482eq1mhzki',
  accessToken: '4NrRmHPrf_v9RMyQij7GfKAV65bH39hjqHONkCHrPE4'
})

export const getListItems = async () => {
  const listItems = await client.getContentType('listItem')
  .then((contentType) => console.log(contentType))
  .catch(console.error)

  return listItems
}