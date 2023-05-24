const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('banco_d','root', 'senai',{
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('conexão com o banco realizada com sucesso!')
// }).catch((error)=>{
//     console.error('não foi possível conectar'+ error)
// })

module.exports = sequelize