const Sequelize = require('sequelize');

const sequelize = new Sequelize('dcaqe63ohtvhsa','uoqqksjwdzzrhl', 'db123e489057e7099beeeab692e3af95e21c2a2e0e373d607dcb8d6d2cabe155', {
  dialect: 'postgres',
  operatorsAliases: false 
});
sequelize.sync({
	// force: true
})
 .then(() => console.log("tables created"),(err) => console.log(err));

module.exports = sequelize;