import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Character } from 'src/app/shared/models/character.model';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent implements OnInit {

  characters$?: Observable<Character[]>;


  characters?: Character[];

  // charactersSubscription?: Subscription;

  tableHeadTitles = [
    "ID",
    "Name",
    "Status",
    "Species", 
  ]
  constructor(private charactersService: CharactersService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.characters$ = this.charactersService.getCharacters()

    // this.charactersSubscription = this.charactersService.getCharacters().subscribe(characters => {
    //   if (characters) {
    //     this.characters = characters;
    //     this.cd.detectChanges();

    //   }
    // }) 

  }
  // ngOnDestroy(): void {
  //     this.charactersSubscription?.unsubscribe()
  // }
}
