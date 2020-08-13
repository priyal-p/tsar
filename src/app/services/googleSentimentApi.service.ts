import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { RequestFile } from '../classes/requestFile';
import { catchError } from 'rxjs/operators';
@Injectable({
     providedIn: 'root'
   })
export class GoogleSentimentService {
     constructor(private httpclient: HttpClient) { }

     // post(requestFileData: RequestFile): Observable<any> {
     //      // tslint:disable-next-line:max-line-length
     //      console.log("inside service", requestFileData);
     //      // tslint:disable-next-line:max-line-length
     //      return this.httpclient.post('https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyA-0HgfLNHNeavUQjoo_a-9M7XNbFNF_9w', requestFileData);
     // }

public getAnalysis(requestFileData):Observable<any>{
     return this.httpclient.post<any>
          ('https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyA-0HgfLNHNeavUQjoo_a-9M7XNbFNF_9w', requestFileData)
          .pipe(catchError(this.errorHandler));
}

errorHandler(error: HttpErrorResponse){
     return throwError(error);
} 
}
   