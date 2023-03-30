type Envs = 'BASE_URL'

export const env = (value: Envs) => {
  const prop = process.env[value]

  if (prop === undefined) {
    throw Error(`You must set the env var ${value}`)
  }

  return prop
}
