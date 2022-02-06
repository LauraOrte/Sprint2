db.dropDatabase();

db.usuari.insertMany([{
    "email": "PepiLo@gmail.com",
    "password": "192n",
    "nom_usuari": "Pepita12",
    "data_naixement": "10 enero, 1978",
    "sexe": "F",
    "pais": "Espanya",
    "codi_postal": 1234,
    "suscripcio": "Paypal",
    "playlists": {
        "titol": "Atope!",
        "numero_songs": 50,
        "data_creació": "22 enero, 2022",
        "estat": "activa"
    },
    "songs_favorites": 29,
    "songs_compartides": 22,
    "favorit_album": 3,
    "artistas_seguidores": 2
},
{
    "email": "Loloo@gmail.com",
    "password": "122n",
    "nom_usuari": "Lolo22",
    "data_naixement": "11 enero, 1978",
    "sexe": "M",
    "pais": "Espanya",
    "codi_postal": 1224,
    "suscripcio": "Paypal",
    "playlists": {
      "titol": "AtodaMarcha!",
      "numero_songs": 30,
      "data_creació": "21 enero, 2022",
      "estat": "activa"
    },
    "songs_favorites": 10,
    "songs_compartides": 9,
    "favorit_album": 2,
    "artistas_seguidores": 2

}]);

db.suscripcions.insertMany([{
    "data_inici": "22 enero, 2022",
    "data_renovacio": "22 enero, 2023",
    "pagament": {
        "data": "22 enero, 2022",
        "preu": 30,
        "crédit": {
            "número": 1928371828,
            "data_caducitat": "27 marzo, 2025",
            "codi_seguretat": 212
        },
        "Paypal": {
            "nom_usuari": "pepito"
    }
  },
    "suscripció_usuari": "usuari1"
},
{
    "data_inici": "25 enero, 2022",
    "data_renovacio": "25 enero, 2023",
    "pagament": {
      "data": "25 enero, 2022",
      "preu": 30,
      "crédit": {
        "número": 132321828,
        "data_caducitat": "26 marzo, 2025",
        "codi_seguretat": 124
      },
      "Paypal": {
        "nom_usuari": "Antonia"
      }
    },
    "suscripció_usuari": "usuari2"

}]);

db.songs.insertMany([{
    "titol": "I love u",
    "durada": 2.34,
    "num_reproduccions": 233,
    "song_usuari": "Usuari1",
    "song_album": {
        "titol": "SuperStar",
        "any_publicació": 2003,
        "imatge_portada": "imatge1.img",
        "artista": {
           "titol": "LaMala"
        }
    }
},
{
    "titol": "Power",
    "durada": 3.34,
    "num_reproduccions": 13,
    "song_usuari": "Usuari2",
    "song_album": {
        "titol": "PowerPower",
        "any_publicació": 2004,
        "imatge_portada": "imatge2.img",
        "artista": {
            "titol": "LasNenis"
    }
  }
}]);
