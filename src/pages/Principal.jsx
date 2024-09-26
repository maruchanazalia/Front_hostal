import React, { useState } from 'react';
import Prueba from "../assets/prueba1.png";
import Prueba2 from "../assets/prueba2.png";
import Prueba3 from "../assets/prueba3.jpeg";
import  Registro from "../pages/FormComponent";
import FormContact from './formContac'

export const Principal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('Inicio');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (content) => {
    setActiveContent(content);
    setIsMenuOpen(false);
  };

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    numero_personas: '',
    fecha_llegada: '',
    fecha_salida: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <>
      <nav className='bg-transparent w-full h-14 flex items-center justify-between px-4'>
        <div className="flex lg:hidden w-full items-center justify-between">
          <button className='lg:w-24 lg:h-9 lg:m-2 lg:text-customGreen lg:font-serif lg:border text-sm hover:text-green-700 w-24 h-8  bg-customGreen font-bold font-serif text-white'>
            Reservar
          </button>

          <button className='block lg:hidden w-8 h-8 m-2 lg:text-customGreen' onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex w-full items-center justify-center">
          <div className="flex items-center">
            <button 
              onClick={() => handleMenuClick('Inicio')}
              className={`lg:w-24 lg:h-9 lg:m-2 lg:text-customGreen lg:font-serif lg:italic text-lg hover:text-green-700 ${activeContent === 'Inicio' ? 'border-b-2 border-green-800' : ''}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => handleMenuClick('La Villa')}
              className={`lg:w-28 lg:h-9 lg:m-2 lg:text-customGreen lg:font-serif lg:italic text-lg hover:text-green-700 ${activeContent === 'La Villa' ? 'border-b-2 border-green-800' : ''}`}
            >
              Casa del sol
            </button>
            <button 
              onClick={() => handleMenuClick('Tarifas y Disponibilidad')}
              className={`lg:w-52 lg:h-9 lg:m-2 lg:text-customGreen lg:font-serif lg:italic text-lg hover:text-green-700 ${activeContent === 'Tarifas y Disponibilidad' ? 'border-b-2 border-green-800' : ''}`}
            >
                    Reservaciones
            </button>
            <button 
              onClick={() => handleMenuClick('Contáctanos')}
              className={`lg:w-24 lg:h-9 lg:m-2 lg:text-customGreen lg:font-serif lg:italic text-lg hover:text-green-700 ${activeContent === 'Contáctanos' ? 'border-b-2 border-green-800' : ''}`}
            >
              Contáctanos 
            </button>
          </div>

          <button className='lg:w-24 lg:h-9 lg:m-2 lg:text-customGreen lg:font-serif lg:border text-sm border-green-800'>
            Reservar
          </button>
        </div>
      </nav>

      {/* Slide menu */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 w-3/4 max-w-xs`}
      >
        <button className="absolute top-4 right-4 text-black" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-start p-6 space-y-4">
          <button 
            onClick={() => handleMenuClick('Inicio')}
            className={`text-xl lg:text-customGreen font-serif italic hover:text-green-700 ${activeContent === 'Inicio' ? 'border-b-2 border-green-800' : ''}`}
          >
            Inicio    
          </button>
          <button 
            onClick={() => handleMenuClick('La Villa')}
            className={`text-xl lg:text-customGreen font-serif italic hover:text-green-700 ${activeContent === 'La Villa' ? 'border-b-2 border-green-800' : ''}`}
          >
            Casa del sol
          </button>
          <button 
            onClick={() => handleMenuClick('Tarifas y Disponibilidad')}
            className={`text-xl lg:text-customGreen font-serif italic hover:text-green-700 ${activeContent === 'Tarifas y Disponibilidad' ? 'border-b-2 border-green-800' : ''}`}
          >
            Reservaciones
          </button>
          <button 
            onClick={() => handleMenuClick('Contáctanos')}
            className={`text-xl lg:text-customGreen font-serif italic hover:text-green-700 ${activeContent === 'Contáctanos' ? 'border-b-2 border-green-800' : ''}`}
          >
            Contáctanos 
          </button>
        </div>
      </div>

      <header className='lg:w-full lg:h-52 flex justify-center flex-col items-center'>
        <h1 className='lg:text-5xl lg:font-serif font-serif text-4xl'>Casa del sol</h1>
        <h4 className='lg:text-xl lg:font-serif font-serif text-xs'>Somos tu mejor opción en vacaciones y en todo</h4>
      </header>
      {/* Contenido dinámico */}
      <main className='transition-opacity duration-500 ease-in-out'>
        {activeContent === 'Inicio' && (
          <div className='fade-in'>
       <body className=' lg:w-full lg:flex lg: lg:flex-col w-full'>
<div className='lg:w-full lg:h-screen lg:flex lg:flex-row w-full h-screen felx '>

        <img className="lg:m-7  lg:w-3/5 lg:h-4/5 lg:transform lg:scale-120 lg:absolute lg:left-0 transform scale-120 w-96 absolute right-1 -mt-80" src={Prueba} alt="" />
        <div className='lg:w-1/4 lg:h-3/5  mt-96 -z-10  w-full   h-3/5 bg-customGreen  top-2/4 right-80 flex flex-col items-center  lg:z-10 lg:bg-customGreen lg:absolute lg:top-2/4 lg:right-80 lg:flex lg:flex-col lg:items-center lg:mt-0 '>
        <h1 className='lg:text-black lg:text-lg lg:m-6 lg:font-serif  lg:mt-2 text-white text-lg m-6 font-serif mt-28 font-bold '>
TU ESCAPE PRIVADO CON HOSTAL CASA DEL SOL
        </h1>
        <h3 className='lg:text-black lg-text-xl lg:font-serif lg:m-8 text-black text-xl font-serif m-10 text-center'>
        Si buscas hospedarte en un lugar en la ciudad de Comitán de Domínguez muy cerca del centro histórico nosotros somos la mejor opción.
        </h3>

        <button className='lg:w-28 lg:h-10 lg:bg-white lg:mt-20 lg:text-customGreen lg:font-extrabold lg:-ml-44 w-28 h-10 bg-white mt-1 text-customGreen font-extrabold '>
RESERVAR
        </button>
        </div>
</div>
<div className='relative lg:w-full lg:h-2/3 lg:bg-customGreen lg:flex lg:flex-col lg:justify-start lg:mt-52'>
<div className='lg:w-full lg:h-80 lg:flex lg:flex-row justify-evenly items-center'>
<div className='lg:w-80 lg:h-60 '>
<h1 className='lg:text-white lg:font-serif lg:font-light lg:text-lg'>
    UNA EXPERIENCIA QUE JAMÁS OLVIDAREMOS
  </h1>
  <h3 className='lg:text-white lg:font-serif lg:font-extrabold mt-8'>
    Estuvimos rodeados de naturaleza y paz. Nos encantó cada detalle de nuestra estancia. Definitivamente volveremos.
  </h3>
  <h5 className='lg:text-black lg:font-serif lg:font-thin lg:text-xs mt-4 lg:italic'>
    /Carlos Ramírez.
  </h5>
</div>
<div className='lg:w-80 lg:h-60'>
<h1 className='lg:text-white lg:font-serif lg:font-light lg:text-lg'>
      EL MEJOR LUGAR PARA DESCONECTARSE DEL MUNDO
    </h1>
    <h3 className='lg:text-white lg:font-serif lg:font-extrabold mt-8'>
      Un ambiente relajado y lleno de belleza natural. Fue el escape perfecto del estrés de la ciudad. ¡Volveremos pronto!
    </h3>
    <h5 className='lg:text-black lg:font-serif lg:font-thin lg:text-xs mt-4 lg:italic'>
      /Fernanda González.
    </h5>
</div>
</div>
<div className='lg:w-full lg:h-80 lg:flex lg:flex-row justify-start items-center'>
<div className='lg:w-80 lg:h-60  ml-72'>
<h1 className='lg:text-white lg:font-serif lg:font-light lg:text-lg'>
    PERFECTO PARA UNA ESCAPADA ROMÁNTICA
  </h1>
  <h3 className='lg:text-white lg:font-serif lg:font-extrabold mt-8'>
    Mi pareja y yo disfrutamos cada momento, desde la vista increíble hasta la comida deliciosa. Sin duda, el lugar ideal para relajarse.
  </h3>
  <h5 className='lg:text-black lg:font-serif lg:font-thin lg:text-xs mt-4 lg:italic'>
    /Ana López.
  </h5>
</div>
</div>
  <img 
    className='absolute -bottom-32 right-24 w-2/5 h-3/5 transform scale-120 m-7' 
    src={Prueba2} 
    alt="" 
  />
</div>

<div>
</div>
<div className='lg:flex lg:flex-row lg:w-full lg:h-96 lg:mt-60 lg:justify-around lg:items-center'>
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958654.288816442!2d-94.34224635703211!3d16.501005466254313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d475622fc66a9%3A0xc21bb2f3a7e1ea8a!2sG%C3%ADas%20Tur%C3%ADsticos%20Chiapas!5e0!3m2!1ses-419!2smx!4v1724637498288!5m2!1ses-419!2smx" 
  width="600" 
  height="350" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
<div className='lg:w-80 lg:text-green-900 lg:mr-52 lg:relative'>
  <h1 className='lg:text-center lg:font-serif lg:font-semibold'>
    Hostal casa del sol se encuentra ubicado en la ciudad de Comitán de Domínguez muy cerca
  </h1>
  <h3 className='lg:text-center lg:font-serif lg:font-extralight lg:mt-4'>
  30060, Calle Segunda Nte. Pte. 120, Candelaria, Comitán de Domínguez, Chis.
  </h3>

  <h1 className='lg:text-center lg:font-serif lg:font-extrabold lg:mt-4'>¿Tienes alguna pregunta? Llámanos al: +52 963 156 9802</h1>
</div>

</div>
<footer className='lg:mt-32 lg:bg-customGreen lg:h-20'>

</footer>
       </body>
          </div>
        )}
        {activeContent === 'La Villa' && (
       <>
          <div className='fade-in'>
            <div className='lg:w-full h-2/4 '>

          <img className=' m-7   w-3/5 h-screen transform scale-120'  src={Prueba3} alt="" />
          <div className='lg:w-1/4 lg:h-3/5 lg:bg-customGreen lg:absolute lg:top-96 lg:right-96 lg:flex lg:flex-col '>
          <h1 className='lg:text-white lg:font-serif lg:font-semibold lg:text-3xl lg:m-4'>
Casa del sol.
          </h1>
          <h3 className='lg:text-white lg:font-serif lg:font-light lg:text-1xl lg:m-4'>
          Somos una empresa dedicada a ofrecer experiencias únicas de turismo alternativo en Chiapas. Nos especializamos en tours privados y compartidos que permiten a nuestros clientes descubrir la belleza y diversidad cultural de la región de manera auténtica y personalizada.
          </h3>

          <button className='lg:bg-white lg:w-36 lg:h-12 lg:text-customGreen lg:font-extrabold lg:m-4 lg:mt-24'>
RESERVAR
          </button>
          </div>
            </div>
            {/* <div  className='lg:w-full h-2/4 lg:mt-24  '>
            <img className=' m-7   w-1/3 h-screen lg:absolute lg:right-72 transform scale-120'  src={Prueba4} alt="" />
            <div className='lg:w-1/4 lg:h-3/5 lg:bg-customGreen lg:absolute lg:left-96 lg:flex lg:flex-col '>
          <h1 className='lg:text-white lg:font-serif lg:font-semibold lg:text-3xl lg:m-4'>
          Las Nubes: Entrada a la Biosfera de Montes Azules

          </h1>
          <h3 className='lg:text-white lg:font-serif lg:font-light lg:text-1xl lg:m-4'>
          Descubre la entrada a la Biosfera de Montes Azules a través de Las Nubes, un paraíso escondido en el corazón de Chiapas. Este destino te invita a sumergirte en un entorno donde la naturaleza y la biodiversidad reinan, ofreciendo una experiencia inmersiva en la belleza salvaje de la región.
          </h3>

          <button className='lg:bg-white lg:w-36 lg:h-12 lg:text-customGreen lg:font-extrabold lg:m-4 lg:mt-4'>
RESERVAR
          </button>
          </div>
          
            </div> */}

          </div>
          <div className='lg:flex lg:flex-row lg:w-full lg:h-96 lg:mt-96 lg:justify-around lg:items-center'>
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958654.288816442!2d-94.34224635703211!3d16.501005466254313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d475622fc66a9%3A0xc21bb2f3a7e1ea8a!2sG%C3%ADas%20Tur%C3%ADsticos%20Chiapas!5e0!3m2!1ses-419!2smx!4v1724637498288!5m2!1ses-419!2smx" 
  width="600" 
  height="350" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
<div className='lg:w-80 lg:text-green-900 lg:mr-52 lg:relative'>
  <h1 className='lg:text-center lg:font-serif lg:font-semibold'>
    Hostal casa del sol se encuentra ubicado en la ciudad de Comitán de Domínguez muy cerca
  </h1>
  <h3 className='lg:text-center lg:font-serif lg:font-extralight lg:mt-4'>
  30060, Calle Segunda Nte. Pte. 120, Candelaria, Comitán de Domínguez, Chis.
  </h3>

  <h1 className='lg:text-center lg:font-serif lg:font-extrabold lg:mt-4'>¿Tienes alguna pregunta? Llámanos al: +52 963 156 9802</h1>
</div>

</div>
<footer className='lg:mt-32 lg:bg-customGreen lg:h-20'>

</footer>
       
       
       </>
        )}
        {activeContent === 'Tarifas y Disponibilidad' && (
          <div className='fade-in'>
          
          <Registro/>


    <div className='lg:flex lg:flex-row lg:w-full lg:h-96 lg:mt-60 lg:justify-around lg:items-center'>
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958654.288816442!2d-94.34224635703211!3d16.501005466254313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d475622fc66a9%3A0xc21bb2f3a7e1ea8a!2sG%C3%ADas%20Tur%C3%ADsticos%20Chiapas!5e0!3m2!1ses-419!2smx!4v1724637498288!5m2!1ses-419!2smx" 
  width="600" 
  height="350" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
<div className='lg:w-80 lg:text-green-900 lg:mr-52 lg:relative'>
  <h1 className='lg:text-center lg:font-serif lg:font-semibold'>
    Hostal casa del sol se encuentra ubicado en la ciudad de Comitán de Domínguez muy cerca
  </h1>
  <h3 className='lg:text-center lg:font-serif lg:font-extralight lg:mt-4'>
  30060, Calle Segunda Nte. Pte. 120, Candelaria, Comitán de Domínguez, Chis.
  </h3>

  <h1 className='lg:text-center lg:font-serif lg:font-extrabold lg:mt-4'>¿Tienes alguna pregunta? Llámanos al: +52 963 156 9802</h1>
</div>

</div>
<footer className='lg:mt-32 lg:bg-customGreen lg:h-20'>

</footer>
          </div>
        )}
        {activeContent === 'Contáctanos' && (
          <div className='fade-in'>
         <body >
<div className='lg:flex lg:flex-row w-full lg:h-auto lg:justify-center lg:mt-10'>
<div className='lg:w-3/5 h-16 lg:bg-customGreen lg:justify-center lg:flex lg:items-center lg:text-white lg:font-serif lg:text-2xl'>CONTÁCTANOS</div>

</div>
<div className='lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center'>
<h2 className='  lg:text-green-900 lg:font-serif lg:xs lg:font-light lg:mt-24 lg:text-center lg:w-3/5 '>
¿Tienes preguntas o necesitas más información? Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para resolver cualquier duda o solicitar detalles adicionales sobre nuestros tours y servicios. Nuestro equipo está disponible para brindarte la asistencia que necesitas para planificar una experiencia inolvidable en Chiapas.
</h2>

</div>
<div className='lg:w-full lg:h-auto lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-32 '>
  <h1 className=' lg:text-green-900 lg:font-serif lg:font-semibold'>
escribenos hoy mismo a este contacto:
  </h1>
  <h1 className=' lg:text-green-900 lg:font-serif lg:font-semibold'>
casadelsol@gmail.com 
  </h1>
  <h1 className=' lg:text-green-900 lg:font-serif lg:font-semibold'>
<h1 className=' lg:text-green-900 lg:font-serif lg:font-semibold'>
o simplemente completa este formulario a continuación y te contactaremos:
  </h1>
  </h1>
  <div className="max-w-lg mx-auto p-4">
      

          <FormContact/>



    </div>
</div>

<div className='lg:flex lg:flex-row lg:w-full lg:h-96 lg:mt-60 lg:justify-around lg:items-center'>
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958654.288816442!2d-94.34224635703211!3d16.501005466254313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d475622fc66a9%3A0xc21bb2f3a7e1ea8a!2sG%C3%ADas%20Tur%C3%ADsticos%20Chiapas!5e0!3m2!1ses-419!2smx!4v1724637498288!5m2!1ses-419!2smx" 
  width="600" 
  height="350" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
<div className='lg:w-80 lg:text-green-900 lg:mr-52 lg:relative'>
  <h1 className='lg:text-center lg:font-serif lg:font-semibold'>
    Hostal casa del sol se encuentra ubicado en la ciudad de Comitán de Domínguez muy cerca
  </h1>
  <h3 className='lg:text-center lg:font-serif lg:font-extralight lg:mt-4'>
  30060, Calle Segunda Nte. Pte. 120, Candelaria, Comitán de Domínguez, Chis.
  </h3>

  <h1 className='lg:text-center lg:font-serif lg:font-extrabold lg:mt-4'>¿Tienes alguna pregunta? Llámanos al: +52 963 156 9802</h1>
</div>

</div>
<footer className='lg:mt-32 lg:bg-customGreen lg:h-20'>

</footer>
         </body>
          </div>
        )}
      </main>
    </>
  );
};
