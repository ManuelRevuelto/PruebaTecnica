import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    cod_article: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  foreignError = false;

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    private articleService: ArticleService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  create(): void {
    this.form.patchValue({
      price: this.form.value.price.toString().replace(',', '.'),
    });
    this.articleService.create(this.form.value).subscribe({
      next: (v) => {
        console.log('Guardado');
        console.log(v);
        this.dialogRef.close();
        location.reload();
      },
      error: (e) => {
        console.warn(e);
        if (e == 409) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Has introducido un codigo repetitido',
          });
        }
      },
    });
  }
}
