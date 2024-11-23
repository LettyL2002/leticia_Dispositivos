class Autor {
  // Constructor que recibe nombre y nacionalidad
  constructor(nombre, nacionalidad) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
  }

  // Método que imprime la información del autor
  informacion() {
    console.group(`‣ Nombre del autor: ${this.nombre}`);
    console.log(`• Nacionalidad del autor: ${this.nacionalidad}\n`);
    console.groupEnd();
  }
}

export default Autor; // Exportamos la clase Autor para poder utilizarla en otros archivos
