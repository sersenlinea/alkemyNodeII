module.exports = {
  up: async (queryInterface, Sequelize) =>
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    queryInterface.bulkInsert('Activities', [
      {
        name: 'Apoyo Escolar para el nivel Primario',
        image: 'image1.png',
        content:
          'El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atención especial! Actualmente se encuentran inscriptos a este programa 150 niños y niñas de 6 a 15 años. Este taller está pensado para ayudar a los alumnos con el material que traen de la escuela, también tenemos una docente que les da clases de lengua y matemática con una planificación propia que armamos en Manos para nivelar a los niños y que vayan con más herramientas a la escuela.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Apoyo Escolar Nivel Secundaria',
        image: 'image2.png',
        content:
          'Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entre 13 y 20 años. Aquí los jóvenes se presentan con el material que traen del colegio y una docente de la institución y un grupo de voluntarios los recibe para ayudarlos a estudiar o hacer la tarea. Este espacio también es utilizado por los jóvenes como un punto de encuentro y relación entre ellos y la institución.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tutorías',
        image: 'image3.png',
        content:
          'Es un programa destinado a jóvenes a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio. El objetivo de esta propuesta es lograr la integración escolar de niños y jóvenes del barrio promoviendo el soporte socioeducativo y emocional apropiado, desarrollando los recursos institucionales necesarios a través de la articulación de nuestras intervenciones con las escuelas que los alojan, con las familias de los alumnos y con las instancias municipales, provinciales y nacionales que correspondan. El programa contempla: Encuentro semanal con tutores (Individuales y grupales); actividad proyecto (los participantes del programa deben pensar una actividad relacionada a lo que quieren hacer una vez terminada la escuela y su tutor los acompaña en el proceso); ayudantías (los que comienzan el 2do año del programa deben elegir una de las actividades que se realizan en la institución para acompañarla e ir conociendo cómo es el mundo laboral que les espera); acompañamiento escolar y familiar (los tutores son encargados de articular con la familia y con las escuelas de los jóvenes para monitorear el estado de los tutorados); beca estímulo (los jóvenes reciben una beca estímulo que es supervisada por los tutores), actualmente se encuentran inscriptos en el programa 30 adolescentes; taller "Arte y Cuentos": Taller literario y de manualidades que se realiza semanalmente; y paseos recreativos y educativos: Estos paseos están pensados para promover la participación y sentido de pertenencia de los niños, niñas y adolescentes al área educativa.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Activities', null, {})
  ,
};
