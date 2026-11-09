---
title: "Latencia real de los modelos de razonamiento"
description: "Los modelos que 'piensan' más tiempo mejoran la calidad, pero la latencia se dispara. Aquí medí tiempos reales y cuándo merece la pena pagar el coste."
pubDate: 2026-11-07
category: "modelos"
lang: "es"
featured: false
metrics:
  cost: "2–8× más tokens de razonamiento"
  bottleneck: "Latencia percibida (8–40s)"
  realUtility: "Alta solo en tareas de alta precisión"
conclusion: "Úsalos cuando el error sea caro. Para la mayoría de flujos de producto, un modelo rápido + buena ingeniería de prompts sigue ganando en coste total y experiencia de usuario."
---

Los modelos de razonamiento (o "thinking models") han cambiado la conversación. Ya no solo importa la calidad del output final: importa cuánto tiempo tardan en llegar ahí.

### Lo que medí

En tareas de análisis y planificación, la calidad sube de forma notable. En tareas simples de extracción o clasificación, el margen se estrecha mucho y la latencia se convierte en el problema principal.

### El trade-off real

- Más tokens de razonamiento = más coste.
- Más tiempo de espera = peor experiencia en productos interactivos.
- La mejora de calidad no es lineal: a partir de cierto punto, el retorno disminuye.

### Recomendación práctica

Ten dos rutas. Una rápida por defecto. Otra de razonamiento profundo solo cuando detectes que la tarea lo justifica (o cuando el usuario lo pida explícitamente).
