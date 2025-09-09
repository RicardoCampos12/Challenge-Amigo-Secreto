# Challenge-Amigo-Secreto

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

# Fucionalidades:
-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

-Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

# 🛠 Tecnologías utilizadas

HTML5 – Estructura del proyecto.

CSS3 – Estilos y diseño responsivo.

JavaScript (Vanilla JS) – Lógica de agregar amigos, mostrar la lista y sortear.

Opcional: puedes mejorar la aplicación integrando librerías de UI o frameworks como React para proyectos más avanzados.

# 📁 Estructura del proyecto

#### index.html        || Página principal
#### style.css         || Estilos de la aplicación
#### app.js            || Lógica de JavaScript
#### assets/           || Imágenes y recursos
    

# ⚡ Uso

-Abre index.html en tu navegador favorito.

-En la sección "Digite el nombre de sus amigos":

-Escribe un nombre en el campo de texto.

-Haz clic en Añadir.

-El nombre aparecerá en la lista de amigos.

-Para sortear un amigo secreto:

-Haz clic en Sortear amigo.

-El resultado se mostrará debajo en la sección de resultados.

# 💻 Funcionalidades principales (JavaScript)

-agregarAmigo():

-Valida que el campo no esté vacío.

-Añade el nombre al arreglo de amigos.

-Actualiza la lista en pantalla.

-Limpia el campo de entrada.

-mostrarLista():

-Genera dinámicamente los "li" dentro del "ul" con todos los amigos.

-Evita duplicados al limpiar la lista antes de pintarla.

-sortearAmigo():

-Valida que existan amigos en la lista.

-Selecciona un índice aleatorio con Math.random() y Math.floor().

-Muestra el amigo secreto seleccionado en el DOM.
