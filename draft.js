let person = {
    gender: 'female',
    name: { title: 'Mrs', first: 'Yasemin', last: 'Ozkok' },
    location: {
      street: { number: 4167, name: 'Filistin Cd' },
      city: 'Aksaray',
      state: 'Manisa',
      country: 'Turkey',
      postcode: 90396,
    }
}



// object destructure
const addressList = (data) => {
    let { results } = data 
    let female = results.filter((item) => item.gender === 'female')
    female.forEach((item) => {
      let {name: {title, first, last}} = female
      return `${title}. ${first} ${last}`
    })
  
  
    // for (person of female) {
    //   result += `
    //   ${person.name.title}. ${person.name.first} ${person.name.last}\n
    //   ${person.location.street.number} ${person.location.street.name}\n
    //   ${person.location.city}, ${person.location.state}\n
    //   ${person.location.country} ${person.location.postcode}\n
    //   Email: ${person.email}\n
    //   Birthday: ${person.dob.date.slice(5,8)}${person.dob.date.slice(8,10)}-${person.dob.date.slice(0,4)}\n
    //   `
    // }
    return `${title}. ${first} ${last}`
  }
  