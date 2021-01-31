import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from "./componentes/test/test.component";

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule
  ],
  exports: [TestComponent]
})
export class TestModule { }