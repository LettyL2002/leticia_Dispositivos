class Autor {
  // Constructor que recibe nombre y nacionalidad
  constructor(nombre, nacionalidad) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
  }

  // Método que imprime la información del autor
  informacion() {
    console.log(`Nombre del autor: ${this.nombre}`);
    console.log(`Nacionalidad del autor: ${this.nacionalidad}`);
  }
}
const autor2 = new Autor("Julia Donaldson", "Britanica");
autor2.informacion();

const autor3 = new Autor("Maurice Sendak", "Estadounidense");
autor3.informacion();

const autor4 = new Autor("Eric Carle", "Estadounidense (nacido en Alemania)");
autor4.informacion();

const autor5 = new Autor("Laura Ramos", "Argentina");
autor5.informacion();

const autor6 = new Autor("David McKee", "Britanico");
autor6.informacion();

const autor7 = new Autor("Agnès de Lestrade ", " Francesa");
autor7.informacion();

const autor8 = new Autor("Astrid Lindgren", "Sueca");
autor8.informacion();

const autor9 = new Autor("Carmen Posadas", " Uruguaya");
autor9.informacion();

const autor10 = new Autor("Anna Llenas", "Española");
autor10.informacion();
