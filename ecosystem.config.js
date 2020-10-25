module.exports = {
    apps: [{
        name: 'about',
        script: 'npm start',
        watch: '.',
        env: {
            NODE_ENV: 'production'
        }, env_production: {
            NODE_ENV: 'production'
        }
    }]
};
