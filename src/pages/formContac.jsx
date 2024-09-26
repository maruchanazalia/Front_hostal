// FormComponent.jsx
import React, { useState } from "react";
import axios from "axios";

const FormContact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    mensaje: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/reservaciones/formulario", formData);
      alert("Correo enviado exitosamente");
    } catch (error) {
      console.error("Error al enviar el correo", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 bg-green-100 p-4 border border-green-400 rounded-lg"
    >
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="col-span-1 p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <textarea
        name="mensaje"
        placeholder="Escribe tu mensaje aquí..."
        value={formData.mensaje}
        onChange={handleChange}
        className="col-span-1 p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      ></textarea>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="col-span-1 p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        className="col-span-1 p-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <button
        type="submit"
        className="col-span-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormContact;
