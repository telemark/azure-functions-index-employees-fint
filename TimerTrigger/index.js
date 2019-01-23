const fint = require('fint-client')

module.exports = async context => {
  const options = {
    url: process.env.FINT_AUTH_URL,
    credentials: {
      client: {
        client_id: process.env.FINT_CLIENT_ID,
        client_secret: process.env.FINT_CLIENT_SECRET
      },
      auth: {
        username: process.env.FINT_AUTH_USERNAME,
        password: process.env.FINT_AUTH_PASSWORD,
        grant_type: 'password',
        scope: 'fint-client'
      },
      orgId: 'telemark.no'
    }
  }
  try {
    const fintSession = await fint(options)
    const data = await fintSession.getData('https://beta.felleskomponent.no/administrasjon/personal/personalressurs')
    const employees = data.map(employee => ({
      ansattnummer: employee.ansattnummer.identifikatorverdi,
      brukernavn: employee.brukernavn.identifikatorverdi,
      epostadresse: employee.kontaktinformasjon.epostadresse,
      mobiltelefonnummer: employee.kontaktinformasjon.mobiltelefonnummer,
      nettsted: employee.kontaktinformasjon.nettsted,
      sip: employee.kontaktinformasjon.sip,
      telefonnummer: employee.kontaktinformasjon.telefonnummer
    }))
    context.log(JSON.stringify(employees, null, 2))
  } catch (error) {
    context.log.error(error)
  }
}
