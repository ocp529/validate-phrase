import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PhraseService } from 'src/app/services/phrase.service';

@Component({
  selector: 'app-negative-sentences-list',
  templateUrl: './negative-sentences-list.component.html',
  styleUrls: ['./negative-sentences-list.component.css']
})

export class NegativeSentencesListComponent implements OnInit {

  public length: number = 0;  
  public displayedColumns: string[] = [
    'type',
    'sentences',
    'pluralSingular',
    'actions'
  ];

  constructor(public phraseService: PhraseService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.phraseService.listNegativeSentences(); 
    this.length = this.phraseService.myList.length;  
  }

  deleteSentence(element: any) {
    if (confirm("Are you sure to delete the record?")) {
      this.phraseService.deleteNegativeSentences(element);
      this.phraseService.listNegativeSentences();
      this.toastr.warning('common nouns or complement removed', 'Record removed');
    }
  }
}
