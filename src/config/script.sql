create database Supermercado;

use Supermercado;

-- Creación de tablas
create table Usuarios (
id_U int auto_increment primary key,
nombre varchar(100),
correo varchar(50),
contraseña varchar(250)
);

select * from Usuarios;

create table Productos (
id_P int auto_increment primary key,
nombre varchar(50),
descripcion varchar(255),
precios float (10,2),
imagen varchar(200)
);

-- Creación de tabla puente
CREATE TABLE Pedido (
    id_usuario INT,
    id_producto INT,
    fecha_pedido timestamp default current_timestamp,
    PRIMARY KEY (id_usuario, id_producto),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_U),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_P)
);