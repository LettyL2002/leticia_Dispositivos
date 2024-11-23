class Libro {
  constructor(titulo, autor, anoPublicacion, disponibilidad = true) {
    this.titulo = titulo;
    this.autor = autor; // Instancia de la clase Autor
    this.anoPublicacion = anoPublicacion;
    this.disponibilidad = disponibilidad;
  }

  informacion() {
    console.group(`‣ Título del libro: ${this.titulo}\n`);
    console.log(`• Autor: ${this.autor.nombre}`);
    console.log(`• Año de publicación: ${this.anoPublicacion}`);
    console.log(
      `• Disponibilidad: ${this.disponibilidad ? "Disponible" : "No disponible"}\n`,
    );
    console.groupEnd();
  }

  prestar() {
    if (this.disponibilidad) {
      this.disponibilidad = false;
      console.group(`‣ El libro "${this.titulo}" ha sido prestado.`);
      console.groupEnd();
    } else {
      console.group(
        `El libro "${this.titulo}" no está disponible para préstamo.`,
      );
      console.groupEnd();
    }
  }

  devolver() {
    if (!this.disponibilidad) {
      this.disponibilidad = true;
      console.group(`El libro "${this.titulo}" ha sido devuelto.`);
      console.groupEnd();
    } else {
      console.group(`El libro "${this.titulo}" ya está disponible.`);
      console.groupEnd();
    }
  }
}

export default Libro; // Exportamos la clase Libro para poder utilizarla en Biblioteca.js
