import { Component } from '@angular/core';
import { GoogleSentimentService } from './services/googleSentimentApi.service';
import { Comments } from './classes/comment';
import { EnteredData } from './classes/enteredData';
import { DocumentData } from './classes/documentData';
import { DocumentSentiment } from './classes/documentSentiment';
import { RequestFile } from './classes/requestFile';
import { TextData } from './classes/textData';
import { GoogleSentimentApiNewService } from './services/google-sentiment-api-new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  lstcomments: Comments[];
  lstGoogleResponse: EnteredData[];

  getTextBoxVal(item) {
    console.log(item.value);
  }

  constructor(private _GoogleSentimentService: GoogleSentimentService) {}

  ngOnInit() {
    let documentData = new DocumentData();
    documentData.content = 'I hate HSBC sometimes';
    documentData.type = 'PLAIN_TEXT';

    let requestFileData = new RequestFile();
    requestFileData.document = documentData;
    requestFileData.encodingType = 'UTF8';
    console.log("i am running fine");
    this._GoogleSentimentService.getAnalysis(requestFileData).subscribe(
      data => {
        console.log("Data received",data);
        this.lstGoogleResponse = data;
      }, 
      error=>{
        console.error("Error!");
      }
    ); 
  }
}