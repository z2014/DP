const Sequelize = require('sequelize');
const db = require('../db.js')

let pageInfo = db.define('project_page', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true
    },
    pageInfo: Sequelize.TEXT,
    pageId: Sequelize.INTEGER
})

module.exports = pageInfo