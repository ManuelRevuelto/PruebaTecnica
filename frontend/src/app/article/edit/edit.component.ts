import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    cod_article: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private articleService: ArticleService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.articleService.find(this.data.id).subscribe((result) => {
      console.log('Tenemos la info');
      console.log(result);
      this.form.patchValue(result);
      console.warn(this.form.value)
    });
  }

  update(): void {
    this.articleService.update(this.data.id, this.form.value).subscribe((result) => {
      console.log('Guardado');
      this.dialogRef.close();
    });
    
  }
}
