
import * as Contentful from 'contentful'
import { IAboutMeFields } from '@/@types'
const token = '' || process.env.CONTENTFUL_ACCESS_TOKEN

const client = Contentful.createClient({
  space: '3482eq1mhzki',
  accessToken: token as string
})

export const getListItems = async () => {
  const listItems = await client.getContentType('listItem')
  .then((contentType) => contentType)
  .catch(console.error)

  return listItems
}

export const getAboutMeData = async () => {
  const listItems = await client.getEntries<IAboutMeFields>({ content_type: 'aboutMe' })
  .then((contentType) => {
    const items = contentType.items
    console.log(items[0].fields.biographyRichText)
    return items
  })
  .catch(console.error)

  return listItems
}