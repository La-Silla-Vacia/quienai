import { z } from "zod";

// Definir el esquema de validación utilizando zod
const perfilSchema = z.object({
  titulo: z.string()
    .describe("Nombre del perfil: (descripcion del contenido, contexto o ambito)")
    .max(80, "El título no puede tener más de 80 caracteres"),
  
  carrera_cargos_logros: z.string()
    .describe("Carrera, Cargos y Logros Significativos del perfil"),
  
  relaciones: z.object({
    content: z.string()
      .describe("Manteniendo el enfoque y siguiendo con la idea principal del perfil del autor, describe todas sus relaciones"),
    de_poder: z.array(z.string())
      .describe("Relaciones de poder del perfil"),
    controversiacles: z.array(z.string())
      .describe("Controversias relacionadas con el perfil")
  }),

  cargo_actual: z.string()
    .describe("Cargo actual del perfil"),

  historico_de_cargos: z.string()
    .describe("Cargos anteriores y como se desempeñó"),

  estudios: z.string()
    .describe("Estudios del perfil")
});


// Instrucción para GPT-4 (Hipotética)

// ...
// ...
// ... muchas lineas de instrucciones y tareas despues 

// {
//   "titulo": "string (Nombre del perfil: descripción del contenido, contexto o ámbito, máximo 80 caracteres)",
//   "carrera_cargos_logros": "string (Carrera, Cargos y Logros Significativos del perfil)",
//   "relaciones": {
//     "content": "string (Manteniendo el enfoque y siguiendo con la idea principal del perfil del autor, describe todas sus relaciones)",
//     "de_poder": ["array of strings (Relaciones de poder del perfil)"],
//     "controversiacles": ["array of strings (Controversias relacionadas con el perfil)"]
//   },
//   "cargo_actual": "string (Cargo actual del perfil)",
//   "historico_de_cargos": "string (Cargos anteriores y cómo se desempeñó)",
//   "estudios": "string (Estudios del perfil)"
// }

// Asegúrate de que los campos siguen el formato indicado, especialmente los límites de longitud y la estructura del JSON.


// Ejemplo de uso con un JSON de entrada
const inputData = {
  titulo: "Alejandro Gaviria: Un Perfil Profundo de un Influente Político Colombiano",
  carrera_cargos_logros: "Ha trabajado en varias instituciones de renombre y ha recibido múltiples premios por su trabajo. Ademas de ser candidato a la presidencia de colombia en el ano 2023",
  relaciones: {
    content: "Tiene fuertes conexiones con la comunidad académica y mantiene relaciones de mentoría con varios investigadores junior. Su relacion con la universidad de harvard lo ha llegado a ser un investigador en el instituto max planck. Instituto donde conocio a Juan Perez.\n\n No seria sino varios anos despues cuando tendria una disputa sobre la autoria de un articulo en 2020 supuestamente escrito por Juanito Alvarez.",
    de_poder: ["Universidad de Harvard", "Instituto Max Planck", "Juan Perez"],
    controversiacles: ["Disputa sobre la autoría en un artículo clave en 2020", "Juanito Alvarez"]
  },
  cargo_actual: "Investigador Senior en el Instituto Max Planck",
  historico_de_cargos: "Anteriormente fue profesor asociado en la Universidad de Harvard y consultor en la OMS.",
  estudios: "PhD en Neurociencias por la Universidad de Oxford"
};

// Validar el JSON de entrada
try {
  const validData = perfilSchema.parse(inputData);
  console.log("Datos válidos:", validData);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("Errores de validación:", error.errors);
  } else {
    console.error("Error inesperado:", error);
  }
}
