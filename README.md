# Endpoints y Métodos HTTP

## Obtener todos los usuarios
- **Endpoint**: `/users`
- **Método HTTP**: `GET`
- **Descripción**: Devuelve una lista de todos los usuarios.
- **Códigos de Estado HTTP**:
  - `200 OK`: Solicitud exitosa, devuelve la lista de usuarios.

## Obtener un único usuario
- **Endpoint**: `/users/{userId}`
- **Método HTTP**: `GET`
- **Descripción**: Devuelve la información de un usuario específico.
- **Códigos de Estado HTTP**:
  - `200 OK`: Solicitud exitosa, devuelve los datos del usuario.
  - `404 Not Found`: Usuario no encontrado.

## Obtener todas las viviendas de un usuario
- **Endpoint**: `/users/{userId}/houses`
- **Método HTTP**: `GET`
- **Descripción**: Devuelve todas las viviendas de un usuario específico.
- **Códigos de Estado HTTP**:
  - `200 OK`: Solicitud exitosa, devuelve la lista de viviendas.
  - `404 Not Found`: Usuario no encontrado.

## Obtener todas las viviendas de un usuario con filtros opcionales
- **Endpoint**: `/users/{userId}/houses`
- **Método HTTP**: `GET`
- **Parámetros de Query**: `city`, `street`, `country`
- **Descripción**: Devuelve las viviendas de un usuario que cumplen con los filtros especificados.
- **Códigos de Estado HTTP**:
  - `200 OK`: Solicitud exitosa, devuelve la lista filtrada de viviendas.
  - `400 Bad Request`: Parámetros de filtro inválidos.
  - `404 Not Found`: Usuario no encontrado.

## Crear un usuario
- **Endpoint**: `/users`
- **Método HTTP**: `POST`
- **Descripción**: Crea un nuevo usuario.
- **Códigos de Estado HTTP**:
  - `201 Created`: Usuario creado exitosamente.
  - `400 Bad Request`: Datos del usuario inválidos.

## Actualizar un usuario parcialmente
- **Endpoint**: `/users/{userId}`
- **Método HTTP**: `PATCH`
- **Descripción**: Actualiza parcialmente la información de un usuario.
- **Códigos de Estado HTTP**:
  - `200 OK`: Actualización exitosa.
  - `400 Bad Request`: Datos de actualización inválidos.
  - `404 Not Found`: Usuario no encontrado.

## Actualizar un usuario por completo
- **Endpoint**: `/users/{userId}`
- **Método HTTP**: `PUT`
- **Descripción**: Actualiza toda la información de un usuario.
- **Códigos de Estado HTTP**:
  - `200 OK`: Actualización exitosa.
  - `400 Bad Request`: Datos de actualización inválidos.
  - `404 Not Found`: Usuario no encontrado.

**Justificación**: La diferencia entre `PATCH` y `PUT` radica en que `PATCH` se usa para actualizaciones parciales (solo algunos campos del recurso) mientras que `PUT` reemplaza el recurso completo. Esto tiene sentido cuando se quiere permitir actualizaciones mínimas sin afectar otros campos no especificados.

## Crear una vivienda para un usuario
- **Endpoint**: `/users/{userId}/houses`
- **Método HTTP**: `POST`
- **Descripción**: Crea una nueva vivienda para un usuario específico.
- **Códigos de Estado HTTP**:
  - `201 Created`: Vivienda creada exitosamente.
  - `400 Bad Request`: Datos de la vivienda inválidos.
  - `404 Not Found`: Usuario no encontrado.

## Actualizar una vivienda de un usuario
- **Endpoint**: `/users/{userId}/houses/{houseId}`
- **Método HTTP**: `PUT`
- **Descripción**: Actualiza la información de una vivienda específica de un usuario.
- **Códigos de Estado HTTP**:
  - `200 OK`: Actualización exitosa.
  - `400 Bad Request`: Datos de actualización inválidos.
  - `404 Not Found`: Usuario o vivienda no encontrados.

## Borrar una vivienda de un usuario
- **Endpoint**: `/users/{userId}/houses/{houseId}`
- **Método HTTP**: `DELETE`
- **Descripción**: Elimina una vivienda específica de un usuario.
- **Códigos de Estado HTTP**:
  - `200 OK`: Eliminación exitosa.
  - `404 Not Found`: Usuario o vivienda no encontrados.

## Borrar un usuario
- **Endpoint**: `/users/{userId}`
- **Método HTTP**: `DELETE`
- **Descripción**: Elimina un usuario si no tiene viviendas asociadas.
- **Códigos de Estado HTTP**:
  - `200 OK`: Eliminación exitosa.
  - `400 Bad Request`: El usuario tiene viviendas asociadas y no puede ser eliminado.
  - `404 Not Found`: Usuario no encontrado.

## Justificación de diseño
- **Filtrado con Query Params**: Se usa para aplicar filtros opcionales, como en el caso de obtener viviendas con filtros de ciudad, calle o país. Los query params son apropiados aquí porque son opcionales y pueden combinarse de diversas maneras sin afectar la estructura del endpoint.
- **Identificación de Recursos con Path Params**: Los identificadores de usuarios y viviendas se pasan como path params (`/users/{userId}`, `/users/{userId}/houses/{houseId}`) para mantener una estructura clara y jerárquica de los recursos.
- **Diferencia entre PATCH y PUT**: `PATCH` se utiliza para actualizaciones parciales, permitiendo enviar solo los campos que se desean actualizar, mientras que `PUT` reemplaza todo el recurso. Esto es útil cuando se tiene la necesidad de actualizar solo ciertas partes de un recurso sin afectar el resto.
- **Códigos de Estado HTTP**: El uso adecuado de los códigos de estado ayuda a los clientes de la API a entender el resultado de sus solicitudes y manejar los errores de manera adecuada. Por ejemplo, `201 Created` indica una creación exitosa, mientras que `400 Bad Request` indica datos inválidos proporcionados por el cliente.

Este diseño proporciona una estructura clara y consistente para la API, facilitando su uso y mantenimiento.

