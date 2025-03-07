import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      
    ]),
  ],
});
