// EXAMPLE OUTPUT: (if you chose females)
// ADDRESS LIST:
// Ms. Keira Roberts
// 2033 Princess Street
// Whangarei, Manawatu-Wanganui
// New Zealand 50541
// Email: keira.roberts@example.com
// Birthday: 01-24-1996
// ------------------
// Mrs. Yasemin Ozkok
// 4167 Filistin Cd
// Aksaray, Manisa
// Turkey 90396
// Email: yasemin.ozkok@example.com
// Birthday: 02-27-1971




// DATASET:

let data = {
  results: [
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Keira', last: 'Roberts' },
      location: {
        street: { number: 2033, name: 'Princess Street' },
        city: 'Whangarei',
        state: 'Manawatu-Wanganui',
        country: 'New Zealand',
        postcode: 50541,
        coordinates: { latitude: '59.7292', longitude: '8.5152' },
        timezone: { offset: '-1:00', description: 'Azores, Cape Verde Islands' }
      },
      email: 'keira.roberts@example.com',
      login: {
        uuid: '89f63bf5-7f0e-4767-9ae5-90f1cd4cfe1a',
        username: 'goldenmeercat111',
        password: 'ting',
        salt: '8b3BACgN',
        md5: '63f37ee9171a2eef2166b9e087c7a16f',
        sha1: '2fa215202acc8bd47030b174598075bea0720f92',
        sha256:
          'e8db2b13dba3cbe729e7b1dc3af0db859354de54941a7c750db247b0894372ad'
      },
      dob: { date: '1996-01-24T07:35:06.714Z', age: 24 },
      registered: { date: '2003-06-24T06:08:44.415Z', age: 17 },
      phone: '(837)-980-6932',
      cell: '(042)-417-8419',
      id: { name: '', value: null },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/78.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg'
      },
      nat: 'NZ'
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Steve', last: 'Perrin' },
      location: {
        street: { number: 495, name: 'Rue Bataille' },
        city: 'Däniken',
        state: 'Glarus',
        country: 'Switzerland',
        postcode: 1846,
        coordinates: { latitude: '72.2187', longitude: '-51.0570' },
        timezone: { offset: '-10:00', description: 'Hawaii' }
      },
      email: 'steve.perrin@example.com',
      login: {
        uuid: '416372bd-63e3-47ec-9063-4f0f8efd05e9',
        username: 'purplewolf810',
        password: 'travel',
        salt: 'c7G781bt',
        md5: 'd061ebddab0907435dc9d086bea7d49b',
        sha1: '68cdab377051e27a55cf07c3529b68a8f39e7be1',
        sha256:
          '607684492b119c188575227214b27e65a063354c303d731c5cde24f4c8b4d105'
      },
      dob: { date: '1978-06-27T20:50:10.008Z', age: 42 },
      registered: { date: '2010-10-05T16:52:06.998Z', age: 10 },
      phone: '077 150 90 38',
      cell: '075 078 23 72',
      id: { name: 'AVS', value: '756.0910.5865.64' },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/89.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/89.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/89.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Tab', last: 'Van der Reest' },
      location: {
        street: { number: 3988, name: 'Jonkersdam' },
        city: 'Vreeland',
        state: 'Flevoland',
        country: 'Netherlands',
        postcode: 65928,
        coordinates: { latitude: '77.9113', longitude: '104.1359' },
        timezone: {
          offset: '-4:00',
          description: 'Atlantic Time (Canada), Caracas, La Paz'
        }
      },
      email: 'tab.vanderreest@example.com',
      login: {
        uuid: 'a7e17190-f15d-401c-935b-41f118da9a6b',
        username: 'crazybutterfly914',
        password: 'ttttt',
        salt: 'nUkudPCO',
        md5: 'b862376edc6414455867857fe605dabf',
        sha1: 'e805fd722d6992dba2c5dba8b5cab8084fec6de8',
        sha256:
          'ac4431eb1e4497a495c841afc1fa2683a84ffe58e1fd0739ad82c986096917a6'
      },
      dob: { date: '1995-09-30T10:29:11.761Z', age: 25 },
      registered: { date: '2006-09-24T11:11:02.052Z', age: 14 },
      phone: '(000)-695-1459',
      cell: '(625)-893-4488',
      id: { name: 'BSN', value: '66046828' },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/38.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg'
      },
      nat: 'NL'
    },
    {
      gender: 'female',
      name: { title: 'Mrs', first: 'Yasemin', last: 'Ozkok' },
      location: {
        street: { number: 4167, name: 'Filistin Cd' },
        city: 'Aksaray',
        state: 'Manisa',
        country: 'Turkey',
        postcode: 90396,
        coordinates: { latitude: '88.0951', longitude: '145.3572' },
        timezone: {
          offset: '+8:00',
          description: 'Beijing, Perth, Singapore, Hong Kong'
        }
      },
      email: 'yasemin.ozkok@example.com',
      login: {
        uuid: 'cd46de19-3b25-40a7-ae41-ef46000ae827',
        username: 'whiteelephant107',
        password: 'white1',
        salt: 'K4enDVE3',
        md5: '1207e6f49a4128d39a6949c6f1d9edba',
        sha1: 'ea16e72fd5069219bd53f5729b366aa6a9379ea9',
        sha256:
          '9aacdad671779c44f283dcd6f4ce8f1bee16ec3458d33302de229a74e4f7cbe9'
      },
      dob: { date: '1971-02-27T01:54:45.521Z', age: 49 },
      registered: { date: '2009-08-24T06:57:47.634Z', age: 11 },
      phone: '(037)-707-8053',
      cell: '(180)-252-5273',
      id: { name: '', value: null },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/77.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/77.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg'
      },
      nat: 'TR'
    }
  ],
  info: { seed: 'ed2c7d4d04121f12', results: 4, page: 1, version: '1.3' }
}


// - Use the data array that is provided as the data you will be passing into the function.
// - Look at the data in the output example and find properties in the data that match those types of outputs
// - Create a function addressList that takes a parameter, data
// - Return only the males OR only the females
// - Use destructuring to parse the data if you can and output the data in the format listed above into the terminal
// - If you cannot use destructuring parse the data in the way that you know how
// - You will need to manipulate some of the data to get the formatted output, so use your vanilla js
// - Remember, the data should output to the terminal



// Vanilla Js
const addressList = (data) => {
  let { results } = data
  let female = results.filter((item) => item.gender === 'female')
  let result = ''
  for (person of female) {
    result += `
    ${person.name.title}. ${person.name.first} ${person.name.last}\n
    ${person.location.street.number} ${person.location.street.name}\n
    ${person.location.city}, ${person.location.state}\n
    ${person.location.country} ${person.location.postcode}\n
    Email: ${person.email}\n
    Birthday: ${person.dob.date.slice(5,8)}${person.dob.date.slice(8,10)}-${person.dob.date.slice(0,4)}\n
    `
  }
  return result
}

console.log(addressList(data))

// working on object destructuring 