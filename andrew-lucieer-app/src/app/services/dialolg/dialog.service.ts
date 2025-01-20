import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public isDialogOpenSubject = new Subject<boolean>();
  public isDialogOpen$ = this.isDialogOpenSubject.asObservable();
}