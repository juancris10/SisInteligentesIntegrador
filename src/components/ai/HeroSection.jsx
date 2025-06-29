import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { RocketOutlined } from "@ant-design/icons";
import { AudioOutlined, SmileOutlined } from "@ant-design/icons"; // Puedes cambiar SmileOutlined por otro ícono de mano si tienes uno

export const HeroSection = ({ scrollToSection,setQuizVisible, onOpenSignSearch  }) => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center ai-gradient relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full float-animation"></div>
        <div
          className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explorando la
          <br />
          <span className="text-yellow-300">Inteligencia Artificial</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Descubre los fundamentos, aplicaciones y el futuro de la IA
          <br />a través de una experiencia interactiva y educativa
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            type="primary"
            size="large"
            icon={<RocketOutlined />}
            className="bg-white text-purple-600 border-none hover:bg-gray-100 pulse-glow"
            onClick={() => scrollToSection("que-es-ia")}
          >
            Empezar el Recorrido
          </Button>
          <Button
            type="primary"
            icon={<SmileOutlined />} // Cambia por un ícono de mano si tienes uno
            size="large"
            className="bg-white text-purple-600 border-none hover:bg-gray-100 pulse-glow"
            onClick={onOpenSignSearch}
          >
            Buscar por Señas
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
