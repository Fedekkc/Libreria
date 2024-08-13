-- Useless

CREATE TABLE IF NOT EXISTS categorias(
  id_categoria INT NOT NULL PRIMARY KEY,
  nombre_categoria VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS autores(
  id_autor INT NOT NULL AUTO_INCREMENT,
  nombre_autor VARCHAR(50),
  apellido_autor VARCHAR(50),
  dni_autor VARCHAR(10),
  nacionalidad_autor VARCHAR(40),
  PRIMARY KEY(id_autor)
);

CREATE TABLE IF NOT EXISTS editoriales(
  id_editorial INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre_editorial VARCHAR(50) NOT NULL,
  direccion_editorial VARCHAR(50) NOT NULL,
  cuit_editorial VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS libros(
  id_libro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_editorial INT NOT NULL,
  titulo VARCHAR(50) NOT NULL,
  precio FLOAT NOT NULL,
  fecha_lanzamiento DATETIME,
  descripcion VARCHAR(100),
  id_categoria INT NOT NULL,
  FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria),
  FOREIGN KEY(id_editorial) REFERENCES editoriales(id_editorial)
);

CREATE TABLE IF NOT EXISTS libros_autores(
  id_libro INT NOT NULL,
  id_autor INT NOT NULL,
  PRIMARY KEY (id_libro, id_autor),
  FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
  FOREIGN KEY (id_autor) REFERENCES autores(id_autor)
);
