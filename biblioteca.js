class Biblioteca {
  constructor() {
    this.libros = []; // Lista de libros
  }

  // Método para agregar un libro a la biblioteca
  agregarLibro(libro) {
    this.libros.push(libro);
    console.group(
      `‣ El libro "${libro.titulo}" ha sido agregado a la biblioteca.\n`,
    );
    console.groupEnd();
  }

  // Método para listar todos los libros de la biblioteca
  listarLibros() {
    console.group("‣ Lista de libros en la biblioteca:\n");
    this.libros.forEach((libro) => libro.informacion());
  }

  // Método para buscar libros por título
  buscarPorTitulo(titulo) {
    const librosEncontrados = this.libros.filter((libro) =>
      libro.titulo.toLowerCase().includes(titulo.toLowerCase()),
    );
    if (librosEncontrados.length > 0) {
      console.log(`‣ Libros encontrados con el título "${titulo}":\n`);
      librosEncontrados.forEach((libro) => libro.informacion());
    } else {
      console.log(`No se encontraron libros con el título "${titulo}".\n`);
    }
  }

  // Método para buscar libros por autor
  buscarPorAutor(nombreAutor) {
    const librosEncontrados = this.libros.filter((libro) =>
      libro.autor.nombre.toLowerCase().includes(nombreAutor.toLowerCase()),
    );
    if (librosEncontrados.length >= 1) {
      console.log(`‣ Libros encontrados del autor "${nombreAutor}":\n`);
      librosEncontrados.forEach((libro) => libro.informacion());
    } else {
      console.log(`No se encontraron libros del autor "${nombreAutor}".\n`);
    }
  }

  // Método para listar solo los libros disponibles para préstamo
  librosDisponibles() {
    const librosDisponibles = this.libros.filter(
      (libro) => libro.disponibilidad,
    );
    if (librosDisponibles.length > 0) {
      console.log("‣ Libros disponibles para préstamo:\n");
      librosDisponibles.forEach((libro) => libro.informacion());
    } else {
      console.log("‣ No hay libros disponibles para préstamo.\n");
    }
  }
}

export default Biblioteca;
