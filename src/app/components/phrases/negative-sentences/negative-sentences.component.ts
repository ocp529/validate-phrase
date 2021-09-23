import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { NegativeSentences } from 'src/app/models/negativeSentences';
import { PhraseService } from 'src/app/services/phrase.service';

@Component({
  selector: 'app-negative-sentences',
  templateUrl: './negative-sentences.component.html',
  styleUrls: ['./negative-sentences.component.css']
})
export class NegativeSentencesComponent implements OnInit {
  form: FormGroup;
  formCommon: FormGroup;
    
  public maxLabelSentence: string = '100';

  constructor(private formBuilder: FormBuilder, private phraseService: PhraseService, private toastr: ToastrService) { 
    this.form = this.formBuilder.group({
      sentences: ['', [Validators.required, Validators.maxLength(100)]]
    });
    this.formCommon = this.formBuilder.group({
      id: '',
      type: ['', [Validators.required]],
      sentences: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[a-zA-Z0-9\\u00C0-\\u017F\\s()-]+$`))]],
      options: ''
    });
  }

  ngOnInit(): void {
    this.phraseService.listNegativeSentences();    
  }  

  validateSentence() {
    let complements = this.phraseService.getStringComplements();
    let commonNounsPlural = this.phraseService.getStringCommonNounsPlural();
    let commonNounsSingular = this.phraseService.getStringCommonNounsSingular();
    let nounsPlural = this.phraseService.getStringNounsPlural();
    let nounsSingular = this.phraseService.getStringNounsSingular();
    let phraseSentences = this.form.get('sentences')?.value;
    let phraseRegex = new RegExp(`^(I(\\s(am)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `You(\\s(are)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `He(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `She(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `It(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `We(\\s(are)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `They(\\s(are)\\s(not)(\\s?(\\s(${complements}))?))|` +
    `(${nounsSingular})(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` +
    `(${nounsPlural})(\\s(are)\\s(not)(\\s?(\\s(${complements}))?))|` +
    `This(\\s(${commonNounsSingular}))?(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `That(\\s(${commonNounsSingular}))?(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` +
    `This(\\s(${commonNounsPlural}))?(\\s(are)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `That(\\s(${commonNounsPlural}))?(\\s(are)\\s(not)(\\s?(\\s(${complements}))?))|` +
    `These(\\s(${commonNounsSingular}))?(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `Those(\\s(${commonNounsSingular}))?(\\s(is)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `These(\\s(${commonNounsPlural}))?(\\s(are)\\s(not)(\\s?(\\s(${complements}))?))|` + 
    `Those(\\s(${commonNounsPlural}))?(\\s(are)\\s(not)(\\s?(\\s(${complements}))?)))$`)
    
    if (!phraseRegex.test(phraseSentences)) {
      this.toastr.error('The sentence in the past tense is incorrect.', 'Invalid');      
      return;
    } else {
      this.toastr.success('Negative sentence in valid present tense.', 'Valid');      
    }
  }

  addSentence() {    
    const phrase: NegativeSentences = {
      id: this.phraseService.getNewGuid(),
      type: this.formCommon.get('type')?.value,
      sentences: this.formCommon.get('sentences')?.value,
      pluralSingular: this.formCommon.get('options')?.value
    }

    this.phraseService.saveNegativeSentences(phrase);
    this.toastr.success('Common nouns and complements saved.', 'Record saved');
    this.phraseService.listNegativeSentences();
    this.formCommon.reset();
  }
  
  setOptionsValue(type: string) {
    if (type !== "Complements") {
      this.formCommon.get('options')?.setValue('Singular');
    } else {
      this.formCommon.get('options')?.setValue('');
    }
  }
}