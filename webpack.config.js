module.exports = {
    
    module: {
        rules: [
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            
        ],
        
    },
    resolve: {

        alias: {
            
            'react-router': 'react-router-dom'
            
        } 
    },
    resolve: {

        modules: [
    
            'node_modules'
    
        ]
    
            }
}