'use strict';

module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define('Card', {
    name: DataTypes.STRING
  });

  User.associate = function(models) {
    models.Card.hasMany(models.Task);
  };

  return Card;
};