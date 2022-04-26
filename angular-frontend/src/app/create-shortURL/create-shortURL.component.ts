import { Component, OnInit } from '@angular/core';
import { ShortURL } from '../shortURL';
import { ShortURLService } from '../shortURL.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shortURL',
  templateUrl: './create-shortURL.component.html',
  styleUrls: ['./create-shortURL.component.css']
})
export class CreateShortURLComponent implements OnInit {

  shortURL: ShortURL = new ShortURL();
  constructor(private shortURLService: ShortURLService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveShortURL(){
      let url;
      if(this.shortURL.originalURL === null) return false;
      try {
        url = new URL(this.shortURL.originalURL);
      } catch (_) {
        return false;  
      }
    
    if(!(url.protocol === "http:" || url.protocol === "https:")) return false;

    this.shortURLService.createShortURL(this.shortURL).subscribe( data =>{
      console.log((data as ShortURL).id);
      console.log((data as ShortURL).shortURL);
      this.goToShortURLDetails((data as ShortURL).id);
    },
    error => console.log(error));
    return true;
  }

  goToShortURLDetails( id: number){
    this.router.navigate([`/shortURL-details/${id}`]);
  }
  
  onSubmit(){
    console.log(this.shortURL);
    this.saveShortURL();
  }
}
