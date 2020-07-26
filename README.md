## Proyecto Sistema de Gestión de Silabos
## Backend
GUIA A SEGUIR:

### `crear carpeta inicial para ejecutar un conjuto de replicas en mongo`

c: /srv/mongodb/db0

### `ejecutar el siguiente comando para crear una instancia de mongo `

mongod --port 27020 --dbpath /srv/mongodb/db0 --replSet rs0 --bind_ip localhost   CONSOLA A

### `abrir mongodb en el puerto 27020`

    mongo --port 27020  ---> abrir shell de mongo    - CONSOLA B

### `inicializar mongodb`

    rs.initiate()  CONSOLA B

**NOTA: CLONAR PROYECTO git clone url-repository**

### `descargar las librerias utilizadas`
    npm i  - consola A

### `compilar typescript a javascript`
    tsc -w - consola B

### `ejecutar proyecto`
    npm start - consola A

## Frontend

### `descargar las librerias utilizadas`
    npm i  - consola C

### `ejecutar proyecto`
    npm start - consola C