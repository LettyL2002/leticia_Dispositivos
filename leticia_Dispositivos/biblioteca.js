import Autor from "../leticia_Dispositivos/autor";
import Libro from "../leticia_Dispositivos/libros";

class Biblioteca {
  constructor() {
    this.libros = []; // Lista de libros
  }

  // Método para agregar un libro a la biblioteca
  agregarLibro(libro) {
    this.libros.push(libro);
    console.log(`El libro "${libro.titulo}" ha sido agregado a la biblioteca.`);
  }

  // Método para listar todos los libros de la biblioteca
  listarLibros() {
    console.log("Lista de libros en la biblioteca:");
    this.libros.forEach((libro) => libro.informacion());
  }

  // Método para buscar libros por título
  buscarPorTitulo(titulo) {
    const librosEncontrados = this.libros.filter((libro) =>
      libro.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
    if (librosEncontrados.length > 0) {
      console.log(`Libros encontrados con el título "${titulo}":`);
      librosEncontrados.forEach((libro) => libro.informacion());
    } else {
      console.log(`No se encontraron libros con el título "${titulo}".`);
    }
  }

  // Método para buscar libros por autor
  buscarPorAutor(nombreAutor) {
    const librosEncontrados = this.libros.filter((libro) =>
      libro.autor.nombre.toLowerCase().includes(nombreAutor.toLowerCase())
    );
    if (librosEncontrados.length > 0) {
      console.log(`Libros encontrados del autor "${nombreAutor}":`);
      librosEncontrados.forEach((libro) => libro.informacion());
    } else {
      console.log(`No se encontraron libros del autor "${nombreAutor}".`);
    }
  }

  // Método para listar solo los libros disponibles para préstamo
  librosDisponibles() {
    const librosDisponibles = this.libros.filter(
      (libro) => libro.disponibilidad
    );
    if (librosDisponibles.length > 0) {
      console.log("Libros disponibles para préstamo:");
      librosDisponibles.forEach((libro) => libro.informacion());
    } else {
      console.log("No hay libros disponibles para préstamo.");
    }
  }
}

// Crear autores
const autor1 = new Autor("Gabriel García Márquez", "Colombiano");
const autor2 = new Autor("Isabel Allende", "Chilena");

// Crear libros
const libro1 = new Libro("Cien años de soledad", autor1, 1967);
const libro2 = new Libro("La casa de los espíritus", autor2, 1982);
const libro3 = new Libro("Crónica de una muerte anunciada", autor1, 1981);

// Crear biblioteca
const biblioteca = new Biblioteca();

// Agregar libros a la biblioteca
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

// Listar todos los libros
biblioteca.listarLibros();

// Buscar libros por título
biblioteca.buscarPorTitulo("Cien años de soledad");

// Buscar libros por autor
biblioteca.buscarPorAutor("Gabriel García Márquez");

// Prestar un libro y listar disponibles
libro1.prestar();
biblioteca.librosDisponibles();

// Devolver un libro y listar disponibles
libro1.devolver();
biblioteca.librosDisponibles();
