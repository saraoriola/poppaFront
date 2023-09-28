Contenidos Data:

Carpeta "src/data/csv": conjunto de archivos .csv con los datos sintéticos que hemos preparado para poblar la base de datos.

Carpeta "src/database/DB_Connection_AWS.ipynb": archivo con el código empleado para crear y poblar la base de datos en AWS.

Carpeta "src/database/DB_Connection_POSTGRES.ipynb": archivo con el código empleado para crear y poblar la base de datos en Render.

Carpeta "src/api_data.py": archivo con el código empleado para levantar la api de data, que ofrece los siguientes servicios:
"/" --> 'Hello world'
"/get_sentiment_analysis_feedback" --> Análisis de sentimiento de los mensajes publicados en el Foro como feedback.
"/get_cover_image" --> generación de una imagen a partir del título del evento.
"/get_realtime_translation --> recibe un texto en un idioma y devuelve el original más la traducción a otro idioma. El objetivo es ofrecer el usuario la funcionalidad de traducir automáticamente a otro idioma sus comentarios al publicarlos en el Foro.
"/get_dashboard" --> recibe el título de un evento y devuelve todos los datos que se van a publicar en el dashboard.
