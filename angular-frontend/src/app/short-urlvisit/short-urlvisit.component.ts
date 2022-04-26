import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { OriginalURLService } from '../originalURL.service';

@Component({
  selector: 'app-short-urlvisit',
  templateUrl: './short-urlvisit.component.html',
  styleUrls: ['./short-urlvisit.component.css']
})
export class ShortURLVisitComponent implements OnInit {

  shortURL: String;
  originalIURL: String;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private originalURLService: OriginalURLService) { }

  ngOnInit(): void {
    
    this.shortURL = this.activatedRoute.snapshot.params['id'];
    
    console.log(this.shortURL);

    this.originalURLService.getOriginalURLByShortURL(this.shortURL).subscribe(data => {
      console.log(data);
      this.originalIURL = data.originalURL;
      window.location.href = data.originalURL;
    });
    
  }

}
