const fs = require('fs');

let moduloUsuarios = {
    archivo: './usuarios.json',
    leerJSON: function() {
        let usuariosJSON = fs.readFileSync(this.archivo, 'utf-8')
        return JSON.parse(usuariosJSON)
    },
    guardarJSON: function(nuevoDato) {
        let nuevoJSON = JSON.stringify(nuevoDato)
        fs.writeFileSync(this.archivo, nuevoJSON, 'utf-8')

    },
    agregarUsuario: function(nombre, mail, password) {
        let leerUsuarios = this.leerJSON();


        let nuevoUsuario = {
            nombre,
            mail,
            password
        }


        leerUsuarios.push(nuevoUsuario)
        this.guardarJSON(leerUsuarios)
    },

    loginUsuario: function(mail, password){
        let usuarios = this.leerJSON()
        let usuarioLogin;

        usuarios.forEach(usuario => {
            if(usuario.mail == mail && usuario.password == password){
                usuarioLogin = usuario
            }
        });

        return usuarioLogin
    

    },

    eliminarUsuario: function(mail, password){
        let usuarios = this.leerJSON();
        let usuariosActualizados=[];
        let eliminado = false;

        usuarios.forEach(usuario => {
            if(usuario.mail == mail && usuario.password == password){
                eliminado = true;
            }else{
                usuariosActualizados.push(usuario);
            }
        });

        this.guardarJSON(usuariosActualizados);

        return eliminado;
            
    }


    

}
module.exports = moduloUsuarios