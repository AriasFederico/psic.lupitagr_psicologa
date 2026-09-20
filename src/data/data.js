// imagenes con nombre de profesionales

import logo from '../assets/logo.png';
import imagen_ref from '../assets/ref.png';

//

const clinicInfo = {
  name: 'MindComfort',
  secondName: 'Acompañamiento psicológico',
  phone_number: '522225296965',
  hours: 'Atención en línea con turno previo',
  location: 'Modalidad 100% Online',
};

const { name, phone_number } = clinicInfo;

const buildWaLink = (message) =>
  `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;

// data estatica
export const landing_data = {
  header: {
    logo: {
      // en caso de usar logo
      src: logo,
      href: '/',
      alt: clinicInfo.name,
      text: clinicInfo.name,
      span: clinicInfo.secondName,
    },

    nav_links: [
      { id: 'about', label: 'Sobre mí', href: '#team' },
      { id: 'services', label: 'Servicios', href: '#services' },
      { id: 'faq', label: 'Preguntas frecuentes', href: '#faq' },
    ],
    cta: {
      icon: 'message',
      label: 'Reserva de turnos',
      href: buildWaLink(
        'Hola Psic. Guadalupe, quisiera consultar por un turno para iniciar mi proceso.',
      ),
      size: 'sm',
      variant: 'secondary',
    },
  },

  hero: {
    badge: 'Acompañamiento Psicológico',
    title: 'Un espacio para volver a ti',
    subtitle:
      'Acompañamiento desde la empatía, la escucha y el respeto. Recordando que pedir apoyo también es una forma de cuidarnos.',
    ctas: [
      {
        icon: 'message',
        label: 'Agendar consulta',
        href: buildWaLink(
          'Hola Psic. Guadalupe, me gustaría agendar una consulta online.',
        ),
        size: '',
        variant: 'secondary',
      },
      {
        label: 'Servicios',
        href: '#services',
        size: '',
        variant: 'primary',
      },
    ],
  },

  services: {
    title: 'Servicios y Modalidad de Atención',
    subtitle:
      'Acompañamiento especializado adaptado a cada etapa del desarrollo.',

    // cards
    items: [
      {
        icon: 'child',
        id: 1,
        title: 'Psicoterapia Individual Online',
        desc: 'Un espacio de escucha activa, libre de juicios, para procesar tus emociones y trabajar en tu bienestar personal.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: buildWaLink(
            'Hola Psic. Guadalupe, quisiera consultar sobre las sesiones de Psicoterapia Individual Online.',
          ),
        },
        delay: '.15',
      },
      {
        icon: 'user',
        id: 2,
        title: 'Educación Emocional',
        desc: 'Aprende a comprender lo que sientes, desarrollar recursos psicológicos y gestionar tus emociones de manera saludable.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: buildWaLink(
            'Hola Psic. Guadalupe, quisiera más información sobre las consultas de Educación Emocional.',
          ),
        },
        delay: '.15',
      },
      {
        icon: 'users',
        id: 3,
        title: 'Acompañamiento Empático',
        desc: 'Proceso adaptado a tus tiempos para transitar momentos de cambio, ansiedad o búsqueda de claridad en tu vida.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: buildWaLink(
            'Hola Psic. Guadalupe, quisiera orientación para iniciar un proceso de acompañamiento.',
          ),
        },
        delay: '.15',
      },
    ],
  },

  team: {
    title: 'Profesional a cargo',
    subtitle: 'Atención personalizada y compromiso ético.',
    items: [
      {
        id: 2,
        image: {
          src: imagen_ref,
          alt: 'Psic. Guadalupe Galaviz Rodríguez',
        },
        name: 'Psic. Guadalupe Galaviz Rodríguez',
        speciality: 'Psicóloga Clínica / Terapeuta Online',
        cta: {
          icon: 'message',
          label: 'Reservar turno',
          href: buildWaLink(
            'Hola Psic. Guadalupe, quisiera agendar una primera sesión.',
          ),
        },
      },
    ],
    about: [
      '¿Quién soy? — Soy la Psic. Guadalupe Galaviz Rodríguez. Decidí crear MindComfort con la intención de brindar un acompañamiento psicológico basado en la empatía, la escucha y el respeto.',
      'Un espacio para volver a ti — A veces no necesitamos tener todo resuelto para comenzar a hablar de lo que sentimos. Creo firmemente en la importancia de ofrecer un lugar donde puedas expresarte con tranquilidad.',
      'Mi enfoque — Trabajo desde la educación emocional y el acompañamiento humano. Entiendo que pedir apoyo es una forma de cuidarnos y un paso valioso hacia tu bienestar.',
      'Modalidad Online — Te acompaño sin importar dónde te encuentres, brindándote la comodidad y la flexibilidad de llevar tu proceso de manera virtual.',
    ],
  },

  about: {
    title: 'Consultorio',
    subtitle: 'Subtítulo de referencia del contenido.',
    slides: [
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/4907e4d45_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/4907e4d45_generated_image.webp',
        alt: '2',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/4ad7e40e5_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/4ad7e40e5_generated_image.webp',
        alt: '1',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/09563da99_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/09563da99_generated_image.webp',
        alt: '4',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/7716add0e_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/7716add0e_generated_image.webp',
        alt: '3',
      },
    ],
  },

  reviews_section: {
    badge: { icon: 'star', label: 'escucha y acompañamiento' },
    title: 'Testimonios',
    subtitle:
      'Por razones éticas y de confidencialidad, los testimonios se comparten preservando la identidad de pacientes y familias.',

    items: [
      {
        id: 1,
        name: 'Nombre Apellido',
        rating: 5,
        review: 'Nos sentimos contenidos durante todo el proceso',
      },
      {
        id: 2,
        name: 'Nombre Apellido',
        rating: 5,
        review:
          'Pudimos comprender mejor lo que le estaba pasando a nuestro hijo.',
      },
      {
        id: 3,
        name: 'Nombre Apellido',
        rating: 5,
        review: 'Encontramos un espacio de confianza para hablar',
      },
    ],

    cta: {
      label: 'Ver todas las opiniones en Google',
      href: '', // link a google coments
      variant: '',
    },
  },

  cta_section: {
    title: '¿Te gustaría dar el primer paso?',
    text: 'A veces no necesitamos tener todo resuelto para empezar. Escribime para despejar tus dudas o agendar tu primera sesión.',
    cta: [
      {
        icon: 'message',
        label: 'Reservar turno',
        variant: 'secondary',
        href: buildWaLink(
          'Hola Lic. Sol Paz, quisiera agendar una primera entrevista.',
        ),
      },
    ],
  },

  faq_section: {
    title: 'Preguntas frecuentes',

    items: [
      {
        id: 1,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 6,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 7,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },

  coverage_section: {
    title: 'Áreas en las que puedo ayudarte',
    items: [
      'Autoestima',
      'Estrés',
      'Regulación emocional',
      'Ansiedad',
      'Organización',
      'Hábitos',
      'Relaciones y límites personales',
      'Escucha activa',
      'Orientación',
      'Apoyo emocional',
      'Un espacio seguro y respetuoso',
      'Libre de prejuicios',
    ],
  },

  location_section: {
    badge: { icon: 'online', label: 'Atención online' },
    title: 'Reservá tu sesión online',
    subtitle:
      'Las consultas se realizan de forma 100% online, con horarios flexibles y acompañamiento personalizado desde donde estés.',
    cta: {
      icon: 'message',
      label: 'Reservar turno',
      href: buildWaLink(
        'Hola Lic. Sol Paz, quisiera agendar una primera entrevista.',
      ),
      variant: 'secondary',
    },
  },

  footer: {
    logo: clinicInfo.name,
    cta: { icon: 'message', label: 'Reserva de turnos', variant: '' },

    rrss: [
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/groups/974306967539760/user/100000068052718/?locale=es_LA',
      },
      {
        icon: 'instagram',
        href: 'https://www.instagram.com/lic_sol_paz.psicologa/?hl=es-la',
      },
    ],

    copyright: `© 2026 ${clinicInfo.name}. Todos los derechos reservados.`,
  },
};
