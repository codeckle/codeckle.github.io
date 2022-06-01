const ghpages = require('gh-pages')

ghpages.publish('public', {
    branch: 'pages',
    repo: 'https://github.com/codeckle/codeckle.github.io.git'
}, () => {
    console.log('Deployed "public" to "public" branch in Github')
})
