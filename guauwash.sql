-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-04-2020 a las 20:57:08
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guauwash`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `id_p` int(11) NOT NULL,
  `nombre_producto` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `categoria_producto` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_producto` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `precio_producto` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tienda`
--

INSERT INTO `tienda` (`id_p`, `nombre_producto`, `categoria_producto`, `descripcion_producto`, `precio_producto`, `imagen`) VALUES
(3, 'Cepillo', 'Perros', 'Un buen cepillo', 265, 'ola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno`
--

CREATE TABLE `turno` (
  `id_t` int(11) NOT NULL,
  `nombre` varchar(11) NOT NULL,
  `mail` varchar(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `nombre_mascota` varchar(11) NOT NULL,
  `raza` varchar(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turno`
--

INSERT INTO `turno` (`id_t`, `nombre`, `mail`, `telefono`, `nombre_mascota`, `raza`, `fecha`) VALUES
(17, 'pene', 'duro', 123, 'asdasd', 'labrador', '1231-03-12'),
(18, 'pene', 'duro', 123, 'asdasd', 'labrador', '1231-03-12'),
(19, 'pepe', 'silvio.delu', 1234, 'asda', 'golden', '1111-11-11'),
(20, 'pepe', 'silvio.delu', 1234, 'asda', 'golden', '1111-11-11'),
(21, 'pepe', 'silvio.delu', 1234, 'asda', 'golden', '1111-11-11'),
(22, 'pepe', 'silvio.delu', 1234, 'asda', 'golden', '1111-11-11'),
(23, 'silvio', 'silvio.delu', 123, 'asd', 'labrador', '1111-11-11'),
(24, 'silvio', 'silvio.delu', 123, 'asd', 'labrador', '1111-11-11'),
(25, 'silvio', 'silvio.delu', 123123, 'asasdasd', 'labrador', '1111-11-11'),
(26, 'silvio', 'silvio.delu', 123123, 'asasdasd', 'labrador', '1111-11-11'),
(27, 'asdasd', 'silvio.delu', 1231234, 'asdasd', 'golden', '1122-03-21'),
(28, 'asdasd', 'silvio.delu', 1231234, 'asdasd', 'golden', '1122-03-21'),
(29, 'silvio', 'silvio.delu', 123123, 'asasdasd', 'labrador', '1111-11-11'),
(30, 'manola', 'silvio.delu', 12313, 'sadasd', 'labrador', '3123-03-12'),
(31, 'manola', 'silvio.delu', 12313, 'sadasd', 'labrador', '3123-03-12'),
(32, 'a', 'fgarciacone', 0, 'fgarciacone', 'golden', '2020-12-31'),
(33, 'a', 'fgarciacone', 0, 'fgarciacone', 'golden', '2020-12-31'),
(34, 'silvio', 'fgarciacone', 123123, 'dasd', 'labrador', '2222-02-22'),
(35, 'silvio', 'fgarciacone', 123123, 'dasd', 'labrador', '2222-02-22'),
(36, 'asd', 'fgarciacone', 0, 'asd', 'golden', '2020-01-03'),
(37, 'manola', 'silvio.delu', 12345678, 'asd', 'labrador', '2020-12-30'),
(38, 'manola', 'silvio.delu', 12345678, 'asd', 'labrador', '2020-12-30'),
(39, 'manola', 'silvio.delu', 12345678, 'asd', 'labrador', '2020-12-30'),
(40, 'asdsa', 'fgarciacone', 2313, 'sdad', 'labrador', '2222-02-22'),
(41, 'asdasd', 'silvio.delu', 12345678, 'asdasd', 'golden', '3333-03-12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`id_p`);

--
-- Indices de la tabla `turno`
--
ALTER TABLE `turno`
  ADD PRIMARY KEY (`id_t`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tienda`
--
ALTER TABLE `tienda`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `turno`
--
ALTER TABLE `turno`
  MODIFY `id_t` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
