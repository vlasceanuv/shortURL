import { Component, OnInit } from '@angular/core';
import { ShortURL } from '../shortURL';
import { ActivatedRoute } from '@angular/router';
import { ShortURLService } from '../shortURL.service';

@Component({
  selector: 'app-shortURL-details',
  templateUrl: './shortURL-details.component.html',
  styleUrls: ['./shortURL-details.component.css']
})
export class ShortURLDetailsComponent implements OnInit {

  id: number
  shortURL: ShortURL
  constructor(private route: ActivatedRoute, private shortURLService: ShortURLService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.shortURL = new ShortURL();
    this.shortURLService.getShortURLById(this.id).subscribe( data => {
      this.shortURL = data;
    });
  }

}
