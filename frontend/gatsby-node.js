const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql (`
        query MyQuery {
            allStrapiTimeline {
                edges {
                    node {
                        titel
                    }
                }
            }
        }
    `)

    data.allStrapiTimeline.edges.forEach(edge => {
        // console.log(node.title)
        actions.createPage({
            path: '/timelines/' + edge.node.titel,
            component: path.resolve('./src/templates/timeline.jsx'),
            context: {timeline: edge.node.titel}
        })
    })

}