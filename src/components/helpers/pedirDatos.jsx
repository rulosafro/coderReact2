import dataStock from '../../data/MOCK_DATA.json'

export const pedirDatos = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(dataStock)
    }, 1000);
  })
}

export const pedirItemPorId = (id) => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      const item = dataStock.find((el) => el.id === id)
        if (item) {
          resolve(item)
        } else {
          reject({
            error: "No se encontro el prodycto :("
          })
        }
    },1000)
  })
}
