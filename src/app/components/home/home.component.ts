import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  testimonios = [
    {
      nombre: 'Juan Pérez',
      texto: 'El servicio de mantove superó todas mis expectativas. Mi operación vehicular está ahora bajo control.',
      puesto: 'Propietario'
    },
    {
      nombre: 'María González',
      texto: 'El proceso de registro es muy sencillo e intuitivo, no lleva más de 20 minutos tener el control',
      puesto: 'Administradora de Negocio'
    },
    {
      nombre: 'Carlos Rodríguez',
      texto: 'Confianza y profesionalismo son las palabras que definen a Mantove. Definitivamente los recomendaría.',
      puesto: 'Director de Mantenimientos'
    }
  ];

  beneficios = [
    {
      titulo: "Optimización de costos",
     concepto: "Identifica vehículos con alto consumo y posibles problemas mecánicos que afectan la eficiencia.",
    },
    {
      titulo: "Control de mantenimiento preventivo",
     concepto: "Evita reparaciones costosas al detectar fallos a tiempo.",
    },
    {
      titulo: "Presupuesto más preciso",
     concepto: "Permite planificar gastos basados en datos históricos.",
    },
    {
      titulo: "Mejora en la eficiencia operativa",
     concepto: "Monitoreo del rendimiento: Compara el consumo entre vehículos y rutas para optimizar su uso.",
    },
    {
      titulo: "Reducción de tiempos muertos",
     concepto: "Programar mantenimientos evita paradas inesperadas.",
    },
    {
      titulo: "Asignación inteligente de vehículos",
     concepto: "Usa datos para elegir el vehículo más adecuado según su estado y eficiencia.",
    },
    {
      titulo: "Registro para auditorías",
     concepto: "Facilita el cumplimiento de regulaciones ambientales y fiscales.",
    },
    {
      titulo: "Prevención de fraudes",
     concepto: "Detecta irregularidades en el consumo (desvío de combustible, uso no autorizado).",
    },
    {
      titulo: "Reportes para administradores",
     concepto: "Proporciona transparencia en el manejo de recursos.",
    },
    {
      titulo: "Mantenimiento programado",
     concepto: "Alarga la duración de los motores y componentes críticos.",
    },
    {
      titulo: "Detección temprana de fallas",
     concepto: "Evita daños mayores por falta de atención.",
    },
    {
      titulo: "Menos averías en ruta",
     concepto: "Disminuye el riesgo de accidentes por fallas mecánicas.",
    },
    {
      titulo: "Conductor informado",
     concepto: "Registros claros ayudan a los conductores a reportar anomalías.",
    },
    
  ]

  
}
