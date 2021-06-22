import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public selectedSegment: string = 'bebidas'
  public productoSeleccionado: string
  public cantidadBebida = 0;
  public precioFinal = 0;

  constructor() {}

  ngOnInit() {
    this.precioFinal = 0
    this.cantidadBebida = 0
  }

  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }

  public cantidadUP(producto: string)
  {
    this.cantidadBebida= this.cantidadBebida+1
    console.log(this.cantidadBebida);
    console.log(producto);
    this.total(producto)
  }

  public total(producto: string)
  {
    console.log(producto);
    if (producto=='coca')
    {
      this.precioFinal=this.precioFinal+0.35
    }
    else if (producto=='milk')
    {
      this.precioFinal=this.precioFinal+5.00
    }
    else if (producto=='beer')
    {
      this.precioFinal=this.precioFinal+3.50
    }
    else if (producto=='camaron')
    {
      this.precioFinal=this.precioFinal+8.00
    }
    else if (producto=='wrap')
    {
      this.precioFinal=this.precioFinal+10.00
    }
    else if (producto=='dedos')
    {
      this.precioFinal=this.precioFinal+2.50
    }
    else if (producto=='pie')
    {
      this.precioFinal=this.precioFinal+5.50
    }
    else if (producto=='ches')
    {
      this.precioFinal=this.precioFinal+4.00
    }
    else if (producto=='choco')
    {
      this.precioFinal=this.precioFinal+2.50
    }

  }

}
