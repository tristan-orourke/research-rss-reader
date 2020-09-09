var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/tristan-orourke/research-rss-reader.git',
        user: {
            name: 'Tristan O\'Rourke',
            email: 'tristan.orourke@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
