const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql (`
        query nodeQuery {
            allStrapiTimeline {
                edges {
                    node {
                        title
                    }
                }
            }
            allStrapiArticle {
                edges {
                    node {
                        title
                        timeline {
                            title
                        }
                    }
                }
            }
        }
    `)

    // Build timeline pages
    data.allStrapiTimeline.edges.forEach(edge => {
        actions.createPage({
            path: '/timelines/' + edge.node.title,
            component: path.resolve('./src/templates/timeline.jsx'),
            context: {timeline: edge.node.title}
        })
    })


    // Build article pages
    data.allStrapiArticle.edges.forEach(edge => {
        actions.createPage({
            path: '/timelines/' + edge.node.timeline.title + '/articles/' + edge.node.title,
            component: path.resolve('./src/templates/article.jsx'),
            context: {article: edge.node.title}
        })
    })
}