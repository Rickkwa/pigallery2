import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapStateService {
  private _mapClicked = new Subject<void>();

  public readonly mapClicked: Observable<void> = this._mapClicked.asObservable();

  constructor() {}

  public clickMap(): void {
    this._mapClicked.next();
  }
}
