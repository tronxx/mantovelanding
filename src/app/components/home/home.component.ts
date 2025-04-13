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
      texto: 'El servicio de Meridiano60 superó todas mis expectativas. Mi trámite catastral se resolvió en tiempo récord.',
      puesto: 'Propietario'
    },
    {
      nombre: 'María González',
      texto: 'La asesoría personalizada que recibí fue invaluable. Me ayudaron a entender todo el proceso sin complicaciones.',
      puesto: 'Inversionista Inmobiliaria'
    },
    {
      nombre: 'Carlos Rodríguez',
      texto: 'Confianza y profesionalismo son las palabras que definen a Meridiano60. Definitivamente los recomendaría.',
      puesto: 'Arquitecto'
    }
  ];
}
