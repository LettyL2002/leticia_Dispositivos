import Autor from "./autor.js";
import Libro from "./libros.js";
import Biblioteca from "./biblioteca.js";

const delimiter = () => console.log("-".repeat(50)); // Función para imprimir un separador entre cada sección

// Crear autores
const autor1 = new Autor("Gabriel García Márquez", "Colombiano");
const autor2 = new Autor("Isabel Allende", "Chilena");
const autor3 = new Autor("Mario Vargas Llosa", "Peruano");

// Crear libros
const libro1 = new Libro("Cien años de soledad", autor1, 1967);
const libro2 = new Libro("La casa de los espíritus", autor2, 1982);
const libro3 = new Libro("Crónica de una muerte anunciada", autor1, 1981);
const libro4 = new Libro("La ciudad y los perros", autor3, 1963);
const libro5 = new Libro("La fiesta del chivo", autor3, 2000);

// Crear biblioteca
const biblioteca = new Biblioteca();

// Agregar libros a la biblioteca
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
biblioteca.agregarLibro(libro4);
biblioteca.agregarLibro(libro5);

delimiter();

// Listar todos los libros
biblioteca.listarLibros();

delimiter();

// Buscar libros por título
biblioteca.buscarPorTitulo("Cien años de soledad");

delimiter();

// Buscar libros por autor
biblioteca.buscarPorAutor("Gabriel García Márquez");

delimiter();

// Prestar un libro y listar disponibles
libro1.prestar();
biblioteca.librosDisponibles();

delimiter();

// Devolver un libro y listar disponibles
libro1.devolver();
biblioteca.librosDisponibles();

delimiter();