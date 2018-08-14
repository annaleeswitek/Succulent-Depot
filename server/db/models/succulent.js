const Sequelize = require('sequelize')
const db = require('../db')

const Succulent = db.define('succulent', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
		allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/images/terrarium.jpg'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
		allowNull: false
  },
  family: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  genus: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cuteness: {
    type: Sequelize.ENUM('wildly cute', 'somewhat cute', 'just cuteish'),
    defaultValue: 'somewhat cute'
  },
  sunNeeds: {
    type: Sequelize.ENUM('direct sun', 'partial sun', 'shade'),
    defaultValue: 'partial sun'
  },
  isCactus : {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

// Need a method that returns the 5 most highly rated succulents

// Need a method that calculates the average star rating of a product

module.exports = Succulent
