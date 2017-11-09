import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {NumberPadComponent} from './components/numberPad/numberPad.component';
import {NumberPadContainerComponent} from './components/numberPad/numberPadContainer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NumberPadShadowComponent} from './components/numberPadShadow/numberPadShadow.component';
import {NumberPadContainerShadowComponent} from './components/numberPadShadow/numberPadContainerShadow.component';
import {NumberPadContainerPolymerComponent} from './components/numberPadPolymer/numberPadContainerPolymer.component';
import {SingleSlotComponent} from './components/slots/singleSlot.component';
import {NumberPadSlotComponent} from './components/numberPad/numberPadSlot.component';
import {NumberPadShadowSlotComponent} from './components/numberPadShadow/numberPadShadowSlot.component';
import {MultiSlotComponent} from './components/slots/multiSlot.component';
import {SlotContainerComponent} from './components/slots/slotContainer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumberPadComponent,
    NumberPadContainerComponent,
    NumberPadShadowComponent,
    NumberPadContainerShadowComponent,
    NumberPadContainerPolymerComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    NumberPadSlotComponent,
    NumberPadShadowSlotComponent,
    SlotContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
