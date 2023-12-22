'use client'
import React, { useContext } from 'react'
import { datos } from './db'
import { TenisContex } from '@/app/context/tenisProvider'
import imagen from '../../../../public/profesor.png'
import Image from 'next/image'

export const About = () => {
  const {idioma}=useContext(TenisContex);
  const datosAbout =( idioma==='esp') ? datos?.esp : datos?.ing;
  const titulo= datosAbout.about.titulo;
  const texto= datosAbout.about.texto;
  return (
    <div className="flex flex-col sm:flex-row items-center m-24 rounded-lg" style={{ backgroundColor: 'rgb(0,59,112)' }}>

      {/* Image */}
      <div className="order-2 sm:order-1 flex items-center justify-center md:rounded-b-lg  p-8" style={{ backgroundColor: 'rgb(175,199,38)', height: '100%' }}>

          <Image
            src={imagen}
            alt="Descripción de la imagen"
            width={500}
            height={500}
            objectFit="cover" // Ensure the image covers the container
            className="rounded-lg"
          />

      </div>

      {/* Text and Title */}
      <div className="text-center order-1 sm:order-2 text-white p-8">
        <p className="mb-2 text-4xl font-semibold">
          {titulo}
        </p>
        <p className="text-lg">
          {texto}
        </p>
      </div>

    </div>
  );
};