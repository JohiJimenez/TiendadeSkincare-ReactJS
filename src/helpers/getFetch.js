

const productos = [
    { id: 1, nombre: 'Acido Ascorbico', precio: 5000, img: "https://th.bing.com/th/id/R.6d60ac91171ab6c0311ddd80fb5e340a?rik=3l%2f4Vx3dZwrPxA&pid=ImgRaw&r=0", stock: 4 },
    { id: 2, nombre: 'Acido Glicolico', precio: 4500, img: "https://images.asos-media.com/products/the-ordinary-soluzione-al-15-di-acido-ascorbico-etilato/10508076-1-nocolour?$XXL$&wid=513&fit=constrain", stock: 5 },
     ];


const getFetch = new Promise((resolve, reject) => {
setTimeout(() => {
resolve (productos)

}, 2000);

})


export default getFetch