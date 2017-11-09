import {ChangeDetectorRef, Component, Input, NgZone, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'touch-controls-number-pad',
  templateUrl: 'numberPad.component.html',
  styleUrls: ['numberPad.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: NumberPadComponent, multi: true }
  ]
})
export class NumberPadComponent implements ControlValueAccessor {
  @Input()
  public infoText: string;

  @Input()
  public step = 1;

  @Input()
  public min = -Infinity;

  @Input()
  public max = Infinity;

  public currentValue: number;
  public isDecrementMouseDown: boolean;
  public isIncrementMouseDown: boolean;

  private _onChange: (value: any) => void;
  private _onTouch: () => void;
  private _longPressSpeed = 700;

  constructor(private _zone: NgZone, private _changeDetector: ChangeDetectorRef) {
  }

  public writeValue(obj: any): void {
    this.currentValue = +obj;
    this.checkMinMax();
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  public incrementMouseDown(): void {
    this.isIncrementMouseDown = true;
    this.increment();
  }

  private increment(): void {
    if (!this.isIncrementMouseDown) {
      return;
    }

    this.currentValue += this.step;
    this.checkMinMax();
    this._onChange(this.currentValue);

    this.setTimeout(() => this.increment());
  }

  public decrementMouseDown(): void {
    this.isDecrementMouseDown = true;
    this.decrement();
  }

  private decrement(): void {
    if (!this.isDecrementMouseDown) {
      return;
    }

    this.currentValue -= this.step;
    this.checkMinMax();
    this._onChange(this.currentValue);

    this.setTimeout(() => this.decrement());
  }

  private setTimeout(fn: Function) {
    this._zone.runOutsideAngular(() =>
      setTimeout(() => {
        fn();
        this._changeDetector.detectChanges();
      }, this.getNextLongPressSpeed())
    );
  }

  public mouseUp(): void {
    this.isDecrementMouseDown = false;
    this.isIncrementMouseDown = false;
    this._longPressSpeed = 700;
  }

  private getNextLongPressSpeed(): number {
    this._longPressSpeed = Math.max(this._longPressSpeed * 0.75, 50);

    return this._longPressSpeed;
  }

  private checkMinMax(): void {
    if (this.currentValue > this.max) {
      this.currentValue = this.max;
    }

    if (this.currentValue < this.min) {
      this.currentValue = this.min;
    }
  }
}
