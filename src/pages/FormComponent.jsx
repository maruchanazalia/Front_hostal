import axios from 'axios';
import { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    numero_personas: '', // Asegúrate de que el nombre coincida con el campo del backend
    fecha_llegada: '',
    fecha_salida: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Asegúrate de que el campo numero_personas sea un número
    const formDataWithNumbers = {
      ...formData,
      numero_personas: formData.numero_personas ? parseInt(formData.numero_personas, 10) : null
    };

    try {
      const response = await axios.post('http://localhost:3000/reservaciones', formDataWithNumbers);

      alert('Reservación creada con éxito');

      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        numero_personas: '',
        fecha_llegada: '',
        fecha_salida: '',
      });
    } catch (error) {
      console.error('Error al crear la reservación:', error);
      alert('Hubo un error al crear la reservación. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Nombre Completo: <span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-4">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-1/2 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            className="w-1/2 p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          E-mail: <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ex: myname@example.com"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
          Teléfono: <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_personas">
          Número de Personas: <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="numero_personas" // Asegúrate de que el nombre coincida con el backend
          value={formData.numero_personas}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha_llegada">
          Día de llegada: <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="fecha_llegada" // Asegúrate de que el nombre coincida con el backend
          value={formData.fecha_llegada}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha_salida">
          Día de salida: <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="fecha_salida" // Asegúrate de que el nombre coincida con el backend
          value={formData.fecha_salida}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-customGreen text-white py-2 px-4 rounded hover:bg-green-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
