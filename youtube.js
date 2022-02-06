db.dropDatabase();

db.usuari.insertMany([{
    "email": "LauraO@gmail.com",
    "password": "2121N",
    "nom": "Laura",
    "data_naixement": "marzo 22, 1992",
    "sexe": "F",
    "pais": "Espanya",
    "codi_postal": 12929,
    "nom_canal": "ComidaSaludable",
    "descripcio": "comida muy saludable, tutoriales",
    "date": "21 enero, 2022",
    "comentaris": {
      "text": "no estoy de acuerdo con tu opinión",
      "data": "22 enero, 2022"
    },
    "reacció_comentari": {
      "reacció": "Dislike",
      "data": "22 enero, 2022"
    },
    "reacció_videos": {
      "reaccio": "like",
      "data": "22 enero, 2022"
    }
},
{
    "email": "mariaO@gmail.com",
    "password": "21s1N",
    "nom": "Maria",
    "data_naixement": "marzo 1, 1991",
    "sexe": "F",
    "pais": "Espanya",
    "codi_postal": 12119,
    "nom_canal": "Fitness",
    "descripcio": "Ejercicios en casa, tutoriales",
    "date": "23 enero, 2022",
    "comentaris": {
        "text": "eso no te hace tener abdominales!",
        "data": "25 enero, 2022"
  },
    "reacció_comentari": {
        "reacció": "Dislike",
        "data": "25 enero, 2022"
  },
    "reacció_videos": {
        "reaccio": "like",
        "data": "25 enero, 2022"
  }

}]);

db.playlists.insertMany([{
    "nom_playlist": "Chumbachumba",
    "data_creation": "22 enero, 2022",
    "estat": "publica",
    "playlist_usuari": "usuari2",
    "videos": {
        "titol": "video1",
        "descripcio": "lo peta",
        "grandaria": "2x5",
        "thumbnail": "video1.img",
        "reproduccions": "50",
        "data": "22 enero, 2022",
        "estat": "public",
        "video_usuari": "usuari1",
        "nom_etiqueta": "atope"
    }
},
{   
    "nom_playlist": "yeah!",
    "data_creation": "22 enero, 2022",
    "estat": "publica",
    "playlist_usuari": "usuari3",
    "videos": {
    "titol": "video3",
    "descripcio": "yeah baby",
    "grandaria": "2x5",
    "thumbnail": "video3.img",
    "reproduccions": "50",
    "data": "22 enero, 2022",
    "estat": "public",
    "video_usuari": "usuari1",
    "nom_etiqueta": "yeah!!!"
    }
    
}]);