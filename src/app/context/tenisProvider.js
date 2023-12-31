'use client'
import React, { createContext, useState, useEffect } from 'react'

export const TenisContex = createContext();

export const TenisProvider = ({children}) => {

    const [idioma, setIdioma] = useState('esp');
    // const [imgGaleria, setImgGaleria] = useState([]);
    // const [imgPortada, setImgPortada] = useState([]);
    // const [imgEspecialidades, setImgEspecialidades] = useState([]);

    // useEffect(() => {
    //     fetch('./api/get')
    //         .then(response => response.json())
    //         .then(data => {
    //             const img = data.map(item => item);
    //             const galeriaImages = img.filter(image => image.url.includes('/uploads/galeria/'));
    //             setImgGaleria(galeriaImages);
    //             const portadaImages = img.filter(image => image.url.includes('/uploads/portada/'));
    //             setImgPortada(portadaImages);
    //             const especialidadesImages = img.filter(image => image.url.includes('/uploads/especialidades/'));
    //             setImgEspecialidades(especialidadesImages);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }, []);

    const data = {idioma, setIdioma }

    return (
        <TenisContex.Provider value={data}>
            {children}
        </TenisContex.Provider>
    )
}
