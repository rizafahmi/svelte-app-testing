module.exports = {
  moduleFileExtensions: ['js', 'svelte'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester'
  },
  verbose: true,
  bail: false,
}
