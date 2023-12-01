import propiedadesEnVenta from "./Arreglos/venta.js";
import propiedadesEnAlquiler from "./Arreglos/alquiler.js";

const mostrarPropiedades = (propiedades, containerID) => {
  const container = document.getElementById(containerID);

  const propiedadeslimite = propiedades.slice(0, 3);

  propiedadeslimite.forEach((propiedad) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    const cardContent = `
                  <div class="card">
                      <img
                          src="${propiedad.src}"
                          class="card-img-top"
                          alt="Imagen del departamento"
                      />
                      <div class="card-body">
                          <h5 class="card-title">${propiedad.nombre}</h5>
                          <p class="card-text">${propiedad.descripcion}</p>
                          <p><i class="fas fa-map-marker-alt"></i> ${
                            propiedad.ubicacion
                          }</p>
                          <p><i class="fas fa-bed"></i> ${
                            propiedad.habitaciones
                          } <i class="fas fa-bath"></i></p>
                          <p><i class="fas fa-dollar-sign"></i> ${
                            propiedad.costo
                          }</p>
                          ${
                            propiedad.smoke
                              ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                              : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                          }
                          ${
                            propiedad.pets
                              ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                              : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`
                          }
                      </div>
                  </div>
          `;

    card.innerHTML = cardContent;
    container.appendChild(card);
  });
};

mostrarPropiedades(propiedadesEnVenta, "enVentaContainer");
mostrarPropiedades(propiedadesEnAlquiler, "enAlquilerContainer");
