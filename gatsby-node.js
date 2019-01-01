/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
          module: {
            rules: [
                { 
                    test: /lazysizes/,
                    use: loaders.null
                },
                { 
                    test: /flickity/,
                    use: loaders.null
                },

            ]
          }  
        })
    }
  };