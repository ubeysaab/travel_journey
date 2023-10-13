// data array  faker .js 
// {
//   title:
//   ,location:
//   ,googleMaps:
//   ,startDate:
//   ,endDate:
//   ,desc:
//   ,imgUrl:
// }

import { faker } from '@faker-js/faker';

function createJorney (i)
{
  return (

    {
      key:i,
      title:faker.location.city()
      ,location:faker.location.country()
      // ,googleMaps:faker.location.
      ,startDate:faker.date.between({
        from:'2020-01-01',
        to:'2030-02-04'
      })
      ,endDate:faker.date.between({
        from:'2020-01-01',
        to:'2030-02-04'
      })

      ,desc:faker.lorem.paragraph()
      ,imgUrl:faker.image.urlLoremFlickr({category:'city'})
      ,
}
  )
}

let data = []


for (let i = 0 ; i < 20 ; i++)
{
  data.push(createJorney(i))
}
console.log(data)
export default data;
