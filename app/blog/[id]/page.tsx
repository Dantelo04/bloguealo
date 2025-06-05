"use client";

import { Content } from "@/components/Content/Content";
import { useParams } from "next/navigation";
import React from "react";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { BlogFooter } from "@/components/BlogFooter/BlogFooter";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <Content minHeight="min-h-screen" gap="gap-theme-lg">
      <BlogHighlight
        title={`Blog ${id}`}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image="https://picsum.photos/1200/500"
        author="John Doe"
        date="2021-01-01"
      />
      <div className="flex flex-col w-full gap-theme-lg max-w-[var(--spacing-content-width)]">
        {/* Blog content */}
        <section>
          <h3>Menos es más</h3>
          <img
            src="https://picsum.photos/1096/500"
            alt="Espacio limpio con decoración minimalista"
            className="blog-image"
          />
          <p>
            Vivimos rodeados de objetos, ruido y notificaciones constantes. El
            minimalismo no se trata de tener paredes blancas y cero muebles,
            sino de eliminar lo que no suma. Al reducir lo innecesario, ganamos
            espacio físico y mental. Cada objeto que decidís mantener debería
            tener un propósito claro o traerte alegría.
          </p>
        </section>

        <section>
          <h3>Beneficios del orden diario</h3>
          <img
            src="https://picsum.photos/1096/500"
            alt="Escritorio limpio y organizado con planta"
            className="blog-image"
          />
          <p>
            Empezar el día con tu espacio ordenado impacta directamente en tu
            productividad. No se trata de perfección, sino de crear un ambiente
            que te invite a concentrarte. Tener menos cosas significa menos
            distracciones.
          </p>
          <ul>
            <li>Reduce el estrés visual</li>
            <li>Facilita encontrar lo que necesitás</li>
            <li>Genera sensación de control</li>
          </ul>
        </section>

        <section>
          <h3>Rituales simples para enfocarte</h3>
          <img
            src="https://picsum.photos/1096/900"
            alt="Taza de café junto a una libreta y lápiz"
            className="blog-image"
          />
          <p>
            Crear un pequeño ritual para comenzar tu jornada puede ayudarte a
            enfocarte mejor. Encender una vela, tomar un café o escribir tres
            líneas en un diario son acciones simples que activan tu mente y
            cuerpo para empezar con intención. Elegí una rutina que te
            represente y repetila cada día. Lo simple, bien hecho, tiene poder.
          </p>
        </section>
      </div>
      <BlogFooter likes={100} liked={false} onClick={() => {}} />
    </Content>
  );
}
