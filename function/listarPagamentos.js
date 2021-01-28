module.exports = function(){
    this.lista = function(connection, callback){
        connection.query('select * from dados', callback);
    }
    return this;
}