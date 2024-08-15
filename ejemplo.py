# !pip install pydantic

from pydantic import BaseModel, Field, ValidationError
from typing import List

class Relaciones(BaseModel):
    content: str = Field(..., description="Manteniendo el enfoque y siguiendo con la idea principal del perfil del autor, describe todas sus relaciones")
    de_poder: List[str] = Field(default=[], description="Relaciones de poder del perfil")
    controversiacles: List[str] = Field(default=[], description="Controversias relacionadas con el perfil")

class Perfil(BaseModel):
    titulo: str = Field(..., max_length=80, description="Nombre del perfil: (descripción del contenido, contexto o ámbito)")
    carrera_cargos_logros: str = Field(..., description="Carrera, Cargos y Logros Significativos del perfil")
    relaciones: Relaciones
    cargo_actual: str = Field(..., description="Cargo actual del perfil")
    historico_de_cargos: str = Field(..., description="Cargos anteriores y cómo se desempeñó")
    estudios: str = Field(..., description="Estudios del perfil")


# Instrucción para GPT-4 (Hipotética)

# ...
# ...
# ... muchas lineas de instrucciones y tareas despues 

# {
#   "titulo": "string (Nombre del perfil: descripción del contenido, contexto o ámbito, máximo 80 caracteres)",
#   "carrera_cargos_logros": "string (Carrera, Cargos y Logros Significativos del perfil)",
#   "relaciones": {
#     "content": "string (Manteniendo el enfoque y siguiendo con la idea principal del perfil del autor, describe todas sus relaciones)",
#     "de_poder": ["array of strings (Relaciones de poder del perfil)"],
#     "controversiacles": ["array of strings (Controversias relacionadas con el perfil)"]
#   },
#   "cargo_actual": "string (Cargo actual del perfil)",
#   "historico_de_cargos": "string (Cargos anteriores y cómo se desempeñó)",
#   "estudios": "string (Estudios del perfil)"
# }

# Asegúrate de que los campos siguen el formato indicado, especialmente los límites de longitud y la estructura del JSON.


# Supongamos que este es el output generado por GPT-4
inputData = {
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
}

# Validar el JSON generado por GPT-4 utilizando Pydantic
try:
    perfil = Perfil(**gpt_output)
    print("Datos válidos:", perfil)
except ValidationError as e:
    print("Errores de validación:", e.json())
