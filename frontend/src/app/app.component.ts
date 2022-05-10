import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Article } from './models/article';
import { ArticleService } from './services/article.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditComponent } from './article/edit/edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'code',
    'description',
    'stock',
    'price',
    'actions',
  ];
  articles: Article[] = [];
  submitted = false;

  title = '';

  constructor(public articleService: ArticleService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.articleService.getAll().subscribe((res: Article[]) => {
      this.articles = res;
      console.log(res);
      console.log(this.articles);
    });
  }

  delete(id: number) {
    this.articleService.delete(id).subscribe((res) => {
      this.articles = this.articles.filter((item) => item.id !== id);
      console.log('Articulo eliminado');
    });
  }

  edit(id: number) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  create(){
    
  }
}
