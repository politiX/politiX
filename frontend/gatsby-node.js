const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql (`
        query MyQuery {
            allStrapiTimeline {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    `)

    data.allStrapiTimeline.edges.forEach(edge => {
        // console.log(node.title)
        actions.createPage({
            path: '/timelines/' + edge.node.title,
            component: path.resolve('./src/templates/timeline.jsx'),
            context: {timeline: edge.node.title}
        })
    })

}