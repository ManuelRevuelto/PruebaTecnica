import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    cod_article: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    private articleService: ArticleService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  create(): void {
    console.log(this.form.value);
    this.articleService.create(this.form.value).subscribe((result) => {
      console.log('Guardado');
      console.log(result)
      this.dialogRef.close();
      location.reload();
    });
    
  }

}
