import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {
  miMascota: Mascota;

  constructor() {
    this.miMascota = {
      nombre: 'Luna',
      especie: 'Gato',
      edad: 3,
      nivelFelicidad: 100,
      color: 'blanco',
      hambre: 100,
      energia: 100,
      salud: 100,
      nivelExperiencia: 1,
      sexo: 'Femenino',
      peso: 5
    };
  }

  alimentarMascota() {
    if (this.miMascota.nivelFelicidad < 100){
      if (this.miMascota.hambre < 100) {
        console.log('¡Gracias por alimentarme! Me siento feliz.');
        this.miMascota.nivelFelicidad += 5;
        this.miMascota.hambre -= 10;
        this.miMascota.energia += 5;
        this.miMascota.peso += 0.5;
      }
    }
    if (this.miMascota.nivelFelicidad = 100){
      if (this.miMascota.hambre < 100) {
        console.log('¡Gracias por alimentarme! Me siento feliz.');
        this.miMascota.hambre += 10;
        this.miMascota.energia += 5;
        this.miMascota.peso += 0.5;
      }
    }
    // if (this.miMascota.nivelFelicidad > 100) {
    //   console.log('Ya no tengo hambre.');
    //   this.miMascota.nivelFelicidad = 100;
    //   // this.miMascota.hambre += 10;
    //   this.miMascota.energia += 5;
    //   this.miMascota.peso += 0.5;
    // }
  }

  jugarConMascota() {
    if (this.miMascota.nivelFelicidad = 100){
      console.log('¡Me encanta jugar contigo!');
      this.miMascota.hambre -= 5;
      this.miMascota.energia -= 10;
      this.miMascota.peso -= 0.2;
    }
  }

  saludMascota() {
    if (this.miMascota.salud < 100){
      console.log('¡Me encanta jugar contigo!');
      this.miMascota.nivelFelicidad -= 5;
      this.miMascota.hambre -= 5;
      this.miMascota.energia -= 10;
      this.miMascota.peso -= 0.2;
    }
  }
}


