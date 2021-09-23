import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NegativeSentences } from '../models/negativeSentences';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  myAppUrl = 'http://localhost:9090/';
  myApiUrl = 'api/NegativeSentences/';
  myList: Array<NegativeSentences> = [];

  constructor(private http: HttpClient) { }

  saveNegativeSentences(phrases: NegativeSentences) {
    let arrayEmpyt = Array<NegativeSentences>();
    let arrayPhrase = (localStorage.getItem('phrases') || arrayEmpyt) as NegativeSentences[];

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    //Agregamos el nuevo registra al array.
    arrayPhrase.push(phrases);
    //Guardamos el array en el localStorage.
    localStorage.setItem('phrases', JSON.stringify(arrayPhrase));
  }

  deleteNegativeSentences(element: any) {
    let arrayEmpyt = Array<NegativeSentences>();
    let arrayPhrase = (localStorage.getItem('phrases') || arrayEmpyt) as NegativeSentences[];

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    //Buscamos el objeto a eliminar en el array del localStorage.
    for (var i = 0; i < arrayPhrase.length; i++) {
      if (arrayPhrase[i].id === element.id) {
        arrayPhrase.splice(i, 1);
      }
    }
    
    //Guardamos el array actualizado del objeto en el localStorage.
    localStorage.setItem('phrases', JSON.stringify(arrayPhrase));
  }

  listNegativeSentences() {    
    let arrayEmpyt = Array<NegativeSentences>();
    let arrayPhrase = (localStorage.getItem('phrases') || arrayEmpyt);

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    this.myList = arrayPhrase as NegativeSentences[];
  }

  getNewGuid = () => {    
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  getStringComplements = () => {
    let arrayPhrase = (localStorage.getItem('phrases') ||  Array<NegativeSentences>()) as NegativeSentences[];

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    let foundType = arrayPhrase.filter(ap => (ap.type == "Complements"));
    let normalizedArray = foundType.map(function(obj) {
      return obj.sentences;
    });

    return normalizedArray.join("|");
  };

  getStringCommonNounsPlural = () => {
    let arrayPhrase = (localStorage.getItem('phrases') ||  Array<NegativeSentences>()) as NegativeSentences[];

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    let foundType = arrayPhrase.filter(ap => (ap.type == "Common nouns" && ap.pluralSingular == "Plural"));
    let normalizedArray = foundType.map(function(obj) {
      return obj.sentences;
    });

    return normalizedArray.join("|");
  };

  getStringCommonNounsSingular = () => {
    let arrayPhrase = (localStorage.getItem('phrases') ||  Array<NegativeSentences>()) as NegativeSentences[];

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    let foundType = arrayPhrase.filter(ap => (ap.type == "Common nouns" && ap.pluralSingular == "Singular"));
    let normalizedArray = foundType.map(function(obj) {
      return obj.sentences;
    });

    return normalizedArray.join("|");
  };

  getStringNounsPlural = () => {
    let arrayPhrase = (localStorage.getItem('phrases') ||  Array<NegativeSentences>()) as NegativeSentences[];

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    let foundType = arrayPhrase.filter(ap => (ap.type == "Nouns" && ap.pluralSingular == "Plural"));
    let normalizedArray = foundType.map(function(obj) {
      return obj.sentences;
    });

    return normalizedArray.join("|");
  };

  getStringNounsSingular = () => {
    let arrayPhrase = (localStorage.getItem('phrases') ||  Array<NegativeSentences>()) as NegativeSentences[];

    if (typeof arrayPhrase === 'string') {
      arrayPhrase = JSON.parse(arrayPhrase);
    }

    let foundType = arrayPhrase.filter(ap => (ap.type == "Nouns" && ap.pluralSingular == "Singular"));
    let normalizedArray = foundType.map(function(obj) {
      return obj.sentences;
    });

    return normalizedArray.join("|");
  };
}
