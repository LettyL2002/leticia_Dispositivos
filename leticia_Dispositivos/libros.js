// libro.js
import Autor from "../leticia_Dispositivos/autor";
// Importamos la clase Autor desde autor.js

class Libro {
  constructor(titulo, autor, anoPublicacion, disponibilidad = true) {
    this.titulo = titulo;
    this.autor = autor; // Instancia de la clase Autor
    this.anoPublicacion = anoPublicacion;
    this.disponibilidad = disponibilidad;
  }

  informacion() {
    console.log(`Título del libro: ${this.titulo}`);
    console.log(`Autor: ${this.autor.nombre}`);
    console.log(`Año de publicación: ${this.anoPublicacion}`);
    console.log(
      `Disponibilidad: ${this.disponibilidad ? "Disponible" : "No disponible"}`
    );
  }

  prestar() {
    if (this.disponibilidad) {
      this.disponibilidad = false;
      console.log(`El libro "${this.titulo}" ha sido prestado.`);
    } else {
      console.log(
        `El libro "${this.titulo}" no está disponible para préstamo.`
      );
    }
  }

  devolver() {
    if (!this.disponibilidad) {
      this.disponibilidad = true;
      console.log(`El libro "${this.titulo}" ha sido devuelto.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está disponible.`);
    }
  }
}

export default Libro; // Exportamos la clase Libro

// Crear una instancia de Autor
const autor2 = new Autor("Julia Donaldson", "Britanica");
// Crear un2 instancia de Libro
const libro1 = new Libro("El Grúfalo", autor2, 1999);

const autor3 = new Autor("Maurice Sendak", "Estadounidense");
const libro3 = new Libro("Donde viven los monstruos", autor3, 1963);

const autor4 = new Autor("Eric Carle", "Estadounidense (nacido en Alemania)");
const libro4 = new Libro("La oruga muy hambrienta", autor4, 1969);

const autor5 = new Autor("Laura Ramos", "Argentina");
const libro5 = new Libro("La casa de los conejos", autor5, 2008);

const autor6 = new Autor("David McKee", "Británico");
const libro6 = new Libro("Elmer", autor6, 1968);

const autor7 = new Autor("Agnès de Lestrade", "Argentina");
const libro7 = new Libro("La gran fábrica de las palabras", autor7, 2004);

const autor8 = new Autor("Astrid Lindgren", "Sueca");
const libro8 = new Libro("Pippi Calzaslargas", autor8, 1945);

const autor9 = new Autor("Carmen Posadas", "Uruguaya");
const libro9 = new Libro("Cuentos de la abuela Amelia", autor9, 1994);

const autor10 = new Autor("Anna Llenas", "Española");
const libro10 = new Libro("La ardilla que no quería ser gris", autor10, 2011);
