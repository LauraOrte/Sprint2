db.dropDatabase();

db.botiga.insertMany([{
    "adreça": "CalleTienda2",
    "codigo_postal": 12123,
    "localitat": "Barcelona",
    "provincia": "Barcelona",
    "empleats": {
    "nom": "Paco",
    "cognom": "rodriguez",
    "nif": 19191919,
    "telf": 92334123,
    "treball": "repartidor"
    }
  },
  {
    "adreça": "CalleTienda3",
    "codigo_postal": 12113,
    "localitat": "Barcelona",
    "provincia": "Barcelona",
    "empleats": {
        "nom": "Anna",
        "cognom": "perez",
        "nif": 19001919,
        "telf": 92334123,
        "treball": "repartidor"
    }
}]);

db.clients.insertMany([{
    "_id": {
    ObjectId("00000000000000001")
  },
    "clients": {
    "nom": "Maria",
    "cognom": "Lopez",
    "adreça": "callePerdida1",
    "codigo_postal": 1231,
    "telf": 60000009,
    "localitat": "Hospitalet",
    "provincia": "Barcelona"
    },
    "hora_comanda": "'21 marz, 2021, 18:00",
    "tipus": "domicili",
    "comanda_botiga": "botiga1",
    "comanda_clients": "comanda1",
    "preuTotal": 15.97
},
{   "clients": {
    "nom": "Pepe",
    "cognom": "Leo",
    "adreça": "callePerdida2",
    "codigo_postal": 1111,
    "telf": 60022209,
    "localitat": "Hospitalet",
    "provincia": "Barcelona"
  },
    "hora_comanda": "'21 marz, 2021, 19:00",
    "tipus": "domicili",
    "comanda_botiga": "botiga2",
    "comanda_clients": "comanda2",
    "preuTotal": 19.97
}]);

db.clients.insertMany([{
  "nom": "Beguda1",
  "descripcio": "con mucho azucar",
  "imatge": "beguda1.img",
  "preu": 2.99
  
},{
  "nom": "Beguda2",
  "descripcio": "con mucho azucar",
  "imatge": "beguda2.img",
  "preu": 3.99

},{
  "nom": "Pizza1",
  "categoria_pizza": "categoria1",
  "descripcio": "con mucho queso",
  "imatge": "pizza1.img",
  "preu": 9.99

},{
  "nom": "Pizza2",
  "categoria_pizza": "categoria2",
  "descripcio": "con mucho queso y peperoni",
  "imatge": "pizza2.img",
  "preu": 10.99

},{
  "nom": "Hamburguesa1",
  "descripcio": "con mucho queso y cebolla",
  "imatge": "hamburguesa1.img",
  "preu": 8.99

}]);
